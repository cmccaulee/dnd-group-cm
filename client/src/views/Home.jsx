import { LoggedInUserContext } from "../context/LoggedInUserContext";
import { useNavigate } from "react-router-dom";
import UserService from "../services/users.services";
import { useContext } from "react";
import TopNav from "../components/Navigation/TopNav";
import PageOptions from "../components/Navigation/PageOptions";
import Campaigns from "../components/Maps/Campaigns";

const Home = () => {
    const navigate = useNavigate();
    const { user, setUser, setIsLoggedIn, isLoggedIn } =
        useContext(LoggedInUserContext);
    const logoutUser = () => {
        UserService.logoutUser()
            .then(() => {
                setIsLoggedIn(false);
                setUser(null);
                navigate("/");
            })
            .catch((err) => console.log(err));
    };
    return (
        <>
            <TopNav />

            <PageOptions
                title="Choose Your Campaign"
                creatable="New Campaign"
                navLink="/campaigns/new"
            />
            <div className="flex justify-around mx-8 flex-wrap">
                <Campaigns />
            </div>
        </>
    );
};
export default Home;
