import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./queryClient";
import type { ReactQueryProviderProps } from "../../types/type";

export const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
