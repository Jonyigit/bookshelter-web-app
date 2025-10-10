import { Toaster } from "react-hot-toast";

import Router from "./routes/router";
import "./styles/helper.scss";
import "./styles/variables.scss";
import "./styles/global.scss";

function App() {
    return (
        <>
            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        background: "var(--secondary-bg)",
                        color: "var(--text-color)",
                    },
                }}
            />
            <Router />
        </>
    );
}

export default App;
