import { GenerateQueryKeys } from "@/shared/libs/utils/generateQueryKeys";

const queryKey = "ProductSearch" as const;

export const productSearchQueryKeys = GenerateQueryKeys(queryKey);
