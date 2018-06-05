import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PostsRoutingModule } from './posts-routing.module';

import { PipesModule } from '@shared/pipes';

import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostFormComponent } from './components/post-form/post-form.component';

import { PostsApiClient } from './posts-api-client.service';

@NgModule({
  imports: [CommonModule, PostsRoutingModule, ReactiveFormsModule, PipesModule],
  declarations: [PostsListComponent, PostDetailsComponent, PostFormComponent],
  providers: [PostsApiClient]
})
export class PostsModule {}
