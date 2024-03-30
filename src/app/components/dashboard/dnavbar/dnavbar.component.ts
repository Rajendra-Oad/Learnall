import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dnavbar',
  templateUrl: './dnavbar.component.html',
  styleUrl: './dnavbar.component.css'
})
export class DnavbarComponent implements OnInit{
  public user:any;
  constructor(public router:Router) {}

  ngOnInit(): void {
    if(!localStorage.getItem('email')) {
      this.router.navigate(['/login']);
    }
    this.user=localStorage.getItem('email');
    }

    logout(){
      this.router.navigate(['/login']);
      localStorage.clear();
    }


    openDropdown:boolean = false;
    toggleDropdown():void {
      this.openDropdown =!this.openDropdown;
    }

    stopOpen(e:Event):void {
      e.stopPropagation();
    }

}
