const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughText: {
            type: String,
            required: true,
            max_length: 280,
        },
        createdAt: {
            type: Date, // insert date format
            default: Date.now(),
            get: (createdAt) => new Date(createdAt).toISOString(),
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: { virtuals: true },
        id: false,
    }
)

// Virtual to get the reactionCount
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

const Thoughts = model('thoughts', thoughtSchema);

module.exports = Thoughts;