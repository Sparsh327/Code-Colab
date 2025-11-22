export interface SessionUser {
  clerkId: string;
  name: string;
  profileImage: string;
}

export interface Session {
  _id: string;
  problem?: string;
  difficulty?: string;
  host?: SessionUser;
  participant?: SessionUser;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  callId?: string;
}

export interface SessionsResponse {
  sessions: Session[];
}

export interface SessionResponse {
  session: Session;
}

export interface CreateSessionPayload {
  problem: string;
  difficulty: string;
}
export interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}
