import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { RootModule } from './root.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(RootModule)
  .catch(err => console.error(err));
