import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() {
  //  this.created_at = new Date();
  }

  ngOnInit() {
  }

  loveIt(){
    this.loveIts = this.loveIts + 1;
    // test si sa marche la fonction
    //console.log(this.loveIts);
  }
  dontLoveIt(){
    this.loveIts = this.loveIts - 1;
    // test si sa marche la fonction
    //console.log(this.loveIts);
  }

}
