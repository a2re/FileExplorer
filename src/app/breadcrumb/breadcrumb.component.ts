import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  directories: Array<any>;

  constructor(private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let encodedPath = params['path'];
      if(!encodedPath) return;
      let path = atob(encodedPath);
      let directories = path.split("/");
      this.directories = directories.map((p, i) => {
        let fullPath = (i === 0) ? "/" : directories.slice(0, i + 1).join("/");
        return {
          name: (i === 0) ? "Root directory" : p,
          fullPath: fullPath,
          encodedPath: btoa(fullPath)
        }
      });
    });
  }

}
