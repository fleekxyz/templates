export class AbortError extends Error {
    constructor(message = 'The operation was aborted') {
        super(message);
        this.code = AbortError.code;
        this.type = AbortError.type;
    }
    static get code() {
        return 'ABORT_ERR';
    }
    static get type() {
        return 'aborted';
    }
}
//# sourceMappingURL=errors.js.map