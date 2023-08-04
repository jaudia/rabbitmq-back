import { AmpqManager } from "../AmpqManager";

export const init = async (queueName, callbackEvent) => {

    try {

        await AmpqManager.connectRabbitMQ();

        AmpqManager.consumeFromQueue(queueName, callbackEvent);

    } catch (error) {

        console.log(error);
    }
};