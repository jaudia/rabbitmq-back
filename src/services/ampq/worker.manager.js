// workers
import * as firstWorker from './workers/worker.js';
import * as secondWorker from './workers/worker.js';

// Queue workers
import * as helloWorker from './workers/hello.worker.js';
import * as byeWorker from './workers/bye.worker.js';
import { queuesList } from './queuesList.js';


export const init = () => {
    // initialization
    helloWorker.init();
    byeWorker.init();

    // Prepare callbacks
    firstWorker.init(queuesList.HELLO, helloWorker.messageReceivedEvent);
    secondWorker.init(queuesList.BYE, byeWorker.messageReceivedEvent);
};