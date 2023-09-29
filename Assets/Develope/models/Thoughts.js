const { Schema, model } = require('mongoose');

// Schema to create User model
const thoughtSchema = new Schema(
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
const reactionSchema = new mongoose.Schema({
    username: { type: String, required: true },
    // This will add a single subdocument to include the manager's information
    reactionId: [reactionIdSchema],
    // This will include an array that holds all the employees' information
    reactionBody: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });

// Create a virtual property `fullName` that gets and sets the user's full name
userSchema
    .virtual('reactionCount')
    // Getter
    .get(function () {
        return this.reactions.length;
    });

// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = User;
