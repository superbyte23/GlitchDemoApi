// createDummyUsers.js
const sequelize = require("../database");
const User = require("../models/user");
const bcrypt = require("bcrypt");

// Function to generate random string
function generateRandomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Function to generate random email
function generateRandomEmail() {
  const domains = ["gmail.com", "yahoo.com", "hotmail.com", "example.com"];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  return generateRandomString(8) + "@" + randomDomain;
}

// Function to generate dummy users
async function createDummyUsers() {
  try {
    // Create 100 dummy users
    for (let i = 0; i < 100; i++) {
      const username = generateRandomString(8);
      const email = generateRandomEmail();
      const password = generateRandomString(10);
      await User.create({ username, email, password });
    }
    console.log("Dummy users created successfully");
  } catch (err) {
    console.error("Error creating dummy users:", err);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
}

async function createAdminUser() {
  try {
    const username = "admin";
    const email = "admin@admin.com";
    const password = await bcrypt.hash("admin123", 10);
    await User.create({ username, email, password });

    console.log("Admin user created successfully");
  } catch (err) {
    console.error("Error creating admin user:", err);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
}

// Call the function to create dummy users
// createDummyUsers();
createAdminUser();
