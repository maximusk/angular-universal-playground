import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';

@NgModule({
    imports: [
        AppModule,
        ServerModule
    ],
    providers: [
        // Add universal-only providers here
    ],
    bootstrap: [AppComponent],
})
export class AppServerModule {
}