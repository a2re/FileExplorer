import { Component, OnInit } from '@angular/core';
import { DirectoryService } from "../directory.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  isVisible = true;
  directories = [];
  constructor(private directoryService: DirectoryService) { }

  ngOnInit() {
    this.directoryService.getSubDirectories("/").subscribe(data => {
      this.directories = data;
    })
  }

  showDirectory(dirPath) {
    
  }

}
