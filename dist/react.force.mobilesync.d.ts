import { ExecErrorCallback, ExecSuccessCallback } from "./react.force.common";
import { StoreConfig } from "./react.force.smartstore";
import { SyncDownTarget, SyncEvent, SyncOptions, SyncStatus } from "./typings/mobilesync";
declare type SyncDownOverload = {
    (storeConfig: StoreConfig, target: SyncDownTarget, soupName: string, options: SyncOptions, syncName: string, successCB: ExecSuccessCallback<SyncEvent>, errorCB: ExecErrorCallback): void;
    (storeConfig: StoreConfig, target: SyncDownTarget, soupName: string, options: SyncOptions, successCB: ExecSuccessCallback<SyncEvent>, errorCB: ExecErrorCallback): void;
};
export declare const syncDown: SyncDownOverload;
export declare const reSync: (storeConfig: StoreConfig, syncIdOrName: string, successCB: ExecSuccessCallback<SyncEvent>, errorCB: ExecErrorCallback) => void;
export declare const cleanResyncGhosts: (storeConfig: StoreConfig, syncId: string, successCB: ExecSuccessCallback<unknown>, errorCB: ExecErrorCallback) => void;
declare type SyncUpOverload = {
    (storeConfig: StoreConfig, target: SyncDownTarget, soupName: string, options: SyncOptions, syncName: string, successCB: ExecSuccessCallback<SyncEvent>, errorCB: ExecErrorCallback): void;
    (storeConfig: StoreConfig, target: SyncDownTarget, soupName: string, options: SyncOptions, successCB: ExecSuccessCallback<SyncEvent>, errorCB: ExecErrorCallback): void;
};
export declare const syncUp: SyncUpOverload;
export declare const getSyncStatus: (storeConfig: StoreConfig, syncIdOrName: string, successCB: ExecSuccessCallback<SyncStatus>, errorCB: ExecErrorCallback) => void;
export declare const deleteSync: (storeConfig: StoreConfig, syncIdOrName: string, successCB: ExecSuccessCallback<unknown>, errorCB: ExecErrorCallback) => void;
export declare const MERGE_MODE: {
    OVERWRITE: string;
    LEAVE_IF_CHANGED: string;
};
export {};
