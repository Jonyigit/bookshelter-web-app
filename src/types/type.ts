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
    handleClick: () => void;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type PrivateRouteProps = {
    children: ReactElement;
};
