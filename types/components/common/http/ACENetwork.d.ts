import { AxiosResponse } from 'axios';
export declare class ACENetwork {
    private static _TAG;
    private static networkRequestTypeToParams;
    private static logToBaseURL;
    private static policyToBaseURL;
    private static networkRequestTypeToBaseURLs;
    private static logToRequestHeaders;
    private static policyToRequestHeaders;
    private static networkRequestTypeToHeaders;
    private static logToURL;
    private static policyToURL;
    private static networkRequestTypeToURLs;
    private static networkRequestTypeToURLParams;
    static requestToPolicy(completed?: (response: AxiosResponse) => void, failed?: (err: object) => void): void;
    static requestToLog(completed?: (response: AxiosResponse) => void, failed?: (err: object) => void): void;
    private static request;
}
