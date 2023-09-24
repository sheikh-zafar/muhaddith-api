import { rootTwoLevelFilesandFolders } from '../../../two-level';

export default function handler(req, res) {
  res.status(200).json(rootTwoLevelFilesandFolders);
}
