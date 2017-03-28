import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';


import {NG2Logger, LoggerConfig} from './logger.service';

@NgModule({
  imports: [
    CommonModule,
  ],

  providers: [NG2Logger],
})

export class LoggerModule {
  static forRoot(config: LoggerConfig | null | undefined): ModuleWithProviders {
    return {
      ngModule: LoggerModule,
      providers: [
        {provide: LoggerConfig, useValue: config || {}},
      ]
    };
  }
}
