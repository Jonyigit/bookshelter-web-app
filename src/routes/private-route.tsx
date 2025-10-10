import { Navigate } from "react-router-dom";

import ROUTES_PATH from "../types/enums/routes-path";
import type { PrivateRouteProps } from "../types/type";

function PrivateRoute({ children }: PrivateRouteProps) {
    if (localStorage.getItem("accessToken")) {
        return children;
    }

    return <Navigate to={ROUTES_PATH.LOGIN} />;
}

export default PrivateRoute;
