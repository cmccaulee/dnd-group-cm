import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";
import UserIcon from "../Assets/UserIcon";

const CampaignCard = (props) => {
    const { campaign } = props;
    const { user } = useContext(LoggedInUserContext);
    return (
        <>
            <div
                className="card bg-cover max-w-xl min-w-xl"
                style={{
                    backgroundImage: `url(${campaign.heroImage})`,
                    zIndex: "-1",
                }}>
                <div
                    className="absolute inset-0 bg-black opacity-50 rounded-2xl  "
                    style={{
                        zIndex: "-1",
                    }}></div>
                <div className="hero-content text-neutral-content text-left shadow-xl p-8 pb-6">
                    <div className="max-w-xl min-w-xl">
                        <h1 className="mb-5 text-5xl font-bold font-unifraktur text-white text-left">
                            {campaign.name}
                        </h1>
                        <p className="mb-5 text-white text-left">
                            {campaign.heroText}
                        </p>
                        <div className="flex justify-between align-middle">
                            <ul className="flex gap-4">
                                {campaign.players.map((player) => (
                                    <li key={player._id}>
                                        <UserIcon
                                            image={player.image}
                                            size="16"
                                        />
                                    </li>
                                ))}
                            </ul>
                            <button className="btn btn-primary mt-2">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CampaignCard;
