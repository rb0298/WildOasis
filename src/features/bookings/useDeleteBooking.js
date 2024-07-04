import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export function useDeleteBooking(id) {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: (data) => {
      toast.success(`Booking is successfully deleted`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { deleteBooking, isDeleting };
}
