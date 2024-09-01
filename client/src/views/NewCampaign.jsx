import NewCampaignForm from "../components/Forms/NewCampaignForm";
import TopNav from "../components/Navigation/TopNav";

const NewCampaign = () => {
    return (
        <>
            <TopNav />
            <div>
                <NewCampaignForm />
            </div>
        </>
    );
};
export default NewCampaign;
