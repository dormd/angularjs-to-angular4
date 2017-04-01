import { HybridHelper } from '../../hybrid-helper';

const myServices = [
  HybridHelper.buildProviderForUpgrade('DocumentConverter')
];

@NgModule({
  // services
  providers: [
    ...myServices
  ],  
//  …
});
