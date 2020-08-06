const mongoose = require('mongoose');
const Board = mongoose.model('Board');

exports.list_all_boards = (req, res) => {
  Board.find({}, (err, boards) => {
    if (err) res.send(err);
    res.json(boards);
  });
};

exports.create_a_board = (req, res) => {
  const newBoard = new Board({
    boardtype: "soft top board"
  });
  newBoard.save((err, board) => {
    if (err) res.send(err);
    res.json(board);
  })
}

exports.read_a_board = (req, res) => {
  Board.findById(req.params.boardId, (err, board) => {
    if (err) res.send(err);
    res.json(board);
  })
}

exports.update_a_board = (req, res) => {
  Board.findOneAndUpdate(
    { _id: req.params.boardId },
    req.body, // params
    { new: true },
    (err, board) => {
      if (err) res.send(err);
      res.json(board);
    }
  )
}

exports.delete_a_board = (req, res) => {
  Board.deleteOne({ _id: req.params.boardId }, (err) => {
    if (err) res.send(err);
    res.json({
      message: 'Board successfully deleted',
      _id: req.params.boardId
    });
  })
};
