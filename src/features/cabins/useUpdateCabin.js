import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createEditCabin } from "../../services/apiCabins";
function useUpdateCabin() {
  const queryClient = useQueryClient();
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabin, editId }) => createEditCabin(newCabin, editId),
    onSuccess: () => {
      toast.success("Cabin edit sucessfully !");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { editCabin, isEditing };
}

export default useUpdateCabin;
