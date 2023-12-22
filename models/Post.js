const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = Schema(
{
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    description: {
        type: String,
        max: 500
    },
    image: {
        type: String
    }, 
    likes: {
        type: [Schema.Types.ObjectId],
        ref: 'User'
    }
},   

{timestamps: true});




module.exports = mongoose.model("Post", PostSchema);