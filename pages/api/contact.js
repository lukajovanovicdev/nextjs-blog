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

    let client;
    try {
      client = await MongoClient.connect(
        'mongodb+srv://admin:admin@cluster0.fkmsa.mongodb.net/my-blog?retryWrites=true&w=majority'
      );
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
