import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PasingDataIntoAComponentComponent } from './pasing-data-into-a-component/pasing-data-into-a-component.component';
import { RespondingToComponenEventComponent } from './responding-to-componen-event/responding-to-componen-event.component';
import { UsingTwoWayDataBindingComponent } from './using-two-way-data-binding/using-two-way-data-binding.component';
import { AccessChildComponentsFromTemplateComponent } from './access-child-components-from-template/access-child-components-from-template.component';
import { ProjectionComponent } from './projection/projection.component';
import { NgstyleDirectiveComponent } from './ngstyle-directive/ngstyle-directive.component';
import { NgclassDirectiveComponent } from './ngclass-directive/ngclass-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    PasingDataIntoAComponentComponent,
    RespondingToComponenEventComponent,
    UsingTwoWayDataBindingComponent,
    AccessChildComponentsFromTemplateComponent,
    ProjectionComponent,
    NgstyleDirectiveComponent,
    NgclassDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
