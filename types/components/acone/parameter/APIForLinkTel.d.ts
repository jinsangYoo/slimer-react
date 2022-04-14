import APIForPL from './APIForPL';
import { ITaskParams } from '../../common/task/ITaskParams';
import { AxiosResponse } from 'axios';
import { ACEResponseToCaller } from '../../common/constant/ACEPublicStaticConfig';
export default class APIForLinkTel extends APIForPL {
    private static _TAG;
    private linkName;
    private memberKey;
    private tel;
    constructor(params: ITaskParams);
    doWork(callback: ((error?: object, result?: ACEResponseToCaller) => void) | undefined): void;
    didWork(callback: ((error?: object, result?: ACEResponseToCaller) => void) | undefined): void;
    completed(response: AxiosResponse): void;
    failed(err: any): void;
    doneWork(callback: ((error?: object, result?: ACEResponseToCaller) => void) | undefined): void;
}
