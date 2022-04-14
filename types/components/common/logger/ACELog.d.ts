import { LogLevel } from '../constant/LogConstants';
export default class ACELog {
    private static _logLevel;
    static setProductionMode(): void;
    static setAllLogLevel(): void;
    static setDevMode(): void;
    private static setLogLevel;
    static isLoggable(priority: LogLevel): boolean;
    static isDevMode(): boolean;
    private static logLevelToIdentity;
    private static println;
    static e(tag: string, msg: string): void;
    static e(tag: string, msg: string, debug: object, moreDebugMessage?: string): void;
    static d(tag: string, msg: string): void;
    static d(tag: string, msg: string, debug: object, moreDebugMessage?: string): void;
    static i(tag: string, msg: string): void;
    static i(tag: string, msg: string, info: object, moreDebugMessage?: string): void;
    static v(tag: string, msg: string): void;
    static v(tag: string, msg: string, info: object, moreDebugMessage?: string): void;
}
