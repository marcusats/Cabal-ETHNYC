export declare class CryptoError extends Error {
    /**
     * Original Error object
     */
    cause?: Error;
    /**
     * @param {string} message - Human-readable message.
     * @param {unknown} cause - Source of this error.
     */
    constructor(message: string, cause?: unknown);
}
//# sourceMappingURL=errors.d.ts.map