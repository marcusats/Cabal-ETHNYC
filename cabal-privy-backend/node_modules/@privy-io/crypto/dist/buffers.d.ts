export declare const concatBuffers: (...inBuffers: ArrayBufferView[]) => Uint8Array;
export declare const bufferFromUInt64: (uint64Value: number) => Uint8Array;
export declare const uint64FromBuffer: (input: Uint8Array, startOffset: number) => [number, number];
/**
 * Checks whether the two Uint8Arrays contain the same data. (same length and same bytes)
 */
export declare const buffersEqual: (a: Uint8Array, b: Uint8Array) => boolean;
//# sourceMappingURL=buffers.d.ts.map