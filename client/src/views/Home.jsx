import { LoggedInUserContext } from "../context/LoggedInUserContext";
import { useNavigate } from "react-router-dom";
import UserService from "../services/users.services";
import { useContext } from "react";
import TopNav from "../components/Navigation/TopNav";
import PageOptions from "../components/Navigation/PageOptions";
import CampaignCard from "../components/Cards/CampaignCard";

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
            />
            <CampaignCard />
        </>
    );
};
export default Home;
