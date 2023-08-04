import amqp from 'amqplib';


// Unico canal pero con infinitos queues
export class AmpqManager {

    static _connection;
    static _channel;

    static async connectRabbitMQ() {

        try {
            if (!this._connection) {

                this._connection = await amqp.connect('amqp://localhost');

                console.log('rabbitmq connected!')
            }

            if (!this._channel) {

                this._channel = await this._connection.createChannel();

                console.log('channel connected!')
            }

        } catch (error) {

            console.error('Error to connect to RabbitMQ:', error);

            throw error;
        }
    }

    static sendMessageToQueue(queueName, message) {

        this._channel.assertQueue(queueName, {
            durable: false
        });

        this._channel.sendToQueue(queueName, Buffer.from(message));

        console.log("[x] Sent %s", message);
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
