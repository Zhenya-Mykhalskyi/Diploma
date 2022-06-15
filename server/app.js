const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { checkConnect } = require("./src/database");
const { PORT } = require("./src/config/config");
const userRouter  = require("./src/router/mainRouter");

const app = express();

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
};

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRouter);
app.use(_mainErrorHandler);

app.listen(PORT, () => {
  checkConnect();
  console.log(`Server has been started on ${PORT}`);
});

function _mainErrorHandler(err, req, res, next) {
  res.status(err.status || 500).json({ message: err.message });
}
