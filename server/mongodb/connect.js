import moongoose from 'mongoose';

const connectDB = (url) => {
    moongoose.set('strictQuery', true);
    moongoose.connect(url)
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.log(error));
}

export default connectDB;