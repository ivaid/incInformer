import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WebApiProvider } from '../providers/web-api/web-api';
import { CategoryProvider } from '../providers/category/category';
import { HeadlinesProvider } from '../providers/headlines/headlines';
import { ArticlePage } from '../pages/article/article';
import { SocialLinksComponent } from '../components/social-links/social-links'
// import { ComponentsModule } from '../components/components.module';


import { HeaderComponent } from '../components/header/header';
import { LocalAdsComponent } from '../components/local-ads/local-ads';
import { CategoryPage } from '../pages/category/category';
import { NewsSliderComponent } from '../components/news-slider/news-slider';
// import { NewsProvider } from '../providers/news/news';
// import { WebsitemenuProvider } from '../providers/websitemenu/websitemenu';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ArticlePage,
    CategoryPage,
    HeaderComponent,
    LocalAdsComponent,
    NewsSliderComponent,
    SocialLinksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{},{
      links:[
        {component: HomePage, name: 'Home', segment: ''},
        { component: CategoryPage, name: 'category', segment: 'category/:id/:name' },
        { component: ArticlePage,name: 'article',segment:'article/:url_date/:url_title/:id/post'}
      ]
    }),
    IonicStorageModule.forRoot({
      name: 'incInformer',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    EditorModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArticlePage,
    CategoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebApiProvider,
    CategoryProvider,
    HeadlinesProvider,
    //NewsProvider,
    //WebsitemenuProvider
  ]
})
export class AppModule {}
