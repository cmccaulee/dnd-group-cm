import CampaignCard from "../Cards/CampaignCard";
import CampaignService from "../../services/campaigns.services";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Campaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        CampaignService.getAll(id)
            .then((response) => setCampaigns(response))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {campaigns.map((campaign, index) => (
                <CampaignCard key={index} campaign={campaign} />
            ))}
        </>
    );
};
export default Campaigns;
