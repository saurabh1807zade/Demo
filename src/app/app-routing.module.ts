import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './Layout/default/default.component';
import { PostsComponent } from './Layout/dashboard/posts/posts.component';
import { DashboardComponent } from './Layout/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: DefaultComponent,

    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'posts', component: PostsComponent }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
