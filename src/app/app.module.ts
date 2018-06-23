import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule , HttpClient } from '@angular/common/http';
import { TranslateModule , TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransferHttpCacheModule } from '@nguniversal/common';




import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { OrgComponent } from './org/org.component';
import { BlogComponent } from './blog/blog.component';
import { SlideComponent } from './home/slide/slide.component';
import { FooterComponent } from './footer/footer.component';
import { BarxComponent } from './navbar/barx/barx.component';


export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent, 
    SlideComponent,
    AboutComponent,
    ServicesComponent,
    BarxComponent,
    PortfolioComponent,
    ContactComponent,
    OrgComponent,
    BlogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'foundation', component: OrgComponent },
      { path: 'services', component: ServicesComponent },
      { path: '**', redirectTo: '/home', pathMatch: 'full' },// ruta redireccionada

      /*{ path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
    */]),
    TransferHttpCacheModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
