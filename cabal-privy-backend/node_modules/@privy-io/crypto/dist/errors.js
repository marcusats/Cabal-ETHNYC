"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoError = void 0;
var CryptoError = /** @class */ (function (_super) {
    __extends(CryptoError, _super);
    /**
     * @param {string} message - Human-readable message.
     * @param {unknown} cause - Source of this error.
     */
    function CryptoError(message, cause) {
        var _this = _super.call(this, message) || this;
        if (cause instanceof Error) {
            _this.cause = cause;
        }
        return _this;
    }
    return CryptoError;
}(Error));
exports.CryptoError = CryptoError;
//# sourceMappingURL=errors.js.map