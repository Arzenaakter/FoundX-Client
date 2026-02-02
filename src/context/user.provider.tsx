"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { IUser } from "../types";
import { getCurrentUser } from "../services/AuthService";

const userContext = createContext<IUserProviderProps | undefined>(undefined);

interface IUserProviderProps {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const Userprovider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    const user = await getCurrentUser();
    setUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    handleUser();
  }, []);
  return (
    <userContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </userContext.Provider>
  );
};

export default Userprovider;
