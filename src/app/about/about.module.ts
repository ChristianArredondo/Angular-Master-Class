import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { MaterialModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild([
      { path: '', component: AboutComponent }
    ])
  ]
})
export class AboutModule { }