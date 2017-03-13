import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToggleButtonModule, 
         CalendarModule, 
         InputTextareaModule, 
         AutoCompleteModule,
         InputTextModule,
         SelectButtonModule,
         MessagesModule,
         GrowlModule } from 'primeng/primeng';
import { SHARED_PROVIDERS } from './shared/shared';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PftaDnccComponent } from './pfta-dncc/pfta-dncc.component';
import { PftaDaccComponent } from './pfta-dacc/pfta-dacc.component';
import { PftaDftaDccComponent } from './pfta-dfta-dcc/pfta-dfta-dcc.component';
import { PaDftaNsComponent } from './pa-dfta-ns/pa-dfta-ns.component';
import { NumbersOnlyDirective } from './shared/directives/numbers-only.directive';
import { PaDftaSvdComponent } from './pa-dfta-svd/pa-dfta-svd.component';
import { PaDaComponent } from './pa-da/pa-da.component';
import { JudgementDeniedComponent } from './judgement-denied/judgement-denied.component';
import { JudgementGrantedComponent } from './judgement-granted/judgement-granted.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PftaDnccComponent,
    PftaDaccComponent,
    PftaDftaDccComponent,
    PaDftaNsComponent,
    NumbersOnlyDirective,
    PaDftaSvdComponent,
    PaDaComponent,
    JudgementDeniedComponent,
    JudgementGrantedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToggleButtonModule,
    CalendarModule,
    InputTextareaModule,
    AutoCompleteModule,
    InputTextModule,
    SelectButtonModule,
    MessagesModule,
    GrowlModule
  ],
  providers: [SHARED_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
