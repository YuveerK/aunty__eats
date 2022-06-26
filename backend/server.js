const express = require("express");
const app = express();
const userRoute = require("./Routes/UserRoutes");

app.listen(4000, () => {
  console.log("listening on port 4000");
});

app.use("/api", userRoute);
