
var capitalize = function (str) {
    return str[0].toUpperCase() + str.slice(1);
};

var removeElementFromArray = function (el, array) {
    if (array.length === 1 && array[0] === el) {
        return []
    };
    for (var i = 0; i < array.length - 1; i++) {
        if (array[i] === el) {
            array.splice(i, 1);
            break;
        }
    }
    return array;
}

var toggleElementInArray = function(el, array){
    if (!array.includes(el)){
        array.push(el)
    } else {
        return removeElementFromArray(el, array)
    }
    return array
}

var _util = {
    capitalize,
    removeElementFromArray,
    toggleElementInArray
}

export default _util;