import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeadlinesProvider } from '../../providers/headlines/headlines';
import { Storage } from '@ionic/storage';
import { ArticlePage } from '../article/article';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  newsList:Array<any>;
  refreshRate:number=1000;
  title="";
  constructor(public navCtrl: NavController,public headline:HeadlinesProvider,public store:Storage) {
    this.updateNews();
  }
  updateNews(){
    this.store.get("latest-news").then(n=>{
      var resp=JSON.parse(n);
      this.newsList=[];
      this.newsList=resp;
      this.title="The Sports Rumour";
      document.title="The Sports Rumour";
      if(resp!==null){
        this.refreshRate=60000;
      }
    });
    setTimeout(()=>{
      this.updateNews();
    },this.refreshRate);
  }
  openArticle(e){
    this.navCtrl.push(ArticlePage,e);
  }
}
