import { rootLevelOneFilesAndFolders } from '../../../../one-level';

export default function handler(req, res) {
  const { name } = req.query;
  const post = rootLevelOneFilesAndFolders.filter((obj) => obj.name === name);

  res.status(200).json(post);
}
