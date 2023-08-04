import { AmpqManager } from "../services/ampq/AmpqManager.js";
import { queuesList } from "../services/ampq/queuesList.js";

export const hello = async (req, res) => {

    try {

        await AmpqManager.connectRabbitMQ();

        const { someField = 'anything' } = req.body;

        const msg = `HELLO!! this your message -> ${someField}`

        AmpqManager.sendMessageToQueue(queuesList.HELLO, msg);

        console.log('Message sent to RabbitMQ from backend/hello:', msg);

        res.status(200).json({ success: true });

    } catch (error) {

        console.error('Error to send message to RabbitMQ from backend/hello:', error);

        res.status(500).json({ success: false, error: 'Error al enviar el mensaje' });
    }

}


export const bye = async (req, res) => {

    try {

        await AmpqManager.connectRabbitMQ();

        const { someField = 'anything' } = req.body;

        const msg = `HELLO!! this your message -> ${someField}`

        AmpqManager.sendMessageToQueue(queuesList.BYE, msg);

        console.log('Message sent to RabbitMQ from backend/bye:', msg);

        res.status(200).json({ success: true });

    } catch (error) {

        console.error('Error to send message to RabbitMQ from backend/bye:', error);

        res.status(500).json({ success: false, error: 'Error al enviar el mensaje' });
    }

}