import { Route, Routes } from "react-router-dom";

import Login from "../pages/login-page/login-page";
import Home from "../pages/home-page/home-page";
import PageLayout from "../pages/page-layout/page-layout";
import ROUTES_PATH from "../types/enums/routes-path";
import PrivateRoute from "./private-route";

function Router() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <PageLayout />
                    </PrivateRoute>
                }
            >
                <Route path={ROUTES_PATH.INDEX} element={<Home />} />
            </Route>
            <Route path={ROUTES_PATH.LOGIN} element={<Login />} />
        </Routes>
    );
}

export default Router;
