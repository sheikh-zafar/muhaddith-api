import { rootThreeLevelFilesandFolders } from '../../../../../three-level';

export default function handler(req, res) {
  const { name, nametwo } = req.query;
  const post = rootThreeLevelFilesandFolders.flatMap(
    (obj) => obj.name === name && obj.children.filter((j) => j.name === nametwo)
  );;

  res.status(200).json(post);
}
