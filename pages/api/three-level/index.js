import { rootThreeLevelFilesandFolders } from '../../../three-level';

export default function handler(req, res) {

  res.status(200).json(rootThreeLevelFilesandFolders);
}
