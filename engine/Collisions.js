/*

  Demonstrates collision detection between convex and non-convex polygons
  and how to detect whether a point vector is contained within a polygon

  Possible techniques:

    x Bounding box or radii
      Inacurate for complex polygons

    x SAT (Separating Axis Theorem)
      Only handles convex polygons, so non-convex polygons must be subdivided

    x Collision canvas. Draw polygon A then polygon B using `source-in`
      Slow since it uses getImageData and pixels must be scanned. Algorithm
      can be improved by drawing to a smaller canvas but downsampling effects
      accuracy and using canvas transformations (scale) throws false positives

    - Bounding box + line segment intersection
      Test bounding box overlap (fast) then proceed to per edge intersection
      detection if necessary. Exit after first intersection is found since
      we're not simulating collision responce. This technique fails to detect
      nested polygons, but since we're testing moving polygons it's ok(ish)
*/

    var extend = function (child, parent) {
        for (var key in parent) {
            if (Object.prototype.hasOwnProperty.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor;
        child.__super__ = parent.prototype;
        return child;
    };

    var Vector = (function () {
        var max = Math.max;
        var min = Math.min;
        var sqrt = Math.sqrt;

        function Vector(x, y) {
            this.x = x;
            this.y = y;
            this.set(x, y);
        }

        Vector.prototype.set = function (x, y) {
            this.x = x || 0.0;
            this.y = y || 0.0;
            return this;
        };

        Vector.prototype.add = function (vector) {
            this.x += vector.x;
            this.y += vector.y;
            return this;
        };

        Vector.prototype.scale = function (scalar) {
            this.x *= scalar;
            this.y *= scalar;
            return this;
        };

        Vector.prototype.div = function (scalar) {
            this.x /= scalar;
            this.y /= scalar;
            return this;
        };

        Vector.prototype.dot = function (vector) {
            return this.x * vector.x + this.y * vector.y;
        };

        Vector.prototype.min = function (vector) {
            this.x = min(this.x, vector.x);
            return this.y = min(this.y, vector.y);
        };

        Vector.prototype.max = function (vector) {
            this.x = max(this.x, vector.x);
            return this.y = max(this.y, vector.y);
        };

        Vector.prototype.lt = function (vector) {
            return this.x < vector.x || this.y < vector.y;
        };

        Vector.prototype.gt = function (vector) {
            return this.x > vector.x || this.y > vector.y;
        };

        Vector.prototype.normalize = function () {
            var mag = sqrt(this.x * this.x + this.y * this.y);
            if (mag !== 0) {
                this.x /= mag;
                this.y /= mag;
            }
        };

        Vector.prototype.clone = function () {
            return new Vector(this.x, this.y);
        };

        return Vector;

    })();

    var Edge = (function () {

        function Edge(pointA, pointB, polygon) {
            this.pointA = pointA;
            this.pointB = pointB;
            this.polygon = polygon;
        }

        Edge.prototype.intersects = function (other, ray) {

            var dy1 = this.pointB.y - this.pointA.y,
                dx1 = this.pointB.x - this.pointA.x,
                dx2 = this.pointA.x + this.polygon.offset.x - (other.pointA.x + other.polygon.offset.x),
                dy2 = this.pointA.y + this.polygon.offset.y - (other.pointA.y + other.polygon.offset.y),
                dx3 = other.pointB.x - other.pointA.x,
                dy3 = other.pointB.y - other.pointA.y;

            if (dy1 / dx1 !== dy3 / dx3) {
                var d = dx1 * dy3 - dy1 * dx3;
                if (d !== 0) {
                    var r = (dy2 * dx3 - dx2 * dy3) / d;
                    var s = (dy2 * dx1 - dx2 * dy1) / d;
                    if (r >= 0 && (ray || r <= 1)) {
                        if (s >= 0 && s <= 1) {
                            return new Vector(this.pointA.x + this.polygon.offset.x + r * dx1, this.pointA.y + this.polygon.offset.y + r * dy1);
                        }
                    }
                }
            }
            return false;
        };

        return Edge;

    })();

    var Polygon = (function () {
        
        var max = Math.max;
        var min = Math.min;
        var sin = Math.sin;
        var cos = Math.cos;
        var PI2 = Math.PI * 2;

        function Polygon(vertices, edges) {
            this.vertices = vertices || [];
            this.edges = edges || [];
            this.colliding = false;
            this.center = new Vector;
            this.offset = new Vector;
            this.bounds = {
                min: new Vector,
                max: new Vector
            };

            if (this.vertices.length) {
                this.computeCenter();
                this.computeBounds();
                this.computeEdges();
            }
        }

        Polygon.prototype.setOffset = function (x,y) {
            this.offset = new Vector(x,y);
            this.computeCenter();
            this.computeBounds();
        }

        Polygon.prototype.translate = function (vector) {
            var ref = this.vertices;
            var results = [];

            this.center.add(vector);
            this.bounds.min.add(vector);
            this.bounds.max.add(vector);

            for (var i = 0, len = ref.length; i < len; i++) {
                var vertex = ref[i];
                results.push(vertex.add(vector));
            }
            return results;
        };

        Polygon.prototype.invertY = function() {
            for (var vertex of this.vertices) {
                vertex.y = -vertex.y;
            }
            this.computeCenter();
            this.computeBounds();
        }

        Polygon.prototype.rotate = function (radians, pivot) {
            var s = sin(radians);
            var c = cos(radians);
            var ref = this.vertices;
            var results = [];
            if (!pivot) pivot = this.center;

            for (var i = 0, len = ref.length; i < len; i++) {
                var vertex = ref[i];
                var dx = vertex.x - pivot.x;
                var dy = vertex.y - pivot.y;
                vertex.x = c * dx - s * dy + pivot.x;
                results.push(vertex.y = s * dx + c * dy + pivot.y);
            }
            return results;
        };

        Polygon.prototype.computeCenter = function () {
            var ref = this.vertices;
            this.center.set(0, 0);

            for (var i = 0, len = ref.length; i < len; i++) {
                var vertex = ref[i];
                this.center.add(vertex);
            }
            return this.center.div(this.vertices.length).add(this.offset);
        };

        Polygon.prototype.computeBounds = function () {
            var ref = this.vertices;
            var results = [];
            this.bounds.min.set(Number.MAX_VALUE, Number.MAX_VALUE);
            this.bounds.max.set(-Number.MAX_VALUE, -Number.MAX_VALUE);

            for (var i = 0, len = ref.length; i < len; i++) {
                var vertex = ref[i];
                var voff = new Vector(vertex.x+this.offset.x, vertex.y+this.offset.y);
                this.bounds.min.min(voff);
                results.push(this.bounds.max.max(voff));
            }
            return results;
        };

        Polygon.prototype.computeEdges = function () {
            var ref = this.vertices;
            var results = [];
            this.edges.length = 0;

            for (var i = 0, len = ref.length; i < len; i++) {
                var vertex = ref[i];
                results.push(
                    this.edges.push(new Edge(vertex, this.vertices[(i + 1) % this.vertices.length], this))
                );
            }
            return results;
        };

        Polygon.prototype.contains = function (vector) {

            if (vector.x > this.bounds.max.x || vector.x < this.bounds.min.x) return false;
            if (vector.y > this.bounds.max.y || vector.y < this.bounds.min.y) return false;

            function minX(o) {
                return o.x;
            }
            function minY(o) {
                return o.y;
            }

            var outside = new Vector(min.apply(Math, this.vertices.map(minX)) - 1, min.apply(Math, this.vertices.map(minY)) - 1);
            var ray = new Edge(vector, outside, this);
            var intersections = 0;
            var ref = this.edges;

            for (var i = 0, len = ref.length; i < len; i++) {
                var edge = ref[i];
                if (ray.intersects(edge, true)) ++intersections;
            }
            return !!(intersections % 2);
        };

        Polygon.prototype.collides = function (polygon) {
            var ref = this.edges;
            var overlap = true;
/*
            if (polygon.bounds.min.gt(this.bounds.max)) overlap = false;
            if (polygon.bounds.max.lt(this.bounds.min)) overlap = false;
            overlap = false;
*/
            for (var i = 0, len = ref.length; i < len; i++) {
                var edge = ref[i];
                var ref2 = polygon.edges;
                for (var j = 0, len2 = ref2.length; j < len2; j++) {
                    var other = ref2[j];
                    if (edge.intersects(other)) {
                        return true;
                    }
                }
            }
            return false;
        };

        Polygon.prototype.wrap = function (bounds) {
            var ox = (this.bounds.max.x - this.bounds.min.x) + (bounds.max.x - bounds.min.x);
            var oy = (this.bounds.max.y - this.bounds.min.y) + (bounds.max.y - bounds.min.y);

            if (this.bounds.max.x < bounds.min.x) {
                this.translate(new Vector(ox, 0));
            } else if (this.bounds.min.x > bounds.max.x) {
                this.translate(new Vector(-ox, 0));
            }

            if (this.bounds.max.y < bounds.min.y) {
                return this.translate(new Vector(0, oy));
            } else if (this.bounds.min.y > bounds.max.y) {
                return this.translate(new Vector(0, -oy));
            }
        };

        Polygon.prototype.draw = function (ctx) {
            var color = this.colliding ? '#FF0051' : this.color;
            var ref = this.vertices;

            ctx.strokeStyle = color;
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(this.center.x, this.center.y, 5, 0, PI2);
            ctx.globalAlpha = 0.2;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(this.bounds.min.x, this.bounds.min.y);
            ctx.lineTo(this.bounds.max.x, this.bounds.min.y);
            ctx.lineTo(this.bounds.max.x, this.bounds.max.y);
            ctx.lineTo(this.bounds.min.x, this.bounds.max.y);
            ctx.closePath();
            ctx.globalAlpha = 0.05;
            ctx.fill();
            ctx.beginPath();
            
            for (var i = 0, len = ref.length; i < len; i++) {
                var vertex = ref[i];
                ctx.lineTo(vertex.x, vertex.y);
            }

            ctx.closePath();
            ctx.globalAlpha = 0.8;
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.lineWidth = 2;
            return ctx.stroke();
        };

        return Polygon;

    })();

export { Polygon, Vector };
