export declare const CRYPTO_VERSION_LENGTH_IN_BYTES = 2;
export declare enum CryptoVersion {
    x0 = 0
}
export declare function cryptoVersionFromBuffer(serialized: Uint8Array): CryptoVersion;
export declare function cryptoVersionToBuffer(version: CryptoVersion): Uint8Array;
//# sourceMappingURL=version.d.ts.map