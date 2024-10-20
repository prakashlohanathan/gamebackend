import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./db.js";
import { saveGame, getGames } from "./Controller/gameController.js"


//ENV configuration
dotenv.config();

//middlewares
let app = express();
let PORT = process.env.Port;
app.use(cors());
app.use(express.json());

// Save game data route
app.post("/api/save-game", saveGame);

// Get all game data route
app.get("/api/games", getGames);

//dbConnection

dbConnection();

//Server Connection
app.listen(PORT, () => console.log(`Server listening at ${PORT}`));
