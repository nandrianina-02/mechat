import express, { Request, Response } from "express";
import { StreamChat } from "stream-chat";
import cors from "cors";

const app = express();
app.use(cors()); // ✅ autorise toutes les origines
app.use(express.json());

const serverClient = StreamChat.getInstance(
  process.env.STREAM_API_KEY!,
  process.env.STREAM_SECRET!
);

app.post("/stream-token", async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.body;
  if (!userId) {
    res.status(400).json({ error: "userId manquant" });
    return;
  }

  const token = serverClient.createToken(userId);
  res.json({ token });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));