import { useMutation } from "@tanstack/react-query";
import { postStateBatch } from "../services/postStateBatch";


export const useStateBatchMutation = () => {
    return useMutation({
        mutationKey: ["create-batch-state"],
        mutationFn: postStateBatch,
    });
};
