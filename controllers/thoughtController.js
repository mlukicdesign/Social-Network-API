const { User, Thoughts, Reactions } = require("../models");

module.exports = {
  // GET to get all thoughts
  getAllThoughts(req, res) {
    Thoughts.find()
      .then((thoughtData) => res.json(thoughtData))
      .catch((err) => res.status(500).json(err));
  },

  // GET to get a single thought by its _id
  async getThoughtsById(req, res) {
    try {
      const thought = await Thoughts.findById({ _id: req.params.thoughtId });
      if (!thought) {
        res.status(404).json({ message: "Thought not found" });
      } else {
        res.json(thought);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // POST to create a new thought
  async createThought(req, res) {
    try {
      const newThought = await Thoughts.create(req.body);
      await User.findOneAndUpdate(
        { username: req.body.username },
        { $push: { thoughts: newThought._id } }
      );

      res.status(200).json("create a new thought");
    } catch (err) {
      res.status(500).send(err);
    }
  },

  // Update Thought by _id
  async updateThoughtById(req, res) {
    try {
      const thought = await Thoughts.findByIdAndUpdate(
        req.params.thoughtId,
        req.body,
        {
          new: true,
        }
      );
      if (!thought) {
        res.status(404).json({ message: "Thought not found" });
      } else {
        res.json("thought updated");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteThought(req, res) {
    try {
      const thought = await Thoughts.findByIdAndDelete({
        _id: req.params.thoughtId,
      });
      res.status(200).json("thought deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create Reaction
  async createReaction(req, res) {
    try {
      const newReaction = {
        reactionBody: req.body.reactionBody,
        username: req.body.username,
      };
      const thought = await Thoughts.findByIdAndUpdate(
        req.params.thoughtId,
        { $push: { reactions: newReaction } },
        { new: true }
      );
      if (!thought) {
        return res.status(404).json({ message: "Thought not found" });
      }
      res.json("reaction created");
    } catch (e) {
      res.status(500).json(e);
    }
  },

  // Delete Reaction
  async deleteReaction(req, res) {
    try {
      const thought = await Thoughts.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      thought
        ? res.json("Reaction Deleted")
        : res.status(404).json({ message: notFound });
    } catch (e) {
      res.status(500).json(e);
    }
  },
};
