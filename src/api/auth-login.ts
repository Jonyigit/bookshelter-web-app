import axios from "axios";

import type { LoginRequest } from "../types/type";

export const loginUser = (body: LoginRequest) => {
    return axios
        .post("https://dummyjson.com/auth/login", body)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
};
