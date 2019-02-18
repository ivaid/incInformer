import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeadlinesProvider } from '../../providers/headlines/headlines';
import { Storage } from '@ionic/storage';
import { ArticlePage } from '../article/article';
/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  cat={
    id:"",
    name:""
  };
  newsList:Array<any>;
  refreshRate:number=100;
  title="";
  constructor(public navCtrl: NavController, public navParams: NavParams,public news:HeadlinesProvider,public store:Storage) {
    this.cat.id=this.navParams.data.id;
    this.cat.name=this.navParams.data.name;
  }

  ionViewDidLoad() {
    this.news.getNewsByCategory(this.cat);
    this.newsList=[];
    this.refreshNews();
  }
  refreshNews(){
    this.store.get(this.cat.name).then(n=>{
        this.newsList=[];
        var resp=JSON.parse(n);
        this.newsList=resp;
        this.title="The Sports Rumour - "+this.cat.name;
        document.title="The Sports Rumour - "+ this.cat.name;
        this.refreshRate=1000;
    });
    setTimeout(()=>{
      this.refreshNews();
    },this.refreshRate);
  }
  openArticle(e){
    this.navCtrl.push(ArticlePage,e);
  }

}
