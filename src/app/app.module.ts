import { APP_ID, Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { isPlatformBrowser } from '@angular/common';

@NgModule({
    imports: [BrowserModule.withServerTransition({appId: 'universal-playground'})],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(@Inject(PLATFORM_ID) private platformId: Object,
                @Inject(APP_ID) private appId: string) {
        const platform = isPlatformBrowser(platformId) ? 'on the server' : 'in the browser';
    }
}
