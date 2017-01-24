/**
 * Created by cform on 17/1/10.
 */

module.exports = {
    extend: function (target, source, flag) {
        for(var key in source) {
            if(source.hasOwnProperty(key))
                flag ?
                    (target[key] = source[key])
                    : (target[key] === void 0  && (target[key] == source[key]));
        }
        return target;
    }
}