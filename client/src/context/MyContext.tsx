// "use client";

// import { createContext, useState, useContext, ReactNode } from "react";

// interface UserProfile {
//   FirstName?: string;
//   LastName?: string;
//   UserId?: number;
//   name: string;
//   picture?: string;
//   email: string;
//   portfolios?: any[];
//   profile?: Record<string, any>;
// }

// interface MyContextType {
//   userProfile: UserProfile;
//   setUserProfile: (profile: UserProfile) => void;
// }

// const MyContext = createContext<MyContextType | undefined>(undefined);

// export const useMyContext = (): MyContextType => {
//   const context = useContext(MyContext);
//   if (!context) {
//     throw new Error("useMyContext must be used within a MyProvider");
//   }
//   return context;
// };

// interface MyProviderProps {
//   children: ReactNode;
// }

// export const MyProvider = ({ children }: MyProviderProps) => {
//   const [userProfile, setUserProfile] = useState<UserProfile>({
//     FirstName: "",
//     LastName: "",
//     UserId: undefined,
//     name: "",
//     picture: "",
//     email: "",
//     portfolios: [],
//     profile: {},
//   });

//   return (
//     <MyContext.Provider value={{ userProfile, setUserProfile }}>
//       {children}
//     </MyContext.Provider>
//   );
// };

"use client";

import { createContext, useState, useContext, type ReactNode } from "react";

interface UserProfile {
  FirstName?: string;
  LastName?: string;
  UserId?: number;
  name: string;
  picture?: string;
  email: string;
  portfolios?: any[];
  profile?: Record<string, any>;
  chats?: any[];
}

interface MyContextType {
  userProfile: UserProfile;
  setUserProfile: (profile: UserProfile) => void;
  refreshChats: () => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const useMyContext = (): MyContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

interface MyProviderProps {
  children: ReactNode;
}

export const MyProvider = ({ children }: MyProviderProps) => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    FirstName: "",
    LastName: "",
    UserId: undefined,
    name: "",
    picture: "",
    email: "",
    portfolios: [],
    profile: {},
    chats: [],
  });

  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const refreshChats = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <MyContext.Provider
      value={{
        userProfile,
        setUserProfile,
        refreshChats,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

// For backward compatibility
export const MyContextProvider = MyProvider;
