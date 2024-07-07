import { useMutation } from "@tanstack/react-query";
import { signUp as signupApi } from "../../services/apiAuth";
import { toast } from "react-toastify";

export function useSignup() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) =>
      toast.success(
        "Account successfully created! Please verify the new account from user's email address."
      ),
  });

  return { signUp, isLoading };
}
