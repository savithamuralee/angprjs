import { Component } from '@angular/core';
import { timeout } from 'q';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Program';
  myname = 'Rajesh';
  location:string= 'Ankamaly';
  status:boolean = false;
  myroll = "00000"
  getstatus()
  {
   
    return this.status;
   
  }
constructor(){setTimeout(() => {
  this.status = true;
}, 10000);}


clickme=()=>{
  this.status = false;
}
onSubmit(form:NgForm)
{
  console.log(form.value.getName);
  this.myname = form.value.getName;
  this.myroll = form.value.getRoll;
  
}

}
