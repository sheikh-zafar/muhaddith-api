import { rootTwoLevelFilesandFolders } from '../../../../../two-level';

export default function handler(req, res) {
  const { name, nametwo } = req.query;
  const post = rootTwoLevelFilesandFolders.flatMap(
    (obj) => obj.name === name && obj.children.filter((j) => j.name === nametwo)
  );;

  res.status(200).json(post);
}
