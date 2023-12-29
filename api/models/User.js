const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema(
    {
        username: {
            type: String,
            required: true,
            min: 3,
            max: 20,
            unique: true
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 5
        },
        profilePicture: {
            type: String,
            default: ""
        },
        coverPicture: {
            type: String,
            default: ""
        },
        followers: {
            type: [Schema.Types.ObjectId],
            ref : 'User'
        },
        followings: {
            type: [Schema.Types.ObjectId],
            ref : 'User'
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        bio: {
            type: String,
            max: 100
        },
        current_city: {
            type: String,
            max: 50
        },
        birth_city: {
            type: String,
        },
        relationship: {
            type: Number,
            enum: [1, 2, 3], //1: single, 2:married, 3: other
        },
        birth_date: {
            type: Date
        },
        job: {
            type: String
        }
},

{timestamps: true},

{
    statics: {
        findByName(username) {
            return this.find({ username: new RegExp(username, 'i') });
        }
    }
}
);




module.exports = mongoose.model("User", UserSchema);