import type { Options } from '@wdio/types';

const headless = process.env.HEADLESS !== 'false';

export const config: Options.Testrunner = {
  runner: 'local',
  specs: ['./test/e2e/**/*.e2e.ts'],
  maxInstances: 1,
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': headless ? { args: ['--headless=new', '--window-size=1400,1000'] } : {}
  }],
  logLevel: 'info',
  framework: 'mocha',
  mochaOpts: { ui: 'bdd', timeout: 120000 },
  reporters: ['spec'],
  services: ['devtools'], // Chrome DevTools
  baseUrl: 'https://<PUT-CALCULATOR-URL-HERE>',
  waitforTimeout: 10000,
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: { transpileOnly: true }
  }
};
