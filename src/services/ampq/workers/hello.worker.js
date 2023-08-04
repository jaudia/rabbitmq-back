import { queuesList } from "../queuesList.js";

let queue;

export const init = () => {
    queue = queuesList.HELLO;
};

export const messageReceivedEvent = (message) => {
    console.log(' [x] Worker ' + queue + ' has received message: ' + message);
}