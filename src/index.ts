import { onCall, HttpsError } from "firebase-functions/v2/https";
import { StreamChat } from "stream-chat";

const STREAM_API_KEY = "js5ujy6aed2v";
const STREAM_SECRET = "kmhbemanxz7ndeh6agh3sxechvkkztqzrfmd84rw2jdsf5z4yxpqppb36wda7v9n";

const serverClient = StreamChat.getInstance(STREAM_API_KEY, STREAM_SECRET);

export const getStreamToken = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "Utilisateur non connecté");
  }

  const token = serverClient.createToken(request.auth.uid);
  return { token };
});