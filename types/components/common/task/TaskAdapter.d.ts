import Task from './Task';
import { ACEResponseToCaller } from '../constant/ACEPublicStaticConfig';
export default class TaskAdapter {
    private static _TAG;
    private _task;
    private _callback?;
    addTask(argTask: Task): void;
    addTask(argTask: Task, callback: ((error?: object, result?: ACEResponseToCaller) => void) | undefined): void;
    private doWork;
    private didWork;
    run(): void;
}
