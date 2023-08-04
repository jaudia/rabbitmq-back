import amqp from 'amqplib';


// Unico canal pero con infinitos queues
export class AmpqManager {

    static _connection;
    static _channel;

    static async connectRabbitMQ() {

        try {
            if (!this._connection) {

                _connection = await amqp.connect('amqp://localhost');

                console.log('rabbitmq conectado')
            }

            if (!this._channel) {

                this._channel = await connection.createChannel();

                console.log('channel conectado')
            }

        } catch (error) {

            console.error('Error al conectar a RabbitMQ:', error);

            throw error;
        }
    }

    static sendMessageToQueue(queueName, message) {

        this._channel.assertQueue(queueName, {
            durable: false
        });

        this._channel.sendToQueue(queueName, Buffer.from(message));

        this._console.log("[x] Sent %s", message);
    };

    static consumeFromQueue(queueName, cb) {

        this._channel.assertQueue(queueName, {
            durable: false
        });

        console.log('Worker for queue ' + queueName + ' started! Listening for messages...');

        this._channel.consume(queueName, (message) => {
            cb(message.content.toString());
        }, { noAck: true });
    };


}
