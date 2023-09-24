import { rootLevelOneFilesAndFolders } from '../../../one-level';

export default function handler(req, res) {
  res.status(200).json(rootLevelOneFilesAndFolders);
}
