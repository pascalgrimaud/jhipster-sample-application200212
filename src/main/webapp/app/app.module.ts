import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterSampleApplication200212SharedModule } from 'app/shared/shared.module';
import { JhipsterSampleApplication200212CoreModule } from 'app/core/core.module';
import { JhipsterSampleApplication200212AppRoutingModule } from './app-routing.module';
import { JhipsterSampleApplication200212HomeModule } from './home/home.module';
import { JhipsterSampleApplication200212EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterSampleApplication200212SharedModule,
    JhipsterSampleApplication200212CoreModule,
    JhipsterSampleApplication200212HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterSampleApplication200212EntityModule,
    JhipsterSampleApplication200212AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipsterSampleApplication200212AppModule {}
