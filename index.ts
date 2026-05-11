import express from "express";
import { StreamChat } from "stream-chat";

const app = express();
app.use(express.json());

const serverClient = StreamChat.getInstance(
  "js5ujy6aed2v",
  "kmhbemanxz7ndeh6agh3sxechvkkztqzrfmd84rw2jdsf5z4yxpqppb36wda7v9n"
);

app.post("/stream-token", async (req, res) => {
  const { userId } = req.body;
  if (!userId) return res.status(400).json({ error: "userId manquant" });

  const token = serverClient.createToken(userId);
  res.json({ token });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));