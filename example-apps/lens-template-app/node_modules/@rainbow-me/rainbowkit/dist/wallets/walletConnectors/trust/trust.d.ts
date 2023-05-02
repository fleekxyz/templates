import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface TrustOptions {
    chains: Chain[];
}
export declare const trust: ({ chains }: TrustOptions) => Wallet;
