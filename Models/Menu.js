import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const menuSchema = new Schema({
    prodId : {
        type : String,
        required : true,
        unique : true
    }, 
    title : {
        type : String,
        required : true,        
    }, 
    desc : {
        type : String,
        required : true,
       
    },    
    price : {
        type : Number,
        required : true
    }
}, { timestamps : true });

const Menu = mongoose.model('Menu', menuSchema);

export default Menu;
