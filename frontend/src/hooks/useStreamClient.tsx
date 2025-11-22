import { useState, useEffect } from "react";
import { StreamChat, type Channel } from "stream-chat";
import toast from "react-hot-toast";
import { initializeStreamClient, disconnectStreamClient } from "../lib/stream";
import { sessionApi } from "../api/sessions";
import type { StreamVideoClient, Call } from "@stream-io/video-react-sdk";
import type { Session } from "../types/Session.types";

interface UseStreamClientReturn {
  streamClient: StreamVideoClient | null;
  call: Call | null;
  chatClient: StreamChat | null;
  channel: Channel | null;
  isInitializingCall: boolean;
}

function useStreamClient(
  session: Session | null | undefined,
  loadingSession: boolean,
  isHost: boolean,
  isParticipant: boolean
): UseStreamClientReturn {
  const [streamClient, setStreamClient] = useState<StreamVideoClient | null>(
    null
  );
  const [call, setCall] = useState<Call | null>(null);
  const [chatClient, setChatClient] = useState<StreamChat | null>(null);
  const [channel, setChannel] = useState<Channel | null>(null);
  const [isInitializingCall, setIsInitializingCall] = useState(true);

  useEffect(() => {
    let videoCall: Call | null = null;
    let chatClientInstance: StreamChat | null = null;

    const initCall = async () => {
      if (!session?.callId) return;
      if (!isHost && !isParticipant) return;
      if (session.status === "completed") return;

      try {
        const { token, userId, userName, userImage } =
          await sessionApi.getStreamToken();

        const client = await initializeStreamClient(
          { id: userId, name: userName, image: userImage },
          token
        );

        setStreamClient(client);

        // Video Call
        videoCall = client.call("default", session.callId);
        await videoCall.join({ create: true });
        setCall(videoCall);

        // Chat Client
        const apiKey = import.meta.env.VITE_STREAM_API_KEY;
        const chat = StreamChat.getInstance(apiKey);
        await chat.connectUser(
          { id: userId, name: userName, image: userImage },
          token
        );

        chatClientInstance = chat;
        setChatClient(chat);

        const chatChannel = chat.channel("messaging", session.callId);
        await chatChannel.watch();
        setChannel(chatChannel);
      } catch (error) {
        console.error(error);
        toast.error("Failed to join video call");
      } finally {
        setIsInitializingCall(false);
      }
    };

    if (session && !loadingSession) initCall();

    return () => {
      (async () => {
        try {
          if (videoCall) await videoCall.leave();
          if (chatClientInstance) await chatClientInstance.disconnectUser();
          await disconnectStreamClient();
        } catch (e) {
          console.error("Cleanup error:", e);
        }
      })();
    };
  }, [session, loadingSession, isHost, isParticipant]);

  return {
    streamClient,
    call,
    chatClient,
    channel,
    isInitializingCall,
  };
}

export default useStreamClient;