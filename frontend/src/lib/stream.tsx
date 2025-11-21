import { StreamVideoClient, type User } from "@stream-io/video-react-sdk";

const apiKey = import.meta.env.VITE_STREAM_API_KEY;

let client: StreamVideoClient | null = null;
let currentUserId: string | null = null;

export const initializeStreamClient = async (
  user: User,
  token: string
): Promise<StreamVideoClient> => {
  // if client exists with same user instead of creating again return it
  if (client && currentUserId === user.id) return client;

  if (client) {
    await disconnectStreamClient();
  }

  if (!apiKey) throw new Error("Stream API key is not provided.");

  client = new StreamVideoClient({
    apiKey,
    user,
    token,
  });

  currentUserId = user.id || null;

  return client;
};

export const disconnectStreamClient = async (): Promise<void> => {
  if (client) {
    try {
      await client.disconnectUser();
      client = null;
      currentUserId = null;
    } catch (error) {
      console.error("Error disconnecting Stream client:", error);
    }
  }
};
