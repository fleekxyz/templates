import { CID } from 'multiformats/cid';
import { symbol } from '@libp2p/interface-peer-id';
import type { MultibaseDecoder } from 'multiformats/bases/interface';
import type { MultihashDigest } from 'multiformats/hashes/interface';
import type { PeerId } from '@libp2p/interface-peer-id';
interface PeerIdInit {
    type: 'RSA' | 'Ed25519' | 'secp256k1';
    multihash: MultihashDigest;
    privateKey?: Uint8Array;
}
declare class PeerIdImpl {
    type: 'RSA' | 'Ed25519' | 'secp256k1';
    readonly multihash: MultihashDigest;
    readonly privateKey?: Uint8Array;
    readonly publicKey?: Uint8Array;
    private string?;
    constructor(init: PeerIdInit);
    get [Symbol.toStringTag](): string;
    get [symbol](): boolean;
    toString(): string;
    toCID(): CID;
    toBytes(): Uint8Array;
    /**
     * Returns Multiaddr as a JSON encoded object
     */
    toJSON(): string;
    /**
     * Checks the equality of `this` peer against a given PeerId
     */
    equals(id: PeerId | Uint8Array | string): boolean;
}
export declare function createPeerId(init: PeerIdInit): PeerIdImpl;
export declare function peerIdFromPeerId(other: any): PeerId;
export declare function peerIdFromString(str: string, decoder?: MultibaseDecoder<any>): PeerId;
export declare function peerIdFromBytes(buf: Uint8Array): PeerId;
export declare function peerIdFromCID(cid: CID): PeerId;
/**
 * @param publicKey - A marshalled public key
 * @param privateKey - A marshalled private key
 */
export declare function peerIdFromKeys(publicKey: Uint8Array, privateKey?: Uint8Array): Promise<PeerId>;
export {};
//# sourceMappingURL=index.d.ts.map