import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { WebApiProvider } from '../web-api/web-api';
/*
  Generated class for the HeadlinesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HeadlinesProvider {
  latest: Array < any > ;
  updatedOn = 0;
  refreshRate: number = 10000;
  constructor(public store: Storage, public webapi: WebApiProvider) {
    this.latest = [];
    this.update();
  }
  update() {
    var request = {
      module: 'latest',
      tsLast: this.updatedOn
    };
    var n = this.webapi.post(request);
    n.subscribe(r => {
      var resp = JSON.parse(JSON.stringify(r));
      this.store.set("latest-news", JSON.stringify(resp.data)).then(() => {});
    }, err => {
      console.log(err);
    }, () => {
      setTimeout(() => {
        this.update();
      }, this.refreshRate);
    });
  }
  getNewsByCategory(cat){
      var request = {
        module: 'latest',
        tsLast: this.updatedOn,
        category:cat.id
      };
      var n = this.webapi.post(request);
      n.subscribe(r => {
        var resp = JSON.parse(JSON.stringify(r));
        this.store.set(cat.name, JSON.stringify(resp.data)).then(() => {});
      }, err => {
        console.log(err);
      }, () => {
        setTimeout(() => {
          this.getNewsByCategory(cat);
        }, this.refreshRate);
      });
    }
  }

