// workers
import firstWorker from './workers/worker';
import secondWorker from './workers/worker';

// Queue workers
import helloWorker from './workers/hello.worker';
import byeWorker from './workers/bye.worker';


export const init = () => {
    // initialization
    helloWorker.init();
    byeWorker.init();

    // 
    firstWorker.init('helloqueue', helloWorker.messageReceivedEvent);
    secondWorker.init('byequeue', byeWorker.messageReceivedEvent);
};