const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "*", // Allow all origins for development
  })
);

// Test route
app.get('/', (req, res) => {
    res.send('Server is running well');
});

const universities = require("./data.json");

app.get("/api/universities", (req, res) => {
  res.json(universities); 
});

// Endpoint to get a specific university by ID
app.get("/api/universities/:id", (req, res) => {
  const { id } = req.params;
  let university;
  
  if (universities.universities.public) {
    university = universities.universities.public.find((uni) => uni.id === id);
  }
  if (!university && universities.universities.private) {
    university = universities.universities.private.find((uni) => uni.id === id);
  }

  if (university) {
    res.json(university);
  } else {
    res.status(404).json({ error: "University not found" });
  }
});

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const AdmissionFormDB = client.db("AdmissionFormDB");
    const usersCollection = AdmissionFormDB.collection("users");

///
//......
//
    
    const generateUserId = () => {
      return `AFD${Math.floor(Math.random() * 1000000)}`;
    };

    /* User Routes */


  // Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await usersCollection.find().toArray();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// Register a new user
app.post("/users", async (req, res) => {
  const { fullName, collegeName, email, password } = req.body;

  // Validate the request body
  if (!fullName || !collegeName || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const userId = generateUserId();
    const newUser = { userId, fullName, collegeName, email, password };
    const result = await usersCollection.insertOne(newUser);

    console.log("User inserted:", result);

    res.status(201).json({
      message: "User registered successfully",
      userId: newUser.userId,
    });
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// Get a specific user by ID
app.get("/users/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await usersCollection.findOne({ userId });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});


    app.put("/users/:id", async (req, res) => {
      const userId = req.params.id;
      try {
        const { value: updatedUser } = await usersCollection.findOneAndUpdate(
          { userId },
          { $set: req.body },
          { returnOriginal: false }
        );

        if (!updatedUser) {
          return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", updatedUser });
      } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "Server error", details: error.message });
      }
    });

    app.delete("/users/:id", async (req, res) => {
      const userId = req.params.id;
      try {
        const { value: deletedUser } = await usersCollection.findOneAndDelete({ userId });
        if (!deletedUser) {
          return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully", deletedUser });
      } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: "Server error", details: error.message });
      }
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
run().catch(console.dir);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});
