import { useAuthContext } from "@shared/lib/authContext.ts";

export const useAuth = () => {
  const { accessToken } = useAuthContext();

  return {
    isAuthenticated: !!accessToken
  };
};
