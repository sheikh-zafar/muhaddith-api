import { rootTwoLevelFilesandFolders } from '../../../../two-level';

export default function handler(req, res) {
  const { name } = req.query;
  const post = rootTwoLevelFilesandFolders.filter((obj) => obj.name === name);

  res.status(200).json(post);
}
