import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the NewsSliderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'news-slider',
  templateUrl: 'news-slider.html'
})
export class NewsSliderComponent {
  refreshRate=1000;
  newsSlides=[{
    ago: "",
    category: "",
    email: "",
    id: "",
    name: "",
    thumbnail: "",
    title: "",
    url_title: ""
  },{
    ago: "",
    category: "",
    email: "",
    id: "",
    name: "",
    thumbnail: "",
    title: "",
    url_title: ""
  },{
    ago: "",
    category: "",
    email: "",
    id: "",
    name: "",
    thumbnail: "",
    title: "",
    url_title: ""
  }];
  constructor(public store:Storage) {
   this.updateNews();
  }
  updateNews(){
    this.store.get("latest-news").then(n=>{
      if(n===null){}else{
      var resp=JSON.parse(n);
        if(typeof resp===null){
        }else{
          this.newsSlides=[resp[0],resp[1],resp[2]];
          this.refreshRate=60000;
        }
      }
    });
    setTimeout(()=>{
      this.updateNews();
    },this.refreshRate);
  }
}
