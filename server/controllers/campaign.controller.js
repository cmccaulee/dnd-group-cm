import Campaign from "../models/campaign.model.js";

const CampaignController = {
    "create": async (req, res, next) => {
        try {
            const newCampaign = await Campaign.create(req.body);
            res.json(newCampaign);
        } catch (err) {
            next(err);
        }
    },
    "getAll": async (req, res, next) => {
        try {
            const allCampaigns = await Campaign.find().populate("players");
            res.json(allCampaigns);
        } catch (err) {
            next(err);
        }
    },
    "getOne": async (req, res, next) => {
        try {
            const campaign = await Campaign.findById(req.params.id).populate("players");
            res.json(campaign);
        } catch (err) {
            next(err);
        }
    },
    "update": async (req, res, next) => {
        const options = { new: true, runValidators: true };
        try {
            const updatedCampaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, options).populate("players");
            res.json(updatedCampaign);
        } catch (err) {
            next(err);
        }
    },
    "delete": async (req, res, next) => {
        try {
            const deletedCampaign = await Campaign.findByIdAndDelete(req.params.id);
            res.json(deletedCampaign);
        } catch (err) {
            next(err);
        }
    },
    "getByUser": async (req, res, next) => {
        const filter = { user: req.params.id };
        try {
            const campaigns = await Campaign.find(filter).populate("players");
            res.json(campaigns);
        } catch (err) {
            next(err);
        }
    }
}
export default CampaignController;