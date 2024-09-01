import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoggedInUserProvider } from "./context/LoggedInUserContext";
import Login from "./views/login_reg/Login";
import Home from "./views/Home";
import Register from "./views/login_reg/Register";
import NewCampaign from "./views/NewCampaign";

function App() {
    return (
        <>
            <BrowserRouter>
                <LoggedInUserProvider>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/users/register" element={<Register />} />
                        <Route path="/home" element={<Home />} />
                        <Route
                            path="/campaigns/new"
                            element={<NewCampaign />}
                        />
                    </Routes>
                </LoggedInUserProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
