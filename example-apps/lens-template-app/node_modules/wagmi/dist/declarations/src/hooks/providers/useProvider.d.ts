import { providers } from 'ethers';
import { GetProviderArgs } from '@wagmi/core';
export declare type UseProviderArgs = Partial<GetProviderArgs>;
export declare function useProvider<TProvider extends providers.BaseProvider>({ chainId, }?: UseProviderArgs): TProvider;
