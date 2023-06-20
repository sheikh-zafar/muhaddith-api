import { rootFilesAndFolders } from '../../../../../../dars-api';

export default function handler(req, res) {
    const { name, nametwo, namethree } = req.query;
    console.log(nametwo);
    console.log(name);
    console.log(namethree);
    const children = rootFilesAndFolders.filter(obj => {
        obj.name === name &&
            obj.children.flatMap(j => j.name === nametwo) &&
            obj.children.flatMap(p => p.children.map(g => g.name));
        console.log(
            obj.name === name &&
                obj.children.flatMap(j => j.name === nametwo) &&
                obj.children.flatMap(p => p.children.map(g => g.name))
        );
    });
    const filter = rootFilesAndFolders.filter(o => {
        if (o.name === name && o.children.map(j => j.name === nametwo)) {
            o.children.map(i => i.children.map(h => h.name === namethree));
        }
    });
    console.log(filter);

    res.status(200).json(filter);
}
