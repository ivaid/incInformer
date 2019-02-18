import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Storage } from '@ionic/storage';
import { CategoryProvider } from '../providers/category/category';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  menuItem: Array<{title: string,URL: any}>;
  categoryReload=1000;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public store:Storage,public category:CategoryProvider) {
    this.store.clear();
    this.initializeApp();
    this.readCategories();
    // used for an example of ngFor and navigation
    this.menuItem = [
      { title: 'Home', URL:'/#' },
      { title: 'List', URL:'/' }
    ];
    //Auto reload categories
  }
  readCategories(){
    //console.log("Category Read called");
    this.store.get("category").then(r=>{
      if(r===null){
        this.categoryReload=1000;
      }else{
        this.menuItem=JSON.parse(r);
        this.categoryReload=60000;
      }
      if(this.category.updatedOn + 600000 < new Date().getTime()){
        this.category.update();
      }
      
    });
    //Creating an autorefresh
    setTimeout(()=>{
      this.readCategories();
    },this.categoryReload);
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    document.location.href="/#"+page.URL;
  }
  isSelected(page){
    if(document.location.hash=="#"+page.URL){
      document.title=page.title;
      return true;
    }else{
      return false;
    }
  }
}
