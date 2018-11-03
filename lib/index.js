"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Somthing = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Somthing = function Somthing(param) {
  _classCallCheck(this, Somthing);

  _defineProperty(this, "some", null);

  this.some = param;
};

exports.Somthing = Somthing;