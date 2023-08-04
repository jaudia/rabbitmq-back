import { AmpqManager } from "../AmpqManager.js";

export const init = async (queueName, callbackEvent) => {

    try {

        await AmpqManager.connectRabbitMQ();

        AmpqManager.consumeFromQueue(queueName, callbackEvent);

    } catch (error) {

        console.log(error);
    }
};