import { rootFilesAndFolders } from '../../../dars-api';

export default function handler(req, res) {
    res.status(200).json(rootFilesAndFolders);
}
