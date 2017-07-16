import * as express from 'express';
import DirectoryCtrl from "./controllers/directory.controller";

export default function setAPI(app) {

    const router = express.Router();

    const directoryCtrl = new DirectoryCtrl();

    app.get('/api/directories/:sourcePath', (req: express.Request, res: express.Response) => {
        let sourcePath = req.params.sourcePath;
        let directories = directoryCtrl.getSubDirectories(sourcePath);
        res.status(200).json(directories);
    });

    app.get('/api/directoryContent/:sourcePath', (req: express.Request, res: express.Response) => {
        let sourcePath = req.params.sourcePath;
        let directories = directoryCtrl.getDirectoryContent(sourcePath);
        res.status(200).json(directories);
    });
    app.get('/api/users', (req, res) => {});

}
