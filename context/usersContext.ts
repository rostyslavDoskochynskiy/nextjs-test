import { createContext, Dispatch, SetStateAction } from "react";
import { User } from "../types/UserList";

interface UsersContextInterface {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
  resetPageNumber: () => void;
}

const UsersContext = createContext<UsersContextInterface | null>(null);

export default UsersContext;
