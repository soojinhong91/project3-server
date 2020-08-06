const gearBuilder = require('../controllers/gearController');
const Gear = require("../models/gearModel");

module.exports = (app) => {
  app
  .route('/gears')
  .get(gearBuilder.list_all_gears)
  .post(gearBuilder.create_a_gear)

  app
  .route('/gears/:gearId')
  .get(gearBuilder.read_a_gear)
  .put(gearBuilder.update_a_gear)
  .delete(gearBuilder.delete_a_gear)
}
