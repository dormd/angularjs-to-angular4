import { FactoryProvider } from '@angular/core';

export interface IComponentUpgradeOptions {
    inputs?: string[],
    outputs?: string[]
}

export interface IHybridHelper {
    downgradeComponent(moduleName: string, componentSelector: string, componentClass: any, options?: IComponentUpgradeOptions): IHybridHelper,
    downgradeProvider(moduleName: string, providerName: string, providerClass: any): IHybridHelper,
    buildProviderForUpgrade(ng1Name: string, ng2Name?: string): FactoryProvider
}
