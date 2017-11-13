// String hash function borrowed from:
// http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
String.prototype.hashCode = function() {
    var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        var c = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + c;
        hash = hash & hash;
    }
    return hash;
}

// Class is responsible for producing pseudo random numbers
// given a starting seed value
class PseudoRandGenerator {

    // Consumes a seed value for producing reandom values
    constructor (seed) {
        if (typeof(seed) == 'string') {
            seed = Math.abs(seed.hashCode()) % 9999999 + 1
        }
        this._seed = seed;
        this._MODVALUE = 2796203;
    }

    // Produces a number given some manipulation of the
    // current seed value
    random() {
        return this.randomInt(0, 100) / 100;
    }

    randomInt(min, max) {
        if (this._seed == 0) {
            this.seed = Math.abs(new Date().toTimeString().hashCode()) % 9999999 + 1;
        }
        this._seed = (this._seed * 125) % this._MODVALUE;
        var nextValue = this._seed % (max - min + 1) + min;
        return nextValue
    }

}

/**
 * Given two numbers, this function returns a random in that is
 * in the range [min,max)
 * 
 * @param {number} min 
 * @param {number} max
 * @return {number}
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

