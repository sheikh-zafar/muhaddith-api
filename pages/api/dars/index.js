import { darsApi } from '../../../dars-api';

export default function handler(req, res) {
  res.status(200).json(darsApi);
}
