"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buffersEqual = exports.uint64FromBuffer = exports.bufferFromUInt64 = exports.concatBuffers = void 0;
// Concatenate Buffers (compatible with TypedArrays and DataViews)
var concatBuffers = function () {
    var inBuffers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inBuffers[_i] = arguments[_i];
    }
    // Allocate byte array equal to the cumulative size of input buffers.
    var concatBufLength = inBuffers.reduce(function (sumLength, buff) { return sumLength + buff.byteLength; }, 0);
    var concatBuf = new Uint8Array(concatBufLength);
    // Concatenate buffers into concatBuf.
    var offset = 0;
    inBuffers.forEach(function (buf) {
        if (ArrayBuffer.isView(buf)) {
            // Note: We need to break down ArrayBufferView to create Uint8Array.
            var buffer = buf.buffer, byteOffset = buf.byteOffset, byteLength = buf.byteLength;
            concatBuf.set(new Uint8Array(buffer, byteOffset, byteLength), offset);
        }
        else {
            concatBuf.set(new Uint8Array(buf), offset);
        }
        offset += buf.byteLength;
    });
    return concatBuf;
};
exports.concatBuffers = concatBuffers;
// Constants storing the size of a uint64 value.
var UINT64_SIZE_BYTES = 8;
var BITS_PER_BYTE = 8;
var UINT64_SIZE_BITS = UINT64_SIZE_BYTES * BITS_PER_BYTE;
// Returns an 8-byte buffer representing a uint64 value.
var bufferFromUInt64 = function (uint64Value) {
    var uint64Buf = new ArrayBuffer(UINT64_SIZE_BYTES);
    var uint64DataView = new DataView(uint64Buf);
    // We write the value into into the buffer in big-endian format. This is architecture-agnostic
    // and just means we have to read the data back in the same format.
    uint64DataView.setBigUint64(0, BigInt(uint64Value), false); // Big endian.
    return new Uint8Array(uint64Buf);
};
exports.bufferFromUInt64 = bufferFromUInt64;
// Reads a uint64 integer value from the buffer, starting at the given offset.
// Returns the (uint64Value, endOffset) as a tuple.
var uint64FromBuffer = function (input, startOffset) {
    // Create a new buffer containing a copy of the bytes to read.
    var endOffset = startOffset + UINT64_SIZE_BYTES;
    var uint64Buf = input.slice(startOffset, endOffset);
    var uint64DataView = new DataView(uint64Buf.buffer, uint64Buf.byteOffset, UINT64_SIZE_BYTES);
    // Read the integer from the buffer in big-endian because that is the format used to write it.
    // Clamps the value to an unsigned 64-bit integer value.
    var uint64Value = Number(BigInt.asUintN(UINT64_SIZE_BITS, uint64DataView.getBigUint64(0, false)));
    return [uint64Value, endOffset];
};
exports.uint64FromBuffer = uint64FromBuffer;
/**
 * Checks whether the two Uint8Arrays contain the same data. (same length and same bytes)
 */
var buffersEqual = function (a, b) {
    return a.byteLength === b.byteLength && a.every(function (byte, i) { return byte === b[i]; });
};
exports.buffersEqual = buffersEqual;
//# sourceMappingURL=buffers.js.map