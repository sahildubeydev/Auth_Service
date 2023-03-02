const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");

const db = require("./models/index");

const app = express();

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(3001, async () => {
    console.log(`Server started on PORT: ${PORT}`);
    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }

    // const service = new UserService();
    // const newToken = service.createToken({ email: "shiv@admin.com", id: 1 });
    // console.log("new token is", newToken);
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoaXZAYWRtaW4uY29tIiwiaWQiOjEsImlhdCI6MTY3NzY5OTg5OCwiZXhwIjoxNjc3Njk5OTI4fQ.hASt2qOVt4hfpoq-usXwyNQYJxo0TmRdhy6LvDoOiM0";
    // const response = service.verifyToken(token);
    // console.log(response);
  });
};

prepareAndStartServer();
