import mongoose from "mongoose";

// Define the Game schema and model
const gameSchema = new mongoose.Schema({
  player1Name: { type: String, required: true },
  player2Name: { type: String, required: true },
  rounds: { type: Array, required: true },
  winner: { type: String, required: true },
 });

const Game = mongoose.model("Game", gameSchema);

export default Game;
