import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Modulo1 } from './Modulo1/Modulo1.module';

platformBrowserDynamic()
  .bootstrapModule(Modulo1)
  .catch((err) => console.error(err));
