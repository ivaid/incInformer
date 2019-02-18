import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebApiProvider {
  api={
    URL:"http://www.thesportsrumour.com/api/",
    creds:"8f20ce186fb98c4fa603a98720016c16"
  };
  constructor(public http: HttpClient) {
    console.log(this.api);
  }
  post(req){
    var frmData=new FormData();
    Object.keys(req).forEach(key=>{frmData.append(key,req[key]);});
    return this.http.post(
      this.api.URL,frmData,{
      headers:new HttpHeaders(
        {apikey:this.api.creds}
        )
      }
    );
  }
}
