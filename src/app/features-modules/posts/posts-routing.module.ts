import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@shared/guards/auth.guard';

import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

const routes: Routes = [
  { path: '', component: PostsListComponent, canActivate: [AuthGuard] },
  { path: 'add', component: PostFormComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: PostFormComponent, canActivate: [AuthGuard] },
  { path: ':id', component: PostDetailsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
