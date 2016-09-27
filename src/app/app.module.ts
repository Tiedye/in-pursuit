import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

@NgModule({
    imports: [
        routing
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    
}