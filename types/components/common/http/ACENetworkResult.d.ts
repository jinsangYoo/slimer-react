import { AxiosResponse } from 'axios';
export default class ACENetworkResult {
    private _responseCode;
    private _responseBody;
    private _responseHeaders;
    constructor(response: AxiosResponse);
    getCode(): number;
    getBody(): string;
    getHeaders(): Map<string, string>;
}
