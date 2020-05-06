import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
import { RedditList } from '../interfaces/reddit';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList:RedditList;

  constructor(private apiService:RedditService) { }

  ngOnInit(): void {
    this.apiService.getPostList().subscribe(
      (data:RedditList) => this.postList = { ...data},
      error => console.error(error)
    );
  }

}
