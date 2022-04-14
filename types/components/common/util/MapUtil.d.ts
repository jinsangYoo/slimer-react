import { ACEResponseToCaller } from '../constant/ACEPublicStaticConfig';
import Task from '../task/Task';
export declare function printConsoleMap(map: Map<string, string | object>): void;
export declare function mapValueObjectToObject(map: Map<string, object>): {};
export declare function mapValueStringToObject(map: Map<string, string>): {};
export declare function makeSuccessCallbackParams(task: Task): ACEResponseToCaller;
export declare function makeSuccessCallbackParams(task: Task, message: string): ACEResponseToCaller;
export declare function makeFailCallbackParams(task: Task): ACEResponseToCaller;
export declare function makeFailCallbackParams(task: Task, message: string): ACEResponseToCaller;
