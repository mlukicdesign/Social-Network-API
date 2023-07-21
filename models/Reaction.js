const { ObjectId } = require('bson');
const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: ObjectId,
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: (createdAt) => new Date(createdAt).toISOString()
        }
    }
)

const Reactions = model('reactions', reactionSchema);

module.exports = Reactions;