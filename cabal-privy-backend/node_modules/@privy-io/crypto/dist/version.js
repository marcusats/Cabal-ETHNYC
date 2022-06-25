"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptoVersionToBuffer = exports.cryptoVersionFromBuffer = exports.CryptoVersion = exports.CRYPTO_VERSION_LENGTH_IN_BYTES = void 0;
var errors_1 = require("./errors");
exports.CRYPTO_VERSION_LENGTH_IN_BYTES = 2;
// Over time, there will likely be multiple iterations
// of the crypto algorithm for securely encrypting data.
// In order for decryption to work even after new iterations
// have been released, this library must keep track of the
// version used to encrypt the data so that it knows which
// algorithm to use during decryption.
var CryptoVersion;
(function (CryptoVersion) {
    CryptoVersion[CryptoVersion["x0"] = 0] = "x0";
})(CryptoVersion = exports.CryptoVersion || (exports.CryptoVersion = {}));
function cryptoVersionFromBuffer(serialized) {
    var versionDataView = new DataView(serialized.buffer, serialized.byteOffset, serialized.byteLength);
    var version = versionDataView.getUint16(0, false); // Big endian.
    switch (version) {
        case CryptoVersion.x0:
            return CryptoVersion.x0;
        default:
            throw new errors_1.CryptoError("Invalid Privy crypto version: ".concat(version, " is not a valid version"));
    }
}
exports.cryptoVersionFromBuffer = cryptoVersionFromBuffer;
function cryptoVersionToBuffer(version) {
    var cryptoVersionBuffer = new ArrayBuffer(exports.CRYPTO_VERSION_LENGTH_IN_BYTES);
    new DataView(cryptoVersionBuffer).setUint16(0, version, false); // Big endian.
    return new Uint8Array(cryptoVersionBuffer);
}
exports.cryptoVersionToBuffer = cryptoVersionToBuffer;
//# sourceMappingURL=version.js.map