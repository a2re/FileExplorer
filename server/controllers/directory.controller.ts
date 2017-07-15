import Directory from "../models/directory.model";

export default class DirectoryCtrl {
  model = new Directory();

  getSubDirectories = (sourcePath: string) => {
    return this.model.getSubDirectories(sourcePath || "/");
  };

}
