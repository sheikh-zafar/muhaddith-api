import { rootFilesAndFolders } from '../../../../../../dars-api';

export default function handler(req, res) {
  const { name, nametwo, namethree } = req.query;

  const children = rootFilesAndFolders.flatMap(
    (obj) =>
      obj.name === name &&
      obj.children.filter((j) => j.name === nametwo).map((c) => c.children)
  );

  res.status(200).json(children);
}
