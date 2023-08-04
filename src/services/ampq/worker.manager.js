// workers
import * as firstWorker from './workers/worker.js';
import * as secondWorker from './workers/worker.js';

// Queue workers
import * as helloWorker from './workers/hello.worker.js';
import * as byeWorker from './workers/bye.worker.js';


export const init = () => {
    // initialization
    helloWorker.init();
    byeWorker.init();

    // 
    firstWorker.init('helloqueue', helloWorker.messageReceivedEvent);
    secondWorker.init('byequeue', byeWorker.messageReceivedEvent);
};