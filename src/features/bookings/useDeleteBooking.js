import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: (data) => {
      toast.success(`Booking #${data?.id} successfully deleted`);

      queryClient.invalidateQueries({
        ative: true,
      });
    },
    onError: () => {
      toast.error("Could not delete booking");
    },
  });

  return { deleteBooking, isDeleting };
}
