const beachBuilder = require('../controllers/beachController');
const Gear = require("../models/beachModel");

module.exports = (app) => {
  app
  .route('/beaches')
  .get(beachBuilder.list_all_beaches)
  .post(beachBuilder.create_a_beach)

  app
  .route('/beaches/:beachId')
  .get(beachBuilder.read_a_beach)
  .put(beachBuilder.update_a_beach)
  .delete(beachBuilder.delete_a_beach)
}
