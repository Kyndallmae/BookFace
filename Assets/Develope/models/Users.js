const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
        first: String,
        last: String,
        age: Number,
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'post',
            },
        ],
    },
    {
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
// Create a virtual property `fullName` that gets and sets the user's full name
userSchema
    .virtual('frienCount')
    // Getter
    .get(function () {
        return this.friends.length;
    });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;