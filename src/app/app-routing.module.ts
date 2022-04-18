import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { EnterIdComponent } from './enter-id/enter-id.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'enterid', component: EnterIdComponent},
  {path: 'chatroom', component: ChatRoomComponent},
  {path: 'adminpanel', component: AdminPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }