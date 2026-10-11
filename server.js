
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/api/status", (req, res) => {
  res.json({ online: true, name: "SnapBoost Pro" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`SnapBoost Pro lancé sur le port ${PORT}`);
});
