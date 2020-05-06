import { Component, OnInit, Input } from '@angular/core';
import { Child } from '../interfaces/reddit';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postData:Child

  constructor() { }

  ngOnInit(): void {
  }

  getHref():string {
    return `http://www.reddit.com${this.postData?.data.permalink}`;
  }

}
