
var capitalize = function (str) {
    return str[0].toUpperCase() + str.slice(1);
};

var ensureElementAbsent = function (el, array) {
    if (array.length === 1 && array[0] === el) {
        return [];
    };
    if (array.indexOf(el) < 0){
        return array;
    }
    for (var i = 0; i < array.length - 1; i++) {
        if (array[i] === el) {
            array.splice(i, 1);
            break;
        }
    }
    return array;
}

var ensureElementPresent = function (el, array) {
    if (array.indexOf(el) > -1) {
        return array;
    } else {
        array.push(el);
        return array;
    }
}

var _util = {
    capitalize,
    ensureElementAbsent,
    ensureElementPresent
}

export default _util;