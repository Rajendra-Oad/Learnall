import { Component ,OnInit} from '@angular/core';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  public userData:any;
  constructor(public api:ApiService){}

  ngOnInit(): void {
    this.users();
  }

  users(){
    this.api.getUsers().subscribe((res:any)=>{
      console.log(res);
      this.userData=res.data;
    })
  }

}
