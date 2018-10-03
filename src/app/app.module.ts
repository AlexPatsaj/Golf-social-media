import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthexModule } from './auth/authex/authex.module';
import { VerifyComponent } from './verify/verify.component';
// added by alexander
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardContentComponent } from './dashboard/dashboard-content/dashboard-content.component';
import { DashboardMenuComponent } from './dashboard/dashboard-menu/dashboard-menu.component';
import { DashboardSidebarComponent } from './dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { DashContPlaylistComponent } from './dashboard/dashboard-content/dash-cont-playlist/dash-cont-playlist.component';
import { DashContFriendsComponent } from './dashboard/dashboard-content/dash-cont-friends/dash-cont-friends.component';
import { DashContProgressComponent } from './dashboard/dashboard-content/dash-cont-progress/dash-cont-progress.component';
import { DashContNotificationsComponent } from './dashboard/dashboard-content/dash-cont-notifications/dash-cont-notifications.component';
import { DashContPromotionsComponent } from './dashboard/dashboard-content/dash-cont-promotions/dash-cont-promotions.component';
import { DashContUpdatesComponent } from './dashboard/dashboard-content/dash-cont-updates/dash-cont-updates.component';
import { VlogComponent } from "./vlog/vlog.component";

@NgModule({
  declarations: [
    AppComponent,
    VerifyComponent,
    // added by alexander
    DashboardComponent,
    DashboardContentComponent,
    DashboardMenuComponent,
    DashboardSidebarComponent,
    DashContPlaylistComponent,
    DashContFriendsComponent,
    DashContProgressComponent,
    DashContNotificationsComponent,
    DashContPromotionsComponent,
    DashContUpdatesComponent,
    VlogComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    AuthexModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
