import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    // ! Always do some backed validation
    if (!email || !name || !message) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    const newMessage = { email, name, message };

    const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.fkmsa.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;

    let client;
    try {
      client = await MongoClient.connect(connectionString);
    } catch (e) {
      res.status(500).json({ message: "Couldn't connect to MongoDB" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (e) {
      client.close();
      res.status(500).json({ message: 'Storing message failed' });
      return;
    }

    client.close();

    res.status(201).json({ message: 'Success', data: newMessage });
  }
};

export default handler;
