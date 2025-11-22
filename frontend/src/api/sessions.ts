import axiosInstance from "../lib/axios";
import {
  type CreateSessionPayload,
  type SessionResponse,
  type SessionsResponse,
} from "../types/Session.types";

// You can also keep types inside this file if you prefer.
// I put them in sessionTypes.ts for cleanliness.

export const sessionApi = {
  // ---------------------------------------
  // CREATE SESSION
  // ---------------------------------------
  createSession: async (
    data: CreateSessionPayload
  ): Promise<SessionResponse> => {
    const response = await axiosInstance.post("/sessions", data);
    return response.data;
  },

  // ---------------------------------------
  // GET ACTIVE SESSIONS
  // ---------------------------------------
  getActiveSessions: async (): Promise<SessionsResponse> => {
    const response = await axiosInstance.get("/sessions/active");
    return response.data;
  },

  // ---------------------------------------
  // GET RECENT SESSIONS
  // ---------------------------------------
  getMyRecentSessions: async (): Promise<SessionsResponse> => {
    const response = await axiosInstance.get("/sessions/my-recent");
    return response.data;
  },

  // ---------------------------------------
  // GET SESSION BY ID
  // ---------------------------------------
  getSessionById: async (id: string): Promise<SessionResponse> => {
    const response = await axiosInstance.get(`/sessions/${id}`);
    return response.data;
  },

  // ---------------------------------------
  // JOIN SESSION
  // ---------------------------------------
  joinSession: async (sessionId: string): Promise<SessionResponse> => {
    const response = await axiosInstance.post(`/sessions/${sessionId}/join`);
    return response.data;
  },

  // ---------------------------------------
  // END SESSION
  // ---------------------------------------
  endSession: async (sessionId: string): Promise<SessionResponse> => {
    const response = await axiosInstance.post(`/sessions/${sessionId}/end`);
    return response.data;
  },

  // ---------------------------------------
  // STREAM TOKEN (FOR CHAT)
  // ---------------------------------------
  getStreamToken: async (): Promise<{ token: string }> => {
    const response = await axiosInstance.get(`/chat/token`);
    return response.data;
  },
};
