const boardBuilder = require('../controllers/boardController');
const Board = require("../models/boardModel")

module.exports = (app) => {
  app
  .route('/boards')
  .get(boardBuilder.list_all_boards)
  .post(boardBuilder.create_a_board)

  app
  .route('/boards/:boardId')
  .get(boardBuilder.read_a_board)
  .put(boardBuilder.update_a_board)
  .delete(boardBuilder.delete_a_board)
}
