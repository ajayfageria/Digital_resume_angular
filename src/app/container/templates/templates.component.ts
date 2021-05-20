import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, takeWhile } from 'rxjs/operators';
import { Utility } from 'src/assets/utility';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnDestroy  {
  templates = Utility.Templates;
  resumeId: any;
  isAlive = true;
  constructor(private route: ActivatedRoute) { 
    const id$ = this.route.params.pipe(takeWhile(() => this.isAlive)
    , map(data => data.id));
  id$.subscribe(data => {
    this.resumeId = data;
  });
}
ngOnDestroy() {
  this.isAlive = false;
}
  }

 



