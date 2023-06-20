import { rootFilesAndFolders } from '../../../../dars-api';

export default function handler(req, res) {
    const { name } = req.query;
    const post = rootFilesAndFolders.filter(obj => obj.name === name);
    
    res.status(200).json(post);
}
