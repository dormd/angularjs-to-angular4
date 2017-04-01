import { HybridHelper } from '../hybrid-helper';
import { DocumentComponent } from './document-component.v4';

const moduleName = 'document';
angular.module(moduleName, [...]);

HybridHelper.downgradeComponent(moduleName, 'document', DocumentComponent, {
     inputs: ['name', 'size', 'numOfPages', 'content'],
     outputs: ['opened', 'contentChanged', 'closed']
});
