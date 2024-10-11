import { Router, Request, Response } from 'express';
import RequestModel from '../models/Request';

const router = Router();

// Get all requests
router.get('/requests', async (req: Request, res: Response) => {
  try {
    const requests = await RequestModel.find();
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching requests', error });
  }
});

// Add a new request
router.post('/requests', async (req: Request, res: Response) => {
  try {
    const newRequest = new RequestModel(req.body);
    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ message: 'Error creating request', error });
  }
});

export default router;
