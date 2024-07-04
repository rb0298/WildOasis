import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  console.log(isLoading, user, user?.role === "authenticated");
  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
