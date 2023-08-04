import { AmpqManager } from "../services/ampq/AmpqManager.js";
import { queuesList } from "../services/ampq/queuesList.js";

export const hello = async (req, res) => {

    try {


        await AmpqManager.connectRabbitMQ();

        const { campo } = req.body;

        AmpqManager.sendMessageToQueue(queuesList.HELLO, campo);

        console.log('Mensaje enviado a RabbitMQ desde el backend:', campo);

        res.status(200).json({ success: true });

    } catch (error) {

        console.error('Error al enviar el mensaje a RabbitMQ desde el backend/hello:', error);

        res.status(500).json({ success: false, error: 'Error al enviar el mensaje' });
    }

}


export const bye = async (req, res) => {

    try {


        await AmpqManager.connectRabbitMQ();

        const { campo } = req.body;

        AmpqManager.sendMessageToQueue(queuesList.BYE, campo);

        console.log('Mensaje enviado a RabbitMQ desde el backend/bye:', campo);

        res.status(200).json({ success: true });

    } catch (error) {

        console.error('Error al enviar el mensaje a RabbitMQ desde el backend:', error);

        res.status(500).json({ success: false, error: 'Error al enviar el mensaje' });
    }

}