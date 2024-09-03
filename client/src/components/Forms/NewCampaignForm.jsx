import { useState } from "react";
import CampaignService from "../../services/campaigns.services";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";

const NewCampaignForm = () => {
    const navigate = useNavigate();
    const { user } = useContext(LoggedInUserContext);
    const [errors, setErrors] = useState({});
    const [campaign, setCampaign] = useState({
        name: "",
        description: "",
        image: "",
        heroText: "",
        heroImage: "",
        players: [],
        createdBy: user._id,
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setCampaign((prevCampaign) => ({ ...prevCampaign, [name]: value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        CampaignService.create(campaign)
            .then(() => {
                setCampaign({
                    name: "",
                    description: "",
                    image: "",
                    heroText: "",
                    heroImage: "",
                    players: [],
                    createdBy: "",
                });
                navigate("/home");
            })
            .catch((err) => {
                setErrors(err.response.data);
            });
    };

    return (
        <div className="flex justify-center mt-5">
            <form
                className="card bg-base-100 w-auto shadow-xl gap-2 px-4 py-8"
                onSubmit={(e) => submitHandler(e)}>
                {errors && <p className="text-red-500">{errors.name}</p>}
                <h2 className="text-2xl ml-6 text-center">Create a Campaign</h2>
                <label
                    htmlFor="name"
                    className="input input-bordered flex items-center gap-2">
                    Campaign Name:
                    <input
                        type="text"
                        value={campaign.name}
                        name="name"
                        id="name"
                        onChange={(e) => changeHandler(e)}
                    />
                    {errors.validationErrors && (
                        <p className="text-red-400">
                            {errors.validationErrors.name}
                        </p>
                    )}
                </label>
                <label
                    htmlFor="heroText"
                    className="input input-bordered flex items-center gap-2">
                    Brief Synopsis:
                    <input
                        type="text"
                        value={campaign.heroText}
                        name="heroText"
                        id="heroText"
                        onChange={(e) => changeHandler(e)}
                    />
                    {errors.validationErrors && (
                        <p className="text-red-400">
                            {errors.validationErrors.heroText}
                        </p>
                    )}
                </label>

                <textarea
                    className="textarea textarea-bordered textarea-lg w-full"
                    placeholder="Detailed Description"
                    type="textarea"
                    value={campaign.description}
                    name="description"
                    id="description"
                    onChange={(e) => changeHandler(e)}
                />
                {errors.validationErrors && (
                    <p className="text-red-400">
                        {errors.validationErrors.description}
                    </p>
                )}
                <label
                    htmlFor="image"
                    className="input input-bordered flex items-center gap-2">
                    Campaign Image:
                    <input
                        placeholder="URL only for now"
                        type="text"
                        value={campaign.image}
                        name="image"
                        id="image"
                        onChange={(e) => changeHandler(e)}
                    />
                    {errors.validationErrors && (
                        <p className="text-red-400">
                            {errors.validationErrors.image}
                        </p>
                    )}
                </label>
                <label
                    htmlFor="heroImage"
                    className="input input-bordered flex items-center gap-2">
                    Thumbnail Image:
                    <input
                        placeholder="URL only for now"
                        type="text"
                        value={campaign.heroImage}
                        name="heroImage"
                        id="heroImage"
                        onChange={(e) => changeHandler(e)}
                    />
                    {errors.validationErrors && (
                        <p className="text-red-400">
                            {errors.validationErrors.heroImage}
                        </p>
                    )}
                </label>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};
export default NewCampaignForm;
