import { getCabins } from "../../services/apiCabins";
import { useQuery } from "@tanstack/react-query";
export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins, //return a promise
  });

  return { isLoading, cabins, error };
}
