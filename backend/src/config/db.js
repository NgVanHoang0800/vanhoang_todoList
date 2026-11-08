//nơi liên kết với mongodb

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
        console.log("Lien ket thanh cong");
    } 
    catch (error) {
        console.error("Lien ket that bai", error);
        process.exit(1); // thoát khỏi DB nếu kết nối thất bại
    }
}

export default connectDB;