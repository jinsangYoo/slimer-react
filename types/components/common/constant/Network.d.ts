export declare enum BASE_URL {
    COMPANY_LOCAL_LOG = "http://192.168.0.18:52274",
    COMPANY_LOCAL_POLICY = "http://192.168.0.18:52274",
    HOME_LOCAL_LOG = "https://gmb.acecounter.com",
    HOME_LOCAL_POLICY = "http://192.168.0.18:52274",
    PRO_LOG = "https://gmb.acecounter.com",
    PRO_POLICY = "https://policy.acecounter.com"
}
export declare enum HTTP_METHOD {
    GET = "GET",
    POST = "POST"
}
export declare enum HTTP_URL {
    COMPANY_LOCAL_LOG = "log",
    COMPANY_LOCAL_POLICY = "policy",
    HOME_LOCAL_LOG = "mac",
    HOME_LOCAL_POLICY = "policy",
    PRO_LOG = "mac",
    PRO_POLICY = "policy"
}
export declare type ACENetworkParams = {
    baseUrl: string;
    requestHeaders: Map<string, string>;
    url: string;
    params: object;
};
export declare enum HttpURLConnection {
    HTTP_OK = 200
}
