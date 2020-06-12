import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Counter App';
  count: number = 0;

  handleIncrease = () => {
    //assignment hint start
    // if(this.count==10)
    // {
    //   this.count=this.count+15;
    //asiignment hint end }
    this.count=this.count+1;
  }
  handleDecrease = () =>{
    this.count=this.count-1;
  }
  handleReset =() =>{
    this.count=0;
  }
}
