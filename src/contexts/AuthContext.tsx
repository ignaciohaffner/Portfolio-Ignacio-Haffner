import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import {
  auth,
  provider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "../firebaseConfig";
import { isAdminUid } from "../config/site";

interface AuthUser {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  isAdmin: boolean;
  signIn: () => Promise<void>;
  signOutUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (fbUser: AuthUser | null) => {
      setUser(
        fbUser
          ? {
              uid: fbUser.uid,
              displayName: fbUser.displayName,
              email: fbUser.email,
              photoURL: fbUser.photoURL,
            }
          : null
      );
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const signIn = async () => {
    await signInWithPopup(auth, provider);
  };

  const signOutUser = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAdmin: isAdminUid(user?.uid),
        signIn,
        signOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
