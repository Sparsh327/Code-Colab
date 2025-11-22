import { type Problem } from "../data/problems";

export interface RoomConfig {
  problem: string;
  difficulty: Problem["difficulty"] | "";
}

export interface CreateSessionModalProps {
  isOpen: boolean;
  onClose: () => void;

  roomConfig: RoomConfig;
  setRoomConfig: (config: RoomConfig) => void;

  onCreateRoom: () => void;
  isCreating: boolean;
}
