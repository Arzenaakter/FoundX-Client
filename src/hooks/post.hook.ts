import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { createPost } from "../services/Post";

export const userCreatePost = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (formData) => await createPost(formData),
    onSuccess: () => {
      toast.success("Post created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
