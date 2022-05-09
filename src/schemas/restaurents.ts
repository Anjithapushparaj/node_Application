import { Schema, model } from "mongoose";

const RestaurentSchema: Schema = new Schema({
    restaurentId : { 
        type: String, 
        required: true
    },
    restaurentName : { 
        type: String, 
        required: true
    } ,
    location: { 
        type: String, 
        required: true,
        // enum:["kochi", "ernakulam"]
    },
    foodOptions : { 
        type: [String], 
        required: true
    },
    rating : { 
        type: Number, 
        required: true
    },
    isOpen : { 
        type: Boolean, 
        required: true
    },
    isVeg: { 
        type: Boolean, 
        required: true
    },
    diningOnly : { 
        type: Boolean, 
        required: true
    }
})

export default model ("Restaurents", RestaurentSchema)