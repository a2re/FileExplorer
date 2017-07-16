import { Component, OnInit } from '@angular/core';
import { DirectoryService } from "../directory.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  content: any;

  constructor(private route: ActivatedRoute, private router: Router, private directoryService: DirectoryService) { }

  ngOnInit() {
    let path = this.route.params.subscribe(params => {
      let path = params['path'];
      console.log(path)
      this.directoryService.getDirectoryContent(path).subscribe(data => {
        this.content = data;
      });
    });
  }

  openDirectory(directory) {
    this.router.navigate(["/directory", directory.encodedPath])
  }

}
