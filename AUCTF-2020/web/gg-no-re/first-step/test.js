'use strict';

(function (data, i) {
    var write = function (isLE) {
        console.log(isLE);
        for (; --isLE;) {
            console.log(isLE);
            data["push"](data["shift"]());
        }
    };
    write(++i);
})(17663, 385);


var _0x2ad1 = function (k, init_using_data) {
    k = k - 0;
    var text = _0x44ff[k];
    if (_0x2ad1["UmZuYF"] === undefined) {
        (function () {
            /**
             * @return {?}
             */
            var unescape = function () {
                var source;
                try {
                    source = Function("return (function() " + '{}.constructor("return this")( )' + ");")();
                } catch (_0x3b3b3e) {
                    /** @type {!Window} */
                    source = window;
                }
                return source;
            };
            var s_utf8 = unescape();

            var listeners = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            if (!s_utf8["atob"]) {
                s_utf8["atob"] = function (i) {
                    var str = String(i)["replace"](/=+$/, "");
                    var pix_color = "";
                    var bc = 0;
                    var bs;
                    var buffer;
                    var Y = 0;
                    for (; buffer = str["charAt"](Y++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? pix_color = pix_color + String["fromCharCode"](255 & bs >> (-2 * bc & 6)) : 0) {
                        buffer = listeners["indexOf"](buffer);
                    }
                    return pix_color;
                };
            }
        })();

        _0x2ad1["hdhzHi"] = function (dataString) {
            var data = atob(dataString);
            var escapedString = [];
            var val = 0;
            var key = data["length"];
            for (; val < key; val++) {
                escapedString = escapedString + ("%" + ("00" + data["charCodeAt"](val)["toString"](16))["slice"](-2));
            }
            return decodeURIComponent(escapedString);
        };
        _0x2ad1["wrYKfR"] = {};
        _0x2ad1["UmZuYF"] = !![];
    }
    var b = _0x2ad1["wrYKfR"][k];
    if (b === undefined) {
        text = _0x2ad1["hdhzHi"](text);
        _0x2ad1["wrYKfR"][k] = text;
    } else {
        text = b;
    }
    return text;
};

function authenticate(res) {
    if (validate(res)) {
        console[_0x2ad1("0x2")](_0x2ad1("0x3"));
    }
}

function validate(elements) {
    return elements[_0x2ad1("0x1")] >= 5 && elements[_0x2ad1("0x0")]("$");
}
;