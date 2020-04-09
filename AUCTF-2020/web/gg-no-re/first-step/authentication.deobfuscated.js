'use strict';
(function(data, i) {
  /**
   * @param {number} isLE
   * @return {undefined}
   */
  var write = function(isLE) {
    for (; --isLE;) {
      data["push"](data["shift"]());
    }
  };
  write(++i);
})(_0x44ff, 385);
/**
 * @param {string} k
 * @param {?} init_using_data
 * @return {?}
 */
var _0x2ad1 = function(k, init_using_data) {
  /** @type {number} */
  k = k - 0;
  var text = _0x44ff[k];
  if (_0x2ad1["UmZuYF"] === undefined) {
    (function() {
      /**
       * @return {?}
       */
      var unescape = function() {
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
      /** @type {string} */
      var listeners = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      if (!s_utf8["atob"]) {
        /**
         * @param {?} i
         * @return {?}
         */
        s_utf8["atob"] = function(i) {
          var str = String(i)["replace"](/=+$/, "");
          /** @type {string} */
          var pix_color = "";
          /** @type {number} */
          var bc = 0;
          var bs;
          var buffer;
          /** @type {number} */
          var Y = 0;
          for (; buffer = str["charAt"](Y++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? pix_color = pix_color + String["fromCharCode"](255 & bs >> (-2 * bc & 6)) : 0) {
            buffer = listeners["indexOf"](buffer);
          }
          return pix_color;
        };
      }
    })();
    /**
     * @param {?} dataString
     * @return {?}
     */
    _0x2ad1["hdhzHi"] = function(dataString) {
      /** @type {string} */
      var data = atob(dataString);
      /** @type {!Array} */
      var escapedString = [];
      /** @type {number} */
      var val = 0;
      var key = data["length"];
      for (; val < key; val++) {
        escapedString = escapedString + ("%" + ("00" + data["charCodeAt"](val)["toString"](16))["slice"](-2));
      }
      return decodeURIComponent(escapedString);
    };
    _0x2ad1["wrYKfR"] = {};
    /** @type {boolean} */
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
/**
 * @param {?} res
 * @return {undefined}
 */
function authenticate(res) {
  if (validate(res)) {
    console[_0x2ad1("0x2")](_0x2ad1("0x3"));
  }
}
/**
 * @param {?} elements
 * @return {?}
 */
function validate(elements) {
  return elements[_0x2ad1("0x1")] >= 5 && elements[_0x2ad1("0x0")]("$");
}
;