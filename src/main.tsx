import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { ReactQueryProvider } from "./lib/config/ReactQueryProvider.tsx";
import { store } from "./redux/store.ts";
import App from "./app.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <ReactQueryProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ReactQueryProvider>
        </Provider>
    </StrictMode>
);
