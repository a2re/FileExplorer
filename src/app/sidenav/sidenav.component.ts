import { Component, OnInit } from '@angular/core';
import { DirectoryService } from "../directory.service";
import { TreeNode } from "angular2-tree-component/dist/models/tree-node.model";
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  isVisible = true;
  directories = [];
  options = {
    getChildren: (node:TreeNode) => {
      return this.directoryService.getSubDirectories(node.data.encodedPath).toPromise();
    }
  }
  constructor(private directoryService: DirectoryService) { }

  ngOnInit() {
    this.directoryService.getSubDirectories(null).subscribe(data => {
      this.directories = data;
    })
  }

  openDirectory(dirPath) {
    this.directoryService.getDirectoryContent(dirPath);
  }

}
