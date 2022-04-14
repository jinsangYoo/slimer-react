export default class ACEntityForST {
    private _map;
    constructor();
    getMap(): Map<string, string>;
    setDeepCopy(value: Map<string, string>): void;
    getAssembleParams(): string;
    getGetTSGoldMaster(): string;
    getInsenginetTSGoldMaster(): string;
    getRTSGoldMaster(): string;
    getStartTSGoldMaster(): string;
    getGetTS(): string;
    setGetTS(value: Date): void;
    getRandom6ForGetTS(): string;
    setRandom6ForGetTS(value: string): void;
    getInsenginetTS(): string;
    setInsenginetTS(value: Date): void;
    getRandom6ForInsenginetTS(): string;
    setRandom6ForInsenginetTS(value: string): void;
    getRTS(): string;
    setRTS(value: Date): void;
    getRandom6ForRTS(): string;
    setRandom6ForRTS(value: string): void;
    getStartTS(): string;
    setStartTS(value: Date): void;
    getRandom6ForStartTS(): string;
    setRandom6ForStartTS(value: string): void;
    toJSON(): object;
    getObjectForTS(): object;
}
