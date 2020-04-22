import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component'
import { EditUserComponent } from './components/edit-user/edit-user.component'
import { AddUserComponent } from './components/add-user/add-user.component'

const routes: Routes = [
	{
		path:'',
		redirectTo:'/users',
		pathMatch:'full'
	},
	{
		path:'users',
		component:ListUsersComponent
	},
	{
		path:'users/add',
		component:AddUserComponent
	},
	{
		path:'users/edit/:id',
		component:AddUserComponent
	}
];

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
})
export class AppRoutingModule {}