import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ReactQueryProvider } from "./lib/config/ReactQueryProvider.tsx";
import App from "./app.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ReactQueryProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ReactQueryProvider>
    </StrictMode>
);
