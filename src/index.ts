import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const db = require('../db')
app.use(cors());
app.use(express.json());

// Test route
app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "OK" });
});

app.get("/mysets", (req: Request, res: Response) => {
  db.query("SELECT * FROM sets", (err: any, results: any) => {
    if (err) {
      console.error("Error fetching sets", err);
      return res.status(500).json({error: "Database error"});
    }
    res.json(results);
  })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));