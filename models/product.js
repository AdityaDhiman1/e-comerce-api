// import mongoose from "mongoose";
import mongoose from 'mongoose'

const productSchema = new  mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    richDescription: {
        type: String,
        default:""
    },
    image: {
        type: String,
        default:''
    },
    images: [
        {
            type: String,
        }
    ],
    brand: {
        type: String,
        default:''
    },
    price: {
        type: Number,
        default:0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required:true
    },
    countInStock: {
        type: Number,
        required: true,
        min: 0,
        max:255
    },
    rating: {
        type: Number,
        required: true,
    },
    numReviews: {
        type: String,
        default:0
    },
    isFeatured: {
        type: Boolean,
        default:false
    },
    dateCreated: {
        type: Date,
        default:Date.now()
    }
})

productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productSchema.set('toJSON', {
    virtuals:true,
})

const Product = new  mongoose.model('Product', productSchema)
export default { Product, productSchema }
