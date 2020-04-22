import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user'
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  @HostBinding('class') classes = 'row'

  user: User = {
    id:0,
    name:'',
    lastname: '',
    image:'',
    created_at: new Date()
  }; 

  constructor(private usersService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    console.log(params);
    if(params.id){
      this.usersService.getUser(params.id).subscribe(
        res=>{
          this.user = res;
        },
        err => {
          console.log(err);
        }
      )
    }

  }

  addUser() {
    this.usersService.saveUser(this.user).
    subscribe(
      res=> {
        console.log(res);
        this.router.navigate(['/users']);
      },
      err=> console.log(err)
    );
  }

}
