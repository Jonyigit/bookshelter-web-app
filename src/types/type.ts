import type { ReactElement, ReactNode } from "react";

export type LoginRequest = {
    username: string;
    password: string;
};

export type ReactQueryProviderProps = {
    children: ReactNode;
};

export interface UniversalButtonProps {
    type: string;
}

export type PrivateRouteProps = {
    children: ReactElement;
};