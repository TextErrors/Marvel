import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  @Input() storiesData: any;
  name:any;
  constructor() {
  }
  ngOnInit() {
    this.name = this.storiesData;
    console.table(this.name);
  }

}
