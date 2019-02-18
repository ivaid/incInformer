import { Component } from '@angular/core';
import { Meta}from '@angular/platform-browser';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebApiProvider } from '../../providers/web-api/web-api';

/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {
  articleID:number;
  article={
    body:"",
    email: "",
    id: "",
    layout: "",
    name: "",
    next:{},
    prev:{},
    summary:"",
    thumbnail:"",
    title:"",
    updated_on:"",
    url_title:"",
    ago:""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:WebApiProvider,public meta:Meta) {
    console.log(this.navParams);
    this.articleID=this.navParams.data.id;
    this.getArticle();
  }
  getArticle(){
    var r=this.http.post({module:'article',article:this.articleID});
    r.subscribe(res=>{
      var resp=JSON.parse(JSON.stringify(res));
      this.article.body=resp.body;
      this.article.email=resp.email;
      this.article.id=resp.id;
      this.article.layout=resp.layout;
      this.article.name=resp.name;
      this.article.next=resp.next;
      this.article.prev=resp.prev;
      this.article.summary=resp.summary;
      this.article.thumbnail=resp.thumbnail;
      this.article.title=resp.title;
      this.article.updated_on=resp.updated_on;
      this.article.url_title=resp.url;
      this.article.ago=resp.ago;
    },err=>{
      console.log(err);
    },
    ()=>{
      this.meta.addTag({ name: 'robots', content: 'index,follow' });
      this.meta.addTag({ itemprop:'name', content: this.article.title }); 
      this.meta.addTag({ name: 'description', content: this.article.summary }); 
      this.meta.addTag({ itemprop: 'description', content: this.article.summary }); 
      this.meta.addTag({ itemprop: 'image', content: "https://www.thesportsrumour.com/"+this.article.thumbnail }); 
      console.log(document.querySelectorAll("meta"));
      document.title="The Sports Rumour - "+this.article.title;
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlePage');
  }

}
