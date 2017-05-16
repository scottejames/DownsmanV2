import {Component,Input,Output,EventEmitter} from '@angular/core'
import {IEntry} from "../../data-services/entry.model";

@Component ({
    selector : 'entry-thumbnail',
    template : `
  <div [routerLink]="['/viewEntry',entry.id]" class= "well hoverwell thumbnail">
      <div> <h2>{{entry?.team?.name}} </h2></div>
      <div> Hike Class: {{entry?.class}} </div>

    </div>
`,
    styles: [`
  .pad-left { margin-left : 10px; }
  .well div {color: #bbb; }
  .thumbnail {min-height: 210px; }
  `]

})
export class EntryThumbnailComponent {
    @Input() entry : IEntry

    ngOnInit(){
        console.log(this.entry);
    }

}
