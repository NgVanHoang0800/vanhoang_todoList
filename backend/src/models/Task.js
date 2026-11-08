import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true, // có thể loại bỏ khoảng trắng ở đầu và cuối 
    },
    status: {
        type: String,
        enum: ['active', 'completed'],
        default: 'active'
    },
    completedAt: {
        type: Date,
        default: null
    },   
    },
    {
        timestamps: true // tự động thêm createdAt và updatedAt vào document
    }
);

const Task = mongoose.model('Task', taskSchema); //từ schema tạo ra model Task để thao tác với collection tasks trong MongoDB

export default Task;