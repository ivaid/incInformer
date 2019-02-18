import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { WebApiProvider } from '../web-api/web-api';
@Injectable()
export class CategoryProvider {
  updatedOn=0;
  constructor(public store:Storage,public webapi:WebApiProvider) {
    var e=this.webapi.post({module:"category"});
    e.subscribe(r=>{
      var resp=JSON.parse(JSON.stringify(r));
      if('data' in resp){
        this.store.set("category",JSON.stringify(resp.data));
        this.updatedOn=new Date().getTime();
      }
    });
  }
  update(){
    if(this.updatedOn!=0){
      var e=this.webapi.post({module:"category"});
      e.subscribe(r=>{
        var resp=JSON.parse(JSON.stringify(r));
        if('data' in resp){
          this.store.set("category",JSON.stringify(resp.data));
          this.updatedOn=new Date().getTime();
        }
      });
    }
  }

}
