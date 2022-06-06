const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const { PORT } = require("./src/config/config");

app.use(cors());
app.use(morgan("dev"));
app.use(_mainErrorHandler);

app.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}`);
});

function _mainErrorHandler(err, req, res, next) {
  res.status(err.status || 500).json({ message: err.message });
}
