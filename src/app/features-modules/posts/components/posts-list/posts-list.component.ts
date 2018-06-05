import { Component, OnInit } from '@angular/core';
import { PostsApiClient } from '../../posts-api-client.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  public posts: any = [];

  constructor(private postsApiClient: PostsApiClient) {}

  ngOnInit() {
    this.getPosts();
  }

  public getPosts() {
    this.postsApiClient.getAll().subscribe(posts => (this.posts = posts));
  }
}
