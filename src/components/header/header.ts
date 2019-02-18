import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
  menuItem:Array<any>;
  text: string;
  categoryReload=1000;
  date:any;
  w=0;
  h=0;
  constructor(public store:Storage) {
    this.date=new Date();
    this.menuItem=[];  
    this.readCategories();
  }
  readCategories(){
    this.store.get("category").then(r=>{
      if(r===null){
      }else{
        this.menuItem=JSON.parse(r);
        console.log("Menu Loaded");
        this.categoryReload=600000;
      }      
    });

    setTimeout(()=>{
      this.readCategories();
    },this.categoryReload);
  }
  onResize(e){
    this.w=window.innerWidth;
    this.h=window.innerHeight;
    console.log(e);
  }
}
