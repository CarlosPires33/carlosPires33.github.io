const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CommentSchema = new Schema({
    name: {
      type:String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    body:{
      type:String,
      required: true
    }
  }
)

const Comment = mongoose.model('comments', CommentSchema);

module.exports = Comment;