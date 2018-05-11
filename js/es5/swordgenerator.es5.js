"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Given two numbers, this function returns a random in that is
 * in the range [min,max)
 * 
 * @param {any} rng
 * @param {number} min 
 * @param {number} max
 * @return {number}
 */
function getRandomInt(rng, min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(rng.random() * (max - min)) + min;
}

/** 
 * Swords are the weapon type that has an associated
 * stye and THREE geometry object
 */

var Sword = function Sword(style) {
    _classCallCheck(this, Sword);

    this.style = style;
    this.geometry = new THREE.Geometry();
};

/**
 * Factory class that produces instances of
 * swords using a set of parameters
 */


var SwordGenerator = function () {

    /**
     * The constructor instantiates all the necessary variable for
     * generating a sword. The options object may be left blank or
     * populated with values of properties you wish to change.
     * 
     * @param {string} seedVal
     * @param {string} swordStyle
     * @param {JSON} swordTemplate 
     * @param {JSON} options 
     */
    function SwordGenerator(seedVal, swordStyle, swordTemplate) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        _classCallCheck(this, SwordGenerator);

        this.seedVal = seedVal;
        this.numGenerator = seedVal != '' ? { random: new Math.seedrandom(this.seedVal) } : { random: Math.random };
        this.swordStyle = swordStyle;
        this.swordTemplate = swordTemplate;
        // Sets all optional parameters for generation
        this.maxBaseDivs = "undefined" === typeof options.maxBaseDivs || "number" != typeof options.maxBaseDivs ? 3 : options.maxBaseDivs;
        this.maxMidDivs = "undefined" === typeof options.maxMidDivs || "number" != typeof options.maxMidDivs ? 3 : options.maxMidDivs;
        this.maxTipDivs = "undefined" === typeof options.maxtipDivs || "number" != typeof options.maxTipDivs ? 2 : options.maxTipDivs;
        this.minDivLength = "undefined" === typeof options.minDivLength || "number" != typeof options.minDivLength ? 0.2 : options.minDivLength;
        this.bladeWidthToleranceRatio = "undefined" === typeof options.bladeWidthToleranceRatio || "number" != typeof options.bladeWidthToleranceRatio ? 1 : options.bladeWidthToleranceRatio;
        this.bladeThickness = "undefined" === typeof options.bladeThickness || "number" != typeof options.bladeThickness ? 0.03 : options.bladeThickness;
        this.fullerWidthRatio = "undefined" === typeof options.fullerWidthRatio || "number" != typeof options.fullerWidthRatio ? 0.33 : options.fullerWidthRatio;
        this.applyFuller = "undefined" === typeof options.applyFuller || "boolean" != typeof options.applyFuller ? true : options.applyFuller;
        this.equalBaseDivs = "undefined" === typeof options.equalBaseDivs || "boolean" != typeof options.equalBaseDivs ? false : options.equalBaseDivs;
        this.equalMidDivs = "undefined" === typeof options.equalMidDivs || "boolean" != typeof options.equalMidDivs ? false : options.equalMidDivs;
        this.equalTipDivs = "undefined" === typeof options.equalTipDivs || "boolean" != typeof options.equalTipDivs ? true : options.equalTipDivs;
        this.bladeBaseProportion = "undefined" === typeof options.bladeBaseProportion || "number" != typeof options.bladeBaseProportion ? .25 : options.bladeBaseProportion;
        this.bladeMidProportion = "undefined" === typeof options.bladeMidProportion || "number" != typeof options.bladeMidProportion ? .65 : options.bladeMidProportion;
    }

    /**
     * The factory method of this class that returns a new sword
     * instance with procedurally generated blade geometry
     * 
     * @return {Sword}
     */


    _createClass(SwordGenerator, [{
        key: "generateSword",
        value: function generateSword() {
            // Create a new sword Object
            var sword = new Sword(this.swordStyle);
            // Build the 3D meshes for blade components
            this.buildBlade(sword.geometry);
            this.buildGuard(sword.geometry);
            this.buildHandle(sword.geometry);
            this.buildPommel(sword.geometry);
            sword.geometry.uvsNeedUpdate = true;
            sword.geometry.computeBoundingBox();
            sword.geometry.computeVertexNormals();
            sword.geometry.computeFaceNormals();
            return sword;
        }

        /**
         * Procedurally generates a sword blade and adds it to the swords geometry
         * 
         * @param {THREE.Geometry} swordGeom
         * @param {number} baseProportion 
         * @param {number} midProportion 
         */

    }, {
        key: "buildBlade",
        value: function buildBlade(swordGeom) {

            // Object to hold relevant values for converting the number
            // arrays to THREE.Vector3's, THREE.Face's and Three.Vector2's
            var bladeGeometry = {
                verts: [],
                faces: []

                // Get the desired blade length
            };var bladeLength = this.swordTemplate.length;
            var fullerWidth = this.swordTemplate.baseWidth * this.fullerWidthRatio;
            var fullerDepth = this.bladeThickness / 4;

            // Determine how many divisions each section has
            var numBaseDivs = getRandomInt(this.numGenerator, 1, this.maxBaseDivs + 1);
            var numMidDivs = getRandomInt(this.numGenerator, 1, this.maxMidDivs + 1);
            var numTipDivs = Math.floor(this.numGenerator.random() * this.maxTipDivs) + 1;
            var totalBladeDivs = numBaseDivs + numMidDivs + numTipDivs;

            // Determine how much of the blade length is allocated to each section
            var baseSectionLength = bladeLength * this.bladeBaseProportion;
            var midSectionLength = bladeLength * this.bladeMidProportion;
            var tipSectionLength = bladeLength * (1 - (this.bladeBaseProportion + this.bladeMidProportion));
            //console.log(`Base Section Length: ${baseSectionLength}`);
            //console.log(`Mid Section Length: ${midSectionLength}`);
            //console.log(`Tip Section Length: ${tipSectionLength}`);
            //console.log(`Total Section Length: ${bladeLength}`);

            // Calculate how long equivalent divisions can be depending on the section
            var equalBaseDivLength = baseSectionLength / numBaseDivs;
            var equalMidDivLength = midSectionLength / numMidDivs;
            var equalTipDivLength = tipSectionLength / numTipDivs;

            // Create the blade cross section to start
            bladeGeometry.verts = this.createBladeCrossSection(this.swordTemplate.baseWidth, fullerDepth, fullerWidth);

            // Extrude blade cross-section to full length with all the divisions present
            bladeGeometry = SwordGenerator.extrudeTopMultiple(bladeGeometry, [0, bladeLength / totalBladeDivs, 0], totalBladeDivs);

            // Modify the vertices at each level to be a the desired heights
            var vertIndicesInDivs = SwordGenerator.getAllVertsIndicesAsDivs(bladeGeometry, totalBladeDivs, bladeLength);

            //console.log(`Num divs: ${totalBladeDivs}`);
            //console.log(`Num of layers without first: ${vertIndicesInDivs.length}`);
            //console.log(`Num verts per layer: ${vertIndicesInDivs[0].length}`);
            //console.log(vertIndicesInDivs);

            var baseSpaceLeft = baseSectionLength;
            var midSpaceLeft = midSectionLength;
            var tipSpaceLeft = tipSectionLength;

            /*
            for (var divIndex = 0; divIndex < vertIndicesInDivs.length; divIndex++) {
                if (divIndex >= 0 && divIndex < numBaseDivs) {
                    // Modifying base div
                    if (this.equalBaseDivs) {
                        // All divs will be evenly spaced
                        for(var vertIndex = 0; vertIndex < vertIndicesInDivs[divIndex].length; vertIndex++) {
                            bladeGeometry.verts[vertIndicesInDivs[divIndex][vertIndex]][1] = equalBaseDivLength + (equalBaseDivLength * divIndex);
                        }
                    }
                    else {
                        if (divIndex == numBaseDivs - 1) {
                            for(var vertIndex = 0; vertIndex < vertIndicesInDivs[divIndex].length; vertIndex++) {
                                bladeGeometry.verts[vertIndicesInDivs[divIndex][vertIndex]][1] = baseSectionLength;
                            }
                        } else {
                            // Div heights will be randomly calculated
                            // Max height is the largest length we can have while leaving space for remaining divs
                            var maxDivLength = baseSpaceLeft - (this.minDivLength * (numBaseDivs - divIndex));
                            var divLength = (this.numGenerator.random() * (this.maxDivLength - this.minDivLength)) + this.minDivLength;
                            // Change y value for all verts at this level
                            for(var vertIndex = 0; vertIndex < vertIndicesInDivs[divIndex].length; vertIndex++) {
                                bladeGeometry.verts[vertIndicesInDivs[divIndex][vertIndex]][1] = divLength + (baseSectionLength - baseSpaceLeft);
                            }
                            baseSpaceLeft = baseSpaceLeft - divLength; 
                        }                   
                    }
                }
                else if (divIndex >= numBaseDivs && divIndex < numBaseDivs + numMidDivs) {
                    // Modifying a mid div
                    if (this.equalMidDivs) {
                        for (var vertIndex = 0; vertIndex < vertIndicesInDivs[divIndex].length; vertIndex++) {
                            bladeGeometry.verts[vertIndicesInDivs[divIndex][vertIndex]][1] = equalMidDivLength + (equalBaseDivLength * divIndex - numBaseDivs) + baseSectionLength;
                        }
                    }
                    else {
                        if (divIndex == numBaseDivs + numMidDivs - 1) {
                            for (var vertIndex = 0; vertIndex < vertIndicesInDivs[divIndex].length; vertIndex++) {
                                bladeGeometry.verts[vertIndicesInDivs[divIndex][vertIndex]][1] = midSectionLength + baseSectionLength;
                            }
                        }
                        else {
                            var maxDivLength = midSpaceLeft - (this.minDivLength * (numMidDivs - (divIndex - numBaseDivs)));
                            var divLength = (this.numGenerator.random() * (maxDivLength - this.minDivLength)) + this.minDivLength;
                            for (var vertIndex = 0; vertIndex < vertIndicesInDivs[divIndex].length; vertIndex++) {
                                bladeGeometry.verts[vertIndicesInDivs[divIndex][vertIndex]][1] = divLength + (baseSectionLength + midSectionLength - midSpaceLeft);
                            }
                            midSpaceLeft = midSpaceLeft - divLength;
                        }
                    }
                }
                else if (divIndex >= numBaseDivs + numMidDivs) {
                    // Modifying a tip div
                    if (this.equalTipDivs) {
                        for (var vertIndex = 0; vertIndex < vertIndicesInDivs[divIndex].length; vertIndex++) {
                            bladeGeometry.verts[vertIndicesInDivs[divIndex][vertIndex]][1] = equalTipDivLength + (equalTipDivLength * (divIndex - numBaseDivs + numMidDivs)) + midSectionLength + baseSectionLength;
                        }
                    }
                    else {
                        if (divIndex == totalBladeDivs - 1) {
                            for (var vertIndex = 0; vertIndex < vertIndicesInDivs[divIndex].length; vertIndex++) {
                                bladeGeometry.verts[vertIndicesInDivs[divIndex][vertIndex]][1] = bladeLength;
                            }
                        }
                        else {
                            var maxDivLength = tipSpaceLeft - (this.minDivLength * (divIndex - numBaseDivs - numMidDivs));
                            var divLength = (this.numGenerator.random() * (maxDivLength - this.minDivLength)) + this.minDivLength;
                            for (var vertIndex = 0; vertIndex < vertIndicesInDivs[divIndex].length; vertIndex++) {
                                bladeGeometry.verts[vertIndicesInDivs[divIndex][vertIndex]][1] = divLength + (bladeLength - tipSpaceLeft);
                            }
                            tipSpaceLeft = tipSpaceLeft - divLength;
                        }
                    }
                }
            }
            */

            bladeGeometry = this.modifyEdgeWidth(bladeGeometry, this.swordTemplate.baseWidth, this.bladeWidthToleranceRatio);

            bladeGeometry = SwordGenerator.createBladeTip(bladeGeometry);

            //console.log(bladeGeometry);
            var threeBladeGeometry = SwordGenerator.convertToTHREEGeometry(bladeGeometry);
            //console.log(threeBladeGeometry);
            var mat = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
            var blade = new THREE.Mesh(threeBladeGeometry, mat);
            blade.updateMatrix();
            swordGeom.merge(blade.geometry, blade.matrix);
        }

        /**
         * 
         * @param {JSON} geom
         * @returns {THREE.Geometry} 
         */

    }, {
        key: "buildGuard",


        /**
         * Given the geometry of the sword, and some parameters about
         * the geometry of the sword, creates a box-shapped guard and
         * merges it with the swords geometry.
         * 
         * @param {THREE.Geometry} swordGeom 
         * @param {number} bladeWidth 
         * @param {number} bladethickness 
         * @param {number} guardThickness 
         * @param {number} guardBladeRatio 
         */
        value: function buildGuard(swordGeom) {
            var bladeWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
            var bladethickness = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .3;
            var guardThickness = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
            var guardBladeRatio = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 4;

            var guardGeom = new THREE.BoxGeometry(guardBladeRatio * bladeWidth, .2, guardThickness);
            var mat = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
            var guard = new THREE.Mesh(guardGeom, mat);
            guard.updateMatrix();
            swordGeom.merge(guard.geometry, guard.matrix);
        }

        /**
         * Given the geometry of the sword, and some parameters about
         * the geometry of the sword, creates a cylindrical handle and
         * merges it with the swords geometry.
         * 
         * @param {THREE.Geometry} swordGeom 
         * @param {number} handleLength 
         * @param {number} handleWidth 
         * @param {number} numHands 
         */

    }, {
        key: "buildHandle",
        value: function buildHandle(swordGeom) {
            var handleLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.35;
            var handleWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.1;
            var numHands = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

            var handleGeom = new THREE.CylinderGeometry(handleWidth, handleWidth, handleLength, 8);
            // Moves translates the handle to fall below the guard and blade
            handleGeom.translate(0, -handleLength / 2, 0);
            var mat = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
            var handle = new THREE.Mesh(handleGeom, mat);

            handle.updateMatrix();
            swordGeom.merge(handle.geometry, handle.matrix);
        }

        /**
         * Given the geometry of the sword, and some parameters about
         * the geometry of the sword, creates a spherical pommel and
         * merges it with the swords geometry.
         * 
         * @param {THREE.Geometry} swordGeom 
         * @param {number} bladeWidth 
         * @param {number} handleLength 
         * @param {number} pommelBladeWidthRatio 
         */

    }, {
        key: "buildPommel",
        value: function buildPommel(swordGeom) {
            var bladeWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.6;
            var handleLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.35;
            var pommelBladeWidthRatio = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.50;

            var pommelWidth = pommelBladeWidthRatio * bladeWidth;
            var pommelGeom = new THREE.SphereGeometry(pommelWidth, 5, 4);
            // Translates the pommel to fall below the handle
            pommelGeom.translate(0, -handleLength, 0);
            var mat = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
            var pommel = new THREE.Mesh(pommelGeom, mat);

            //pommel.updateMatrix();
            swordGeom.merge(pommel.geometry, pommel.matrix);
        }

        /**
         * Creates a cross section of the blade out of vertices (THREE.Vector3)
         * 
         * @param {number} bladeWidth 
         * @param {number} fullerDepth 
         * @param {number} fullerWidth
         * @return {number[][]}
         */

    }, {
        key: "createBladeCrossSection",
        value: function createBladeCrossSection(bladeWidth, fullerDepth, fullerWidth) {
            var verts = [];

            // Back side of the cross-section
            verts.push([-bladeWidth / 2, 0, 0]);
            verts.push([-fullerWidth / 2, 0, -this.bladeThickness / 2]);
            if (this.applyFuller) {
                verts.push([0, 0, -this.bladeThickness / 2 + fullerDepth]);
            } else {
                verts.push([0, 0, -this.bladeThickness / 2]);
            }
            verts.push([fullerWidth / 2, 0, -this.bladeThickness / 2]);
            verts.push([bladeWidth / 2, 0, 0]);
            // Front side of cross-section
            verts.push([fullerWidth / 2, 0, this.bladeThickness / 2]);
            if (this.applyFuller) {
                verts.push([0, 0, this.bladeThickness / 2 - fullerDepth]);
            } else {
                verts.push([0, 0, this.bladeThickness / 2]);
            }
            verts.push([-fullerWidth / 2, 0, this.bladeThickness / 2]);

            return verts;
        }

        /**
         * Extrudes a geometry by in a given direction n-number of
         * times (Where n = numRepeat) and returns the verts at the
         * top of the geometry
         * 
         * @param {JSON} geom
         * @param {number[]} direction 
         * @param {number} numRepeat
         * @return {JSON}
         */

    }, {
        key: "modifyEdgeWidth",


        /**
         * ### CHANGED ###
         * 
         * Modifies the vertices on the left and right edges
         * of the sword blade.
         * NOTE: Currently, this only creates symmetrical blades
         * 
         * @param {JSON} geom
         * @param {number} templateBladeWidth 
         * @param {number} widthToleranceRatio
         * @param {boolean} symmetric
         * @return {JSON}
         */
        value: function modifyEdgeWidth(geom, templateBladeWidth, widthToleranceRatio) {
            var symmetric = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

            // Rules:
            // The x-value of the vertices needs to be within
            // the tolerance ration with respect to templateBladeWidth / 2
            // Example: If the blade template has a width of .6 meters and
            //          the tolerance ratio is .1, then the x-values of the
            //          BladeEdgeVertices may not exceed
            //          .3 meters +/- .06 meters

            var edgeVertIndices = SwordGenerator.getEdgeVertIndices(geom, templateBladeWidth);
            var minBladeWidth = templateBladeWidth - widthToleranceRatio * templateBladeWidth;
            var maxBladeWidth = templateBladeWidth + widthToleranceRatio * templateBladeWidth;
            var divisionWidth = templateBladeWidth;

            for (var i = 0; i < edgeVertIndices.left.length; i++) {
                // Randomly generate a width for this section of the blade
                divisionWidth = templateBladeWidth + this.numGenerator.random() * (maxBladeWidth - minBladeWidth);
                geom.verts[edgeVertIndices.left[i]][0] = -(divisionWidth / 2);
            }

            for (var i = 0; i < edgeVertIndices.right.length; i++) {
                if (!symmetric) {
                    // Randomly generate a width for this section of the blade
                    divisionWidth = templateBladeWidth + this.numGenerator.random() * (maxBladeWidth - minBladeWidth);
                    geom.verts[edgeVertIndices.right[i]][0] = divisionWidth / 2;
                } else if (i < edgeVertIndices.left.length) {
                    geom.verts[edgeVertIndices.right[i]][0] = -geom.verts[edgeVertIndices.left[i]][0];
                }
            }

            return geom;
        }

        /**
         * ### CHANGED ###
         *  
         * Returns the indices of the vertices located on the
         * edges of the blade
         * 
         * @param {JSON} geom 
         * @param {number} bladeWidth
         * @return {JSON}
         */

    }], [{
        key: "convertToTHREEGeometry",
        value: function convertToTHREEGeometry(geom) {
            var threeGeometry = new THREE.Geometry();

            for (var i = 0; i < geom.verts.length; i++) {
                threeGeometry.vertices.push(new THREE.Vector3(geom.verts[i][0], geom.verts[i][1], geom.verts[i][2]));
            }

            for (var i = 0; i < geom.faces.length; i++) {
                threeGeometry.faces.push(new THREE.Face3(geom.faces[i][0], geom.faces[i][1], geom.faces[i][2]));
            }

            SwordGenerator.addUVs(threeGeometry);

            threeGeometry.mergeVertices();
            return threeGeometry;
        }
    }, {
        key: "extrudeTopMultiple",
        value: function extrudeTopMultiple(geom, direction, numRepeat) {

            // Object that manages geometry related values generated
            // during extrusion
            var generatedGeometry = geom;

            for (var i = 0; i < numRepeat; i++) {
                generatedGeometry = SwordGenerator.extrudeTop(generatedGeometry, direction);
            }

            return generatedGeometry;
        }

        /**
         * Extrudes a geometry, from the top, in a given direction
         * 
         * @param {JSON} geom 
         * @param {number[]} direction
         * @return {JSON}
         */

    }, {
        key: "extrudeTop",
        value: function extrudeTop(geom, direction) {

            var topVertIndices = SwordGenerator.getTopVertIndices(geom);

            var extrudedGeom = SwordGenerator.extrudeVertsByIndex(geom, topVertIndices, direction);

            return extrudedGeom;
        }

        /**
         * ### CHANGED ###
         * 
         * @param {JSON} geom
         * @param {number[]} vertexIndices
         * @param {number[]} direction
         * @returns {JSON}
         */

    }, {
        key: "extrudeVertsByIndex",
        value: function extrudeVertsByIndex(geom, vertexIndices, direction) {

            // Object that manages geometry related values generated
            // during extrusion

            if (vertexIndices.length == 0) {
                return geom;
            }

            // Create the new vertices
            var priorVertCount = geom.verts.length;

            for (var i = 0; i < vertexIndices.length; i++) {
                var oldVertex = geom.verts[vertexIndices[i]];
                var newVertX = oldVertex[0] + direction[0];
                var newVertY = oldVertex[1] + direction[1];
                var newVertZ = oldVertex[2] + direction[2];
                var newVertex = [newVertX, newVertY, newVertZ];
                geom.verts.push(newVertex);
            }

            // Create new faces for the 3D mesh
            var i = 0;
            var j = priorVertCount;

            while (i < vertexIndices.length) {
                // On the last iteration we use 0 instead of i+1 or j+1
                if (i == vertexIndices.length - 1) {
                    // CW
                    // Bottom-left triangle
                    geom.faces.push([j, vertexIndices[0], vertexIndices[i]]);

                    // Top-right triangle
                    geom.faces.push([priorVertCount, vertexIndices[0], j]);
                }
                // Otherwise all other sides are done the same
                else {
                        // CW
                        // Bottom-left triangle
                        geom.faces.push([j, vertexIndices[i + 1], vertexIndices[i]]);
                        // Top-right triangle
                        geom.faces.push([j + 1, vertexIndices[i + 1], j]);
                    }
                i++;
                j++;
            }

            return geom;
        }

        /**
         * Given a geometry, adds UVs to it.
         * NOTE: this should be fixed to actually set valid UVs
         * 
         * @param {THREE.Geometry} geom 
         */

    }, {
        key: "addUVs",
        value: function addUVs(geom) {
            for (var i = 0; i < geom.faces.length; i++) {
                geom.faceVertexUvs[0].push([new THREE.Vector2(0, 0), new THREE.Vector2(0, 0), new THREE.Vector2(0, 0)]);
            }
        }

        /**
         * Moves all the vertices at the top of the blade to the
         * center, creating a point at the tip
         * 
         * @param {JSON} geom
         * @returns {JSON}
         */

    }, {
        key: "createBladeTip",
        value: function createBladeTip(geom) {

            var topVertIndices = this.getTopVertIndices(geom);

            for (var i = 0; i < topVertIndices.length; i++) {
                geom.verts[topVertIndices[i]][0] = 0;
                geom.verts[topVertIndices[i]][2] = 0;
            }

            return geom;
        }

        /**
         * Returns the slope between two points
         * 
         * @param {number} x1 
         * @param {number} y1 
         * @param {number} x2 
         * @param {number} y2 
         */

    }, {
        key: "getSlope",
        value: function getSlope(x1, y1, x2, y2) {
            return (y2 - y1) / (x2 - x1);
        }
    }, {
        key: "getEdgeVertIndices",
        value: function getEdgeVertIndices(geom, bladeWidth) {
            return {
                right: SwordGenerator.getRightEdgeVertIndices(geom, bladeWidth),
                left: SwordGenerator.getLeftEdgeVertIndices(geom, bladeWidth)
            };
        }

        /**
         * ### CHANGED ###
         *  
         * Returns the indices of the vertices located on the
         * right edge of the blade
         * 
         * @param {JSON} geom 
         * @param {number} bladeWidth
         * @return {number[]}
         */

    }, {
        key: "getRightEdgeVertIndices",
        value: function getRightEdgeVertIndices(geom, bladeWidth) {
            var rightEdgeIndices = [];
            for (var i = 0; i < geom.verts.length; i++) {
                if (geom.verts[i][0] == bladeWidth / 2) {
                    rightEdgeIndices.push(i);
                }
            }
            return rightEdgeIndices;
        }

        /**
         * ### CHANGED ###
         *  
         * Returns the indices of the vertices located on the
         * left edge of the blade
         * 
         * @param {JSON} geom 
         * @param {number} bladeWidth
         * @return {number[]}
         */

    }, {
        key: "getLeftEdgeVertIndices",
        value: function getLeftEdgeVertIndices(geom, bladeWidth) {
            var leftEdgeIndices = [];

            for (var i = 0; i < geom.verts.length; i++) {
                if (geom.verts[i][0] == -bladeWidth / 2) {
                    leftEdgeIndices.push(i);
                }
            }
            return leftEdgeIndices;
        }

        /**
         * ### CHANGED ###
         *  
         * Returns the vertices that are at the highest plane
         * in the geometry. (Assumes the top is flat and level)
         * 
         * @param {JSON} geom 
         * @param {number} geomHeight
         * @return {number[]}
         */

    }, {
        key: "getTopVertIndices",
        value: function getTopVertIndices(geom) {
            var geomHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

            var topVertIndices = [];

            if (geomHeight != -1) {
                // Height has been specified so we can just get those
                // verts and return
                for (var i = 0; i < geom.verts.length; i++) {
                    if (geom.verts[i][1] == geomHeight) {
                        topVertIndices.push(i);
                    }
                }
            } else {
                // Height is not specified, so we must find the height
                // then return the verts at that height

                var maxHeight = -1;
                var indexOfMax = -1;
                // Find the vertex with the greatest height
                for (var i = 0; i < geom.verts.length; i++) {
                    if (geom.verts[i][1] > maxHeight) {
                        indexOfMax = i;
                        maxHeight = geom.verts[i][1];
                    }
                }
                // Get all vertices at the max height
                for (var i = 0; i < geom.verts.length; i++) {
                    if (geom.verts[i][1] == maxHeight) {
                        topVertIndices.push(i);
                    }
                }
            }

            return topVertIndices;
        }

        /**
         * ### CHANNGED FOR NEW GENERATION SCHEME ###
         * 
         * Assuming that all the blade divs are evenly spaced by 1 in the
         * y-direction. Returns all the vertices at each intermediate
         * height between 0 and bladeLength as a 2D-array organized
         * by div
         * 
         * @param {JSON} geom 
         * @param {number} numDivs 
         * @param {number} bladeLength 
         * @return {number[][]}
         */

    }, {
        key: "getAllVertsIndicesAsDivs",
        value: function getAllVertsIndicesAsDivs(geom, numDivs, bladeLength) {
            // This will be a 2D array of vertex references
            var divVerts = [];

            // Used to calculate what vertices are in what layer
            var divSpacing = bladeLength / numDivs;

            for (var i = 0; i < numDivs; i++) {
                divVerts.push([]);

                for (var j = 0; j < geom.verts.length; j++) {
                    if (geom.verts[j][2] == i) {
                        divVerts[i].push(j);
                    }
                }
            }

            return divVerts;
        }
    }]);

    return SwordGenerator;
}();
