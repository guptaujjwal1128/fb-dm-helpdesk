import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FDHConversationsComponent } from './pages/conversations/conversations.component';
import { FDHHomeComponent } from './pages/home/home.component';
import { FDHLoginComponent } from './pages/login/login.component';
import { FDHSignupComponent } from './pages/signup/signup.component';
import { FDHConnectionsComponent } from './pages/connections/connections.component';

@NgModule({
  declarations: [
    FDHHomeComponent,
    FDHLoginComponent,
    FDHSignupComponent,
    FDHConnectionsComponent,
    FDHConversationsComponent,
  ],
  declarations: [],
  imports: [CommonModule],
  exports: [
    FDHHomeComponent,
    FDHLoginComponent,
    FDHSignupComponent,
    FDHConnectionsComponent,
    FDHConversationsComponent,
  ],
})
export class FbDmHelpdeskModule {}
