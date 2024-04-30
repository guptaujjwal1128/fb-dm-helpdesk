import { Routes } from '@angular/router';

import { FDHConnectionsComponent } from '../fb-dm-helpdesk/pages/connections/connections.component';
import { FDHConversationsComponent } from '../fb-dm-helpdesk/pages/conversations/conversations.component';
import { FDHHomeComponent } from '../fb-dm-helpdesk/pages/home/home.component';
import { FDHLoginComponent } from '../fb-dm-helpdesk/pages/login/login.component';
import { FDHSignupComponent } from '../fb-dm-helpdesk/pages/signup/signup.component';

export const routes: Routes = [
  { path: 'home', component: FDHHomeComponent },
  { path: 'login', component: FDHLoginComponent },
  { path: 'signup', component: FDHSignupComponent },
  { path: 'connections', component: FDHConnectionsComponent },
  { path: 'conversations', component: FDHConversationsComponent },
];
