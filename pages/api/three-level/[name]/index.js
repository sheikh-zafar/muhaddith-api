import { rootThreeLevelFilesandFolders } from '../../../../three-level';

export default function handler(req, res) {
  const { name } = req.query;
  const post = rootThreeLevelFilesandFolders.filter((obj) => obj.name === name);

  res.status(200).json(post);
}
