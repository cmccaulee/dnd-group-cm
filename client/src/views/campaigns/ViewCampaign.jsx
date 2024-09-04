import { useParams } from "react-router-dom";
import NewNoteForm from "../../components/Forms/NewNoteForm";
import Notes from "../../components/Maps/Notes";
import TopNav from "../../components/Navigation/TopNav";
import { useContext } from "react";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";

const ViewCampaign = () => {
    const { user } = useContext(LoggedInUserContext);
    const { id } = useParams();
    return (
        <div>
            <TopNav />
            <div className="flex justify-center gap-16 mt-16">
                <Notes />
                <NewNoteForm campaignId={id} />
            </div>
        </div>
    );
};
export default ViewCampaign;
