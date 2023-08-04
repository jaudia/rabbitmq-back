import { queuesList } from "../queuesList";

let queue;

export const init = () => {
    queue = queuesList.BYE;
};

export const messageReceivedEvent = (message) => {
    console.log(' [x] Worker ' + queue + ' has received message: ' + message);
}