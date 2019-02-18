import { Component } from '@angular/core';

/**
 * Generated class for the SocialLinksComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'social-links',
  templateUrl: 'social-links.html'
})
export class SocialLinksComponent {

  text: string;
  links=[{href:"https://www.facebook.com/theincinformer/",icon:"fa-facebook"},
  {href:"https://twitter.com/incinformer/",icon:"fa-twitter-square"},
  {href:"https://www.linkedin.com/company/incinformer/",icon:"fa-linkedin"},
  {href:"https://www.instagram.com/incinformer/?hl=en",icon:"fa-instagram"}];
  constructor() {
    console.log('Hello SocialLinksComponent Component');
    this.text = 'Hello World';
  }

}
