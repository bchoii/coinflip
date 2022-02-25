export {};

import { join } from 'path';
import { run } from '../../../../../main/src/cli';
import { fkill } from '../../../../../main/src/fkill';

export const main = async () => {
  await fkill(3000);

  await run(`npm run dev`, { cwd: join(__dirname, '..') });
};

if (require.main === module) {
  main();
}
