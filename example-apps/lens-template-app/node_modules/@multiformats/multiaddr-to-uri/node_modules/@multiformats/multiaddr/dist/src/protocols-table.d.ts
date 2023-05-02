export interface Protocol {
    code: number;
    size: number;
    name: string;
    resolvable?: boolean;
    path?: boolean;
}
export declare const names: Record<string, Protocol>;
export declare const codes: Record<number, Protocol>;
export declare const table: Array<[number, number, string, boolean?, boolean?]>;
export declare function createProtocol(code: number, size: number, name: string, resolvable?: any, path?: any): Protocol;
export declare function getProtocol(proto: number | string): Protocol;
//# sourceMappingURL=protocols-table.d.ts.map