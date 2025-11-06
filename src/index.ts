import { functionserver } from './serverfolder/server.ts';

functionserver.listen(3333, () => {
  console.log('  running on port 3333');
});
