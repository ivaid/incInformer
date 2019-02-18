import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { LocalAdsComponent } from './local-ads/local-ads';
import { SocialLinksComponent } from './social-links/social-links';
import { NewsSliderComponent } from './news-slider/news-slider';
@NgModule({
	declarations: [
		HeaderComponent,
	LocalAdsComponent,
    SocialLinksComponent,
    NewsSliderComponent
	],
	imports: [],
	exports: [HeaderComponent,
    LocalAdsComponent,
    SocialLinksComponent,
    NewsSliderComponent]
})
export class ComponentsModule {}
