import mongoose from 'mongoose'
const URI = "mongodb://127.0.0.1:27017/TheStableTech"
//connection function

const connectDB = () => {
    mongoose.connect(URI).then(() => {
        console.log(`Connected to DB `, mongoose.connection.host)
    }).catch((err) => {
        console.error(`Filed to connect`, err)
        process.exit()
    })
}
export default connectDB