import { getProtocol } from './protocols-table.js';
declare const inspect: unique symbol;
export interface Protocol {
    code: number;
    size: number;
    name: string;
    resolvable?: boolean | undefined;
    path?: boolean | undefined;
}
export interface MultiaddrObject {
    family: 4 | 6;
    host: string;
    transport: string;
    port: number;
}
export interface NodeAddress {
    family: 4 | 6;
    address: string;
    port: number;
}
export declare type MultiaddrInput = string | Multiaddr | Uint8Array | null;
export interface Resolver {
    (addr: Multiaddr, options?: AbortOptions): Promise<string[]>;
}
export interface AbortOptions {
    signal?: AbortSignal;
}
declare const resolvers: Map<string, Resolver>;
/**
 * Creates a [multiaddr](https://github.com/multiformats/multiaddr) from
 * a Uint8Array, String or another Multiaddr instance
 * public key.
 *
 */
export declare class Multiaddr {
    static resolvers: Map<string, Resolver>;
    bytes: Uint8Array;
    /**
     * @example
     * ```js
     * new Multiaddr('/ip4/127.0.0.1/tcp/4001')
     * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
     * ```
     *
     * @param {MultiaddrInput} [addr] - If String or Uint8Array, needs to adhere to the address format of a [multiaddr](https://github.com/multiformats/multiaddr#string-format)
     */
    constructor(addr?: MultiaddrInput);
    /**
     * Returns Multiaddr as a String
     *
     * @example
     * ```js
     * new Multiaddr('/ip4/127.0.0.1/tcp/4001').toString()
     * // '/ip4/127.0.0.1/tcp/4001'
     * ```
     */
    toString(): string;
    /**
     * Returns Multiaddr as a JSON encoded object
     *
     * @example
     * ```js
     * JSON.stringify(new Multiaddr('/ip4/127.0.0.1/tcp/4001'))
     * // '/ip4/127.0.0.1/tcp/4001'
     * ```
     */
    toJSON(): string;
    /**
     * Returns Multiaddr as a convinient options object to be used with net.createConnection
     *
     * @example
     * ```js
     * new Multiaddr('/ip4/127.0.0.1/tcp/4001').toOptions()
     * // { family: 4, host: '127.0.0.1', transport: 'tcp', port: 4001 }
     * ```
     */
    toOptions(): MultiaddrObject;
    /**
     * Returns the protocols the Multiaddr is defined with, as an array of objects, in
     * left-to-right order. Each object contains the protocol code, protocol name,
     * and the size of its address space in bits.
     * [See list of protocols](https://github.com/multiformats/multiaddr/blob/master/protocols.csv)
     *
     * @example
     * ```js
     * new Multiaddr('/ip4/127.0.0.1/tcp/4001').protos()
     * // [ { code: 4, size: 32, name: 'ip4' },
     * //   { code: 6, size: 16, name: 'tcp' } ]
     * ```
     */
    protos(): import("./protocols-table.js").Protocol[];
    /**
     * Returns the codes of the protocols in left-to-right order.
     * [See list of protocols](https://github.com/multiformats/multiaddr/blob/master/protocols.csv)
     *
     * @example
     * ```js
     * Multiaddr('/ip4/127.0.0.1/tcp/4001').protoCodes()
     * // [ 4, 6 ]
     * ```
     */
    protoCodes(): number[];
    /**
     * Returns the names of the protocols in left-to-right order.
     * [See list of protocols](https://github.com/multiformats/multiaddr/blob/master/protocols.csv)
     *
     * @example
     * ```js
     * new Multiaddr('/ip4/127.0.0.1/tcp/4001').protoNames()
     * // [ 'ip4', 'tcp' ]
     * ```
     */
    protoNames(): string[];
    /**
     * Returns a tuple of parts
     *
     * @example
     * ```js
     * new Multiaddr("/ip4/127.0.0.1/tcp/4001").tuples()
     * // [ [ 4, <Buffer 7f 00 00 01> ], [ 6, <Buffer 0f a1> ] ]
     * ```
     */
    tuples(): [number, (Uint8Array | undefined)?][];
    /**
     * Returns a tuple of string/number parts
     * - tuples[][0] = code of protocol
     * - tuples[][1] = contents of address
     *
     * @example
     * ```js
     * new Multiaddr("/ip4/127.0.0.1/tcp/4001").stringTuples()
     * // [ [ 4, '127.0.0.1' ], [ 6, '4001' ] ]
     * ```
     */
    stringTuples(): [number, (string | undefined)?][];
    /**
     * Encapsulates a Multiaddr in another Multiaddr
     *
     * @example
     * ```js
     * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080')
     * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080>
     *
     * const mh2 = new Multiaddr('/ip4/127.0.0.1/tcp/4001')
     * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
     *
     * const mh3 = mh1.encapsulate(mh2)
     * // <Multiaddr 0408080808060438047f000001060fa1 - /ip4/8.8.8.8/tcp/1080/ip4/127.0.0.1/tcp/4001>
     *
     * mh3.toString()
     * // '/ip4/8.8.8.8/tcp/1080/ip4/127.0.0.1/tcp/4001'
     * ```
     *
     * @param {MultiaddrInput} addr - Multiaddr to add into this Multiaddr
     */
    encapsulate(addr: MultiaddrInput): Multiaddr;
    /**
     * Decapsulates a Multiaddr from another Multiaddr
     *
     * @example
     * ```js
     * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080')
     * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080>
     *
     * const mh2 = new Multiaddr('/ip4/127.0.0.1/tcp/4001')
     * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
     *
     * const mh3 = mh1.encapsulate(mh2)
     * // <Multiaddr 0408080808060438047f000001060fa1 - /ip4/8.8.8.8/tcp/1080/ip4/127.0.0.1/tcp/4001>
     *
     * mh3.decapsulate(mh2).toString()
     * // '/ip4/8.8.8.8/tcp/1080'
     * ```
     *
     * @param {Multiaddr | string} addr - Multiaddr to remove from this Multiaddr
     */
    decapsulate(addr: Multiaddr | string): Multiaddr;
    /**
     * A more reliable version of `decapsulate` if you are targeting a
     * specific code, such as 421 (the `p2p` protocol code). The last index of the code
     * will be removed from the `Multiaddr`, and a new instance will be returned.
     * If the code is not present, the original `Multiaddr` is returned.
     *
     * @example
     * ```js
     * const addr = new Multiaddr('/ip4/0.0.0.0/tcp/8080/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSupNKC')
     * // <Multiaddr 0400... - /ip4/0.0.0.0/tcp/8080/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSupNKC>
     *
     * addr.decapsulateCode(421).toString()
     * // '/ip4/0.0.0.0/tcp/8080'
     *
     * new Multiaddr('/ip4/127.0.0.1/tcp/8080').decapsulateCode(421).toString()
     * // '/ip4/127.0.0.1/tcp/8080'
     * ```
     */
    decapsulateCode(code: number): Multiaddr;
    /**
     * Extract the peerId if the multiaddr contains one
     *
     * @example
     * ```js
     * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080/ipfs/QmValidBase58string')
     * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080/ipfs/QmValidBase58string>
     *
     * // should return QmValidBase58string or null if the id is missing or invalid
     * const peerId = mh1.getPeerId()
     * ```
     */
    getPeerId(): string | null;
    /**
     * Extract the path if the multiaddr contains one
     *
     * @example
     * ```js
     * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080/unix/tmp/p2p.sock')
     * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080/unix/tmp/p2p.sock>
     *
     * // should return utf8 string or null if the id is missing or invalid
     * const path = mh1.getPath()
     * ```
     */
    getPath(): string | null;
    /**
     * Checks if two Multiaddrs are the same
     *
     * @example
     * ```js
     * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080')
     * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080>
     *
     * const mh2 = new Multiaddr('/ip4/127.0.0.1/tcp/4001')
     * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
     *
     * mh1.equals(mh1)
     * // true
     *
     * mh1.equals(mh2)
     * // false
     * ```
     */
    equals(addr: {
        bytes: Uint8Array;
    }): boolean;
    /**
     * Resolve multiaddr if containing resolvable hostname.
     *
     * @example
     * ```js
     * Multiaddr.resolvers.set('dnsaddr', resolverFunction)
     * const mh1 = new Multiaddr('/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb')
     * const resolvedMultiaddrs = await mh1.resolve()
     * // [
     * //   <Multiaddr 04934b5353060fa1a503221220c10f9319dac35c270a6b74cd644cb3acfc1f6efc8c821f8eb282599fd1814f64 - /ip4/147.75.83.83/tcp/4001/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb>,
     * //   <Multiaddr 04934b53530601bbde03a503221220c10f9319dac35c270a6b74cd644cb3acfc1f6efc8c821f8eb282599fd1814f64 - /ip4/147.75.83.83/tcp/443/wss/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb>,
     * //   <Multiaddr 04934b535391020fa1cc03a503221220c10f9319dac35c270a6b74cd644cb3acfc1f6efc8c821f8eb282599fd1814f64 - /ip4/147.75.83.83/udp/4001/quic/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb>
     * // ]
     * ```
     */
    resolve(options?: AbortOptions): Promise<Multiaddr[]>;
    /**
     * Gets a Multiaddrs node-friendly address object. Note that protocol information
     * is left out: in Node (and most network systems) the protocol is unknowable
     * given only the address.
     *
     * Has to be a ThinWaist Address, otherwise throws error
     *
     * @example
     * ```js
     * new Multiaddr('/ip4/127.0.0.1/tcp/4001').nodeAddress()
     * // {family: 4, address: '127.0.0.1', port: 4001}
     * ```
     */
    nodeAddress(): NodeAddress;
    /**
     * Returns if a Multiaddr is a Thin Waist address or not.
     *
     * Thin Waist is if a Multiaddr adheres to the standard combination of:
     *
     * `{IPv4, IPv6}/{TCP, UDP}`
     *
     * @example
     * ```js
     * const mh1 = new Multiaddr('/ip4/127.0.0.1/tcp/4001')
     * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
     * const mh2 = new Multiaddr('/ip4/192.168.2.1/tcp/5001')
     * // <Multiaddr 04c0a80201061389 - /ip4/192.168.2.1/tcp/5001>
     * const mh3 = mh1.encapsulate(mh2)
     * // <Multiaddr 047f000001060fa104c0a80201061389 - /ip4/127.0.0.1/tcp/4001/ip4/192.168.2.1/tcp/5001>
     * const mh4 = new Multiaddr('/ip4/127.0.0.1/tcp/2000/wss/p2p-webrtc-star/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSooo2a')
     * // <Multiaddr 047f0000010607d0de039302a503221220d52ebb89d85b02a284948203a62ff28389c57c9f42beec4ec20db76a64835843 - /ip4/127.0.0.1/tcp/2000/wss/p2p-webrtc-star/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSooo2a>
     * mh1.isThinWaistAddress()
     * // true
     * mh2.isThinWaistAddress()
     * // true
     * mh3.isThinWaistAddress()
     * // false
     * mh4.isThinWaistAddress()
     * // false
     * ```
     */
    isThinWaistAddress(addr?: Multiaddr): boolean;
    /**
     * Creates a Multiaddr from a node-friendly address object
     *
     * @example
     * ```js
     * Multiaddr.fromNodeAddress({address: '127.0.0.1', port: '4001'}, 'tcp')
     * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
     * ```
     */
    static fromNodeAddress(addr: NodeAddress, transport: string): Multiaddr;
    /**
     * Returns if something is a Multiaddr that is a name
     */
    static isName(addr: Multiaddr): boolean;
    /**
     * Check if object is a CID instance
     */
    static isMultiaddr(value: any): value is Multiaddr;
    /**
     * Returns Multiaddr as a human-readable string.
     * For post Node.js v10.0.0.
     * https://nodejs.org/api/deprecations.html#deprecations_dep0079_custom_inspection_function_on_objects_via_inspect
     *
     * @example
     * ```js
     * console.log(new Multiaddr('/ip4/127.0.0.1/tcp/4001'))
     * // '<Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>'
     * ```
     */
    [inspect](): string;
    /**
     * Returns Multiaddr as a human-readable string.
     * Fallback for pre Node.js v10.0.0.
     * https://nodejs.org/api/deprecations.html#deprecations_dep0079_custom_inspection_function_on_objects_via_inspect
     *
     * @example
     * ```js
     * new Multiaddr('/ip4/127.0.0.1/tcp/4001').inspect()
     * // '<Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>'
     * ```
     */
    inspect(): string;
}
/**
 * Static factory
 */
export declare function multiaddr(addr: MultiaddrInput): Multiaddr;
export { getProtocol as protocols };
export { resolvers };
//# sourceMappingURL=index.d.ts.map