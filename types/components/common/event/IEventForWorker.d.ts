export default interface IEventForWorker {
    popWaitQueue: () => void;
    popBufferQueue: () => void;
}
