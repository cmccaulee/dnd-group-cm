import { Router } from 'express';
import CampaignController from '../controllers/campaign.controller.js';

const CampaignRouter = Router()

CampaignRouter.route('/')
    .post(CampaignController.create)
    .get(CampaignController.getAll)
CampaignRouter.route('/:id')
    .get(CampaignController.getOne)
    .put(CampaignController.update)
    .delete(CampaignController.delete)
CampaignRouter.route('/user/:id')
    .get(CampaignController.getByUser)

export default CampaignRouter;