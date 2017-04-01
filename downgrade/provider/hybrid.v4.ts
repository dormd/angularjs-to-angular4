import { HybridHelper } from './hybrid-helper.v4';
import { DocumentsService } from './documents-service.v4';

const moduleName = 'document';
HybridHelper.downgradeProvider(moduleName, 'DocumentsService', DocumentsService);
