import { Component, OnInit, HostBinding } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
	
	@HostBinding('class') classes = 'row'

	public users: any = [];

	constructor(private usersService: UsersService) { }

	ngOnInit() {
		this.getUsers();
	}

	getUsers() {
		this.usersService.getUsers().subscribe(
			res => {
				this.users = res;
				console.log(this.users[0].name);
			},
			err => console.log(err)
		);
	}

	deleteUser(id: string){
		this.usersService.deleteUser(id).subscribe(
			res => {
				this.getUsers();
			},
			err => console.error(err)
		)
	}

	editUser(id: number){
		console.log(id);
	}
	

}
