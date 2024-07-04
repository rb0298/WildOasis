import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get("status");
  const sortByraw = searchParams.get("sortBy") || "created_at-asc";
  const [field, direction] = sortByraw.split("-");
  const sortBy = {
    field,
    direction,
  };

  console.log(sortBy);
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };

  //PAGINATION
  const page = Number(searchParams.get("page")) || 1;

  const {
    data: { data: bookings, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page], //dependecy array of usequery
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  //PRE-FETCH THE NEXT PAGE
  if (page < Math.ceil(count / PAGE_SIZE)) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });
  }

  return { bookings, isLoading, error, count };
}
