import { rootThreeLevelFilesandFolders } from '../../../../../../three-level';

export default function handler(req, res) {
  const { name, nametwo, namethree } = req.query;
  const post = rootThreeLevelFilesandFolders.flatMap(
    (obj) =>
      obj.name === name &&
      obj.children
        .filter((j) => j.name === nametwo)
        .map((c) => c.children.filter((h) => h.name === namethree))
  );

  res.status(200).json(post);
}
