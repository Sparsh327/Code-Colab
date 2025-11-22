import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sessionApi } from "../api/sessions";
import {
  type CreateSessionPayload,
  type SessionResponse,
  type SessionsResponse,
  type ApiError,
} from "../types/Session.types";

// ---------------------------------------------------------
// CREATE SESSION
// ---------------------------------------------------------
export const useCreateSession = () => {
  return useMutation<SessionResponse, ApiError, CreateSessionPayload>({
    mutationKey: ["createSession"],
    mutationFn: sessionApi.createSession,
    onSuccess: () => toast.success("Session created successfully!"),
    onError: (error) =>
      toast.error(error?.response?.data?.message || "Failed to create session"),
  });
};

// ---------------------------------------------------------
// ACTIVE SESSIONS
// ---------------------------------------------------------
export const useActiveSessions = () => {
  return useQuery<SessionsResponse>({
    queryKey: ["activeSessions"],
    queryFn: sessionApi.getActiveSessions,
  });
};

// ---------------------------------------------------------
// RECENT SESSIONS
// ---------------------------------------------------------
export const useMyRecentSessions = () => {
  return useQuery<SessionsResponse>({
    queryKey: ["myRecentSessions"],
    queryFn: sessionApi.getMyRecentSessions,
  });
};

// ---------------------------------------------------------
// GET SESSION BY ID
// ---------------------------------------------------------
export const useSessionById = (id: string | undefined) => {
  return useQuery<SessionResponse>({
    queryKey: ["session", id],
    queryFn: () => sessionApi.getSessionById(id!),
    enabled: !!id,
    refetchInterval: 5000, // Refetch every 5 seconds
  });
};

// ---------------------------------------------------------
// JOIN SESSION
// ---------------------------------------------------------
export const useJoinSession = () => {
  return useMutation<SessionResponse, ApiError, string>({
    mutationKey: ["joinSession"],
    mutationFn: sessionApi.joinSession,
    onSuccess: () => toast.success("Joined session successfully!"),
    onError: (error) =>
      toast.error(error?.response?.data?.message || "Failed to join session"),
  });
};

// ---------------------------------------------------------
// END SESSION
// ---------------------------------------------------------
export const useEndSession = () => {
  return useMutation<SessionResponse, ApiError, string>({
    mutationKey: ["endSession"],
    mutationFn: sessionApi.endSession,
    onSuccess: () => toast.success("Session ended successfully!"),
    onError: (error) =>
      toast.error(error?.response?.data?.message || "Failed to end session"),
  });
};
