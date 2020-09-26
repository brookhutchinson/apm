// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed }                    from '@angular/core/testing';
import { BrowserDynamicTestingModule }   from '@angular/platform-browser-dynamic/testing';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// initialize the Angular testing environment
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// find tests
const context = require.context('./', true, /\.spec\.ts$/);

// load modules
context.keys().map(context);
