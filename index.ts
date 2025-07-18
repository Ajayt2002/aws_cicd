import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.json("Hi there");
});

app.get("/users", (req, res) => {
  res.json("Ajay, your first deployment is completed");
});

// Port setup (with fallback)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
}).on('error', (err) => {
  console.error('❌ Server failed to start:', err);
});