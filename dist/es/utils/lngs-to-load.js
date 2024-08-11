function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
export var lngsToLoad = function(initialLng, fallbackLng, otherLanguages) {
    var languages = [];
    if (initialLng) {
        languages.push(initialLng);
    }
    if (fallbackLng) {
        if (typeof fallbackLng === 'string' && fallbackLng !== initialLng) {
            languages.push(fallbackLng);
        }
        if (Array.isArray(fallbackLng)) {
            var _languages;
            (_languages = languages).push.apply(_languages, _to_consumable_array(fallbackLng));
        } else if (initialLng) {
            if (typeof fallbackLng[initialLng] === 'string') {
                languages.push(fallbackLng[initialLng]);
            } else if (Array.isArray(fallbackLng[initialLng])) {
                var _languages1;
                (_languages1 = languages).push.apply(_languages1, _to_consumable_array(fallbackLng[initialLng]));
            }
        }
        if (fallbackLng.default) {
            languages.push(fallbackLng.default);
        }
    }
    if (initialLng && initialLng.includes('-') && Array.isArray(otherLanguages)) {
        var _initialLng_split = _sliced_to_array(initialLng.split('-'), 1), languageFromLocale = _initialLng_split[0];
        otherLanguages.forEach(function(otherLanguage) {
            if (otherLanguage === languageFromLocale) {
                languages.push(otherLanguage);
            }
        });
    }
    return languages;
};
