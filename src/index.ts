import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "OK" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));