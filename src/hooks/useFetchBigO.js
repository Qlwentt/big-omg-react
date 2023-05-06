import { useMutation, useQueryClient } from "@tanstack/react-query";

import axios from "../api/axiosInstance";

function useFetchBigO({ name, url, sideEffect }) {
  const queryClient = useQueryClient();
  const { mutate, isLoading, data } = useMutation(
    (payload) => {
      return axios.post(`api/${url}`, payload);
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries([name]);
      },
      onError: () => {
        window.alert("there was an error");
        sideEffect();
      },
    }
  );
  return { mutate, isLoading, data: data?.data };
}

export default useFetchBigO;
