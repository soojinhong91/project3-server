const mongoose = require('mongoose');
const Beach = mongoose.model('Beach');

exports.list_all_beaches = (req, res) => {
  Beach.find({}, (err, beaches) => {
    if (err) res.send(err);
    res.json(beaches);
  });
};

exports.create_a_beach = (req, res) => {
  newBeach.save((err, beach) => {
    if (err) res.send(err);
    res.json(beach);
  })
}

exports.read_a_beach = (req, res) => {
  Beach.findById(req.params.beachId, (err, beach) => {
    if (err) res.send(err);
    res.json(beach);
  })
}

exports.update_a_beach = (req, res) => {
  Beach.findOneAndUpdate(
    { _id: req.params.beachId },
    req.body, // params
    { new: true },
    (err, beach) => {
      if (err) res.send(err);
      res.json(beach);
    }
  )
}

exports.delete_a_beach = (req, res) => {
  Beach.deleteOne({ _id: req.params.beachId }, (err) => {
    if (err) res.send(err);
    res.json({
      message: 'Beach item successfully deleted',
      _id: req.params.beachId
    });
  })
};
