import { Component,Input } from '@angular/core';

/**
 * Generated class for the LocalAdsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'local-ads',
  templateUrl: 'local-ads.html'
})
export class LocalAdsComponent {
  img={
    src:"/assets/imgs/local-ads/"
  };
  ts=new Date().getTime();
  ads={
    s160x600:[{
      img:"pestveda.jpg",
      link:"https://www.pestveda.com/promotions/termite-control?incInfromer="+ this.ts
    },
    {
      img:"surveillancekart.jpg",
      link:"https://www.surveillancekart.com/cctv-camera?incInfromer="+ this.ts
    }
    ],
    s300x250:[{
      img:"pestveda.jpg",
      link:"https://www.pestveda.com/promotions/termite-control?incInfromer="+ this.ts
    },
    {
      img:"pestveda.png",
      link:"https://www.pestveda.com/promotions/termite-control?incInfromer="+ this.ts
    },{
      img:"surveillancekart.jpg",
      link:"https://www.surveillancekart.com/cctv-camera?incInfromer="+ this.ts
    },{
      img:"surveillancekart2.jpg",
      link:"https://www.surveillancekart.com/cctv-camera?incInfromer="+ this.ts
    },{
      img:"surveillancekart3.jpg",
      link:"https://www.surveillancekart.com/cctv-camera?incInfromer="+ this.ts
    }
    ],
    s728x90:[{
      img:"pestveda.jpg",
      link:"https://www.pestveda.com/promotions/termite-control?incInfromer="+ this.ts
    },{
      img:"pestveda001.jpg",
      link:"https://www.pestveda.com/promotions/termite-control?incInfromer="+ this.ts
    },{
      img:"pestveda002.jpg",
      link:"https://www.pestveda.com/promotions/termite-control?incInfromer="+ this.ts
    },{
      img:"surveillancekart001.jpg",
      link:"https://www.surveillancekart.com/cctv-camera?incInfromer="+ this.ts
    },{
      img:"surveillancekart002.jpg",
      link:"https://www.surveillancekart.com/cctv-camera?incInfromer="+ this.ts
    }]
  };
  selectedAd={img:"",link:""};
  @Input('size') size;
  constructor() {
    //console.log(this.size);
    //console.log(this.getRandom(0,5));
  }
  ngAfterViewInit(){
    var adList=this.ads["s"+this.size];
    var n=this.getRandom(0,adList.length);
    this.selectedAd=adList[n];
    //console.log(this.selectedAd);
    
  }
  getRandom(min , max) {
    var r=Math.random();
    r=(r==1)?0:r;
    return Math.floor(r * (max-min) + min) ;
} 

}
