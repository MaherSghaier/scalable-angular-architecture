/** Angular core dependencies */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: './features-modules/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'posts',
        loadChildren: './features-modules/posts/posts.module#PostsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
