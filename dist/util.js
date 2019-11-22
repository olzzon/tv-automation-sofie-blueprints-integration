"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _ = require("underscore");
var iterateDeeplyEnum;
(function (iterateDeeplyEnum) {
    iterateDeeplyEnum["CONTINUE"] = "$continue";
})(iterateDeeplyEnum = exports.iterateDeeplyEnum || (exports.iterateDeeplyEnum = {}));
/**
 * Iterates deeply through object or array
 * @param obj the object or array to iterate through
 * @param iteratee function to apply on every attribute
 */
function iterateDeeply(obj, iteratee, key) {
    const newValue = iteratee(obj, key);
    if (newValue === iterateDeeplyEnum.CONTINUE) {
        // Continue iterate deeper if possible
        if (_.isObject(obj)) {
            // object or array
            _.each(obj, (v, k) => {
                obj[k] = iterateDeeply(v, iteratee, k);
            });
        }
        else {
            // don't change anything
        }
        return obj;
    }
    else {
        return newValue;
    }
}
exports.iterateDeeply = iterateDeeply;
/**
 * Iterates deeply through object or array, using an asynchronous iteratee
 * @param obj the object or array to iterate through
 * @param iteratee function to apply on every attribute
 */
function iterateDeeplyAsync(obj, iteratee, key) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const newValue = yield iteratee(obj, key);
        if (newValue === iterateDeeplyEnum.CONTINUE) {
            // Continue iterate deeper if possible
            if (_.isObject(obj)) {
                // object or array
                yield Promise.all(_.map(obj, (v, k) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    obj[k] = yield iterateDeeplyAsync(v, iteratee, k);
                })));
            }
            else {
                // don't change anything
            }
            return obj;
        }
        else {
            return newValue;
        }
    });
}
exports.iterateDeeplyAsync = iterateDeeplyAsync;
//# sourceMappingURL=util.js.map