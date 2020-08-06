const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// set up mongoose
global.Product = require('./models/productModel');
global.Board = require('./models/boardModel');
global.Gear = require('./models/gearModel');
global.Beach = require('./models/beachModel');

const productRouter = require('./routes/productRouter');
const boardRouter = require('./routes/boardRouter');
const gearRouter = require('./routes/gearRouter');
const beachRouter = require('./routes/beachRouter');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connected")
  }
)

// set up express
const app = express();

app.use(express.json());
app.use(cors());

// set up routes
app.use("/users", require("./routes/userRouter"))
app.use(bodyParser.urlencoded({ extended: true })); // Makes POST requests work
app.use(bodyParser.json());

productRouter(app);
boardRouter(app);
gearRouter(app);
beachRouter(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Serving on http://localhost:${ PORT }`));

// 404
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});
