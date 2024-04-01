// app.js
const express = require("express");
const sequelize = require("./database");
const userRoutes = require("./routes/users");

const app = express();

app.use(express.json());

// Define your routes here
// Example route
app.use("/users", userRoutes);

// Sync Sequelize models with the database
sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => console.error("Error syncing database:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
