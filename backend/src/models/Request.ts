import { Schema, model, Document } from 'mongoose';

// Define the interface for the Request document
interface IRequest extends Document {
  requestId: string;
  createdOn: Date;
  location: string;
  service: string;
  status: string;
  department: string;
  requestedBy: string;
  assignedTo: string;
  priority: string;
}

// Create a schema
const requestSchema = new Schema<IRequest>({
  requestId: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  location: { type: String },
  service: { type: String },
  status: { type: String },
  department: { type: String },
  requestedBy: { type: String },
  assignedTo: { type: String },
  priority: { type: String },
});

// Create and export the model
const Request = model<IRequest>('Request', requestSchema);
export default Request;
