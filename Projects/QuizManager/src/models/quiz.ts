import mongoose, { Schema } from 'mongoose';

const schema=mongoose.Schema;

const quizSchema=new schema(
    {
        name:{
            type:String,
            required:true,
            unique:true
        },
        question_list:[
            {
                question_number:Number,
                question:String,
                options:{}
            }
        ],
        answer:{},
        created_by:{
            type:mongoose.Types.ObjectId
        },
        is_published:{
            type:Boolean,
            default:false
        }
    },
    {timestamps:true}
);

const Quiz =mongoose.model('Quiz',quizSchema);

export default Quiz;