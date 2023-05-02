import { ConnectArgs, ConnectResult } from '@wagmi/core';
import { UseMutationOptions } from 'react-query';
export declare type UseConnectArgs = Partial<ConnectArgs>;
declare type MutationOptions = UseMutationOptions<ConnectResult, Error, ConnectArgs>;
export declare type UseConnectConfig = {
    /**
     * Function to invoke before connect and is passed same variables connect function would receive.
     * Value returned from this function will be passed to both onError and onSettled functions in event of a mutation failure.
     */
    onBeforeConnect?: MutationOptions['onMutate'];
    /** Function to invoke when connect is successful. */
    onConnect?: MutationOptions['onSuccess'];
    /** Function to invoke when an error is thrown while connecting. */
    onError?: MutationOptions['onError'];
    /** Function to invoke when connect is settled (either successfully connected, or an error has thrown). */
    onSettled?: MutationOptions['onSettled'];
};
export declare const mutationKey: (args: UseConnectArgs) => {
    connector?: import("@wagmi/core").Connector<any, any> | undefined;
    entity: string;
}[];
export declare function useConnect({ connector, onBeforeConnect, onConnect, onError, onSettled, }?: UseConnectArgs & UseConnectConfig): {
    readonly activeConnector: import("@wagmi/core").Connector<any, any> | undefined;
    readonly connect: (connector_?: import("@wagmi/core").Connector<any, any> | undefined) => void;
    readonly connectAsync: (connector_?: import("@wagmi/core").Connector<any, any> | undefined) => Promise<ConnectResult<import("@ethersproject/providers").BaseProvider>>;
    readonly connectors: import("@wagmi/core").Connector<any, any>[];
    readonly data: ConnectResult<import("@ethersproject/providers").BaseProvider> | undefined;
    readonly error: Error | null;
    readonly isConnected: boolean;
    readonly isConnecting: boolean;
    readonly isDisconnected: boolean;
    readonly isError: boolean;
    readonly isIdle: boolean;
    readonly isReconnecting: boolean;
    readonly pendingConnector: import("@wagmi/core").Connector<any, any> | undefined;
    readonly reset: () => void;
    readonly status: "error" | "connecting" | "connected" | "reconnecting" | "disconnected" | "idle";
};
export {};
