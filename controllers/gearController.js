const mongoose = require('mongoose');
const Gear = mongoose.model('Gear');

exports.list_all_gears = (req, res) => {
  // const newGear = new Gear({
  //   geartype: "wetsuit"
  // });
  // newGear.save()
  Gear.find({}, (err, gears) => {
    if (err) res.send(err);
    res.json(gears);
  });
};

exports.create_a_gear = (req, res) => {
  const newGear = new Gear({
    geartype: "wetsuit"
  });
  newGear.save((err, gear) => {
    if (err) res.send(err);
    res.json(gear);
  })
}

exports.read_a_gear = (req, res) => {
  Gear.findById(req.params.gearId, (err, gear) => {
    if (err) res.send(err);
    res.json(gear);
  })
}

exports.update_a_gear = (req, res) => {
  Gear.findOneAndUpdate(
    { _id: req.params.gearId },
    req.body, // params
    { new: true },
    (err, gear) => {
      if (err) res.send(err);
      res.json(gear);
    }
  )
}

exports.delete_a_gear = (req, res) => {
  Gear.deleteOne({ _id: req.params.gearId }, (err) => {
    if (err) res.send(err);
    res.json({
      message: 'Gear successfully deleted',
      _id: req.params.gearId
    });
  })
};
