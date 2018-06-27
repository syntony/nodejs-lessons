const mongoose = require('mongoose');

const Todo = mongoose.model('Todos', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: Math.floor(Date.now() / 1000)
  }
});

module.exports = { Todo };
