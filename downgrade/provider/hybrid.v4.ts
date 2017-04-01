import { HybridHelper } from '../../hybrid-helper';
import { DocumentsService } from './documents-service.v4';

const moduleName = 'document';
HybridHelper.downgradeProvider(moduleName, 'DocumentsService', DocumentsService);
