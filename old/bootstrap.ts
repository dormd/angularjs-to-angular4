import { upgradeAdapter } from './upgrade-adapter.old.ts';

upgradeAdapter.bootstrap(document.body, ['myApp'], { strictDi: true });
