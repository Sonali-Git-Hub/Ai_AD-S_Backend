import ErrorOccurrence from '../models/ErrorOccurrence.js';
import Incident from '../models/Incident.js';

console.log('✅ ErrorOccurrence model schema loaded successfully.');
console.log('Incident fields:', Object.keys(Incident.schema.paths));
console.log('ErrorOccurrence fields:', Object.keys(ErrorOccurrence.schema.paths));
console.log('✅ All updated models loaded and compiled without errors.');
process.exit(0);
