import Game from "../models/gameModel.js";  

// Save game data
export const saveGame = async (req, res) => {
  try {
    const { player1Name, player2Name, rounds, winner } = req.body;
    const newGame = new Game({ player1Name, player2Name, rounds, winner });
    await newGame.save();
    res.status(200).json({ message: "Game saved!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all game data
export const getGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
