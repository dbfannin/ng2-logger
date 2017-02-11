# NG2 Logger

[![npm version](https://badge.fury.io/js/%40ng-bootstrap%2Fng-bootstrap.svg)](https://badge.fury.io/js/%40ng-bootstrap%2Fng-bootstrap)
[![Build Status](https://travis-ci.org/ng-bootstrap/ng-bootstrap.svg?branch=master)](https://travis-ci.org/ng-bootstrap/ng-bootstrap)
[![devDependency Status](https://david-dm.org/ng-bootstrap/ng-bootstrap/dev-status.svg?branch=master)](https://david-dm.org/ng-bootstrap/ng-bootstrap#info=devDependencies)

NG2 Logger is a simple logging module for angular 2. It allows "pretty print" to the console, as well as allowing log messages to be POSTed to a URL for server-side logging.



## Installation
```shell
npm install --save @ng2-logger
```

Once installed you need to import our main module:
```js
import { LoggerModule } from 'ng2-logger';
```

The only remaining part is to list the imported module in your application module, passing in a config to intialize the logger.

```js
@NgModule({
  declarations: [AppComponent, ...],
  imports: [LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: 'DEBUG'}), ...],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

## Usage

To use the Logger, you will need import it locally, then call one of the logging functions

```js
import { Component } from '@angular/core';
import { NG2Logger } from 'ng2-logger';

@Component({
  selector: 'your-component',
  templateUrl: './your.component.html',
  styleUrls: ['your.component.less']
})
export class YourComponent {
    constructor(private logger: NG2Logger) {
        this.logger.debug('Your log message goes here');
    };
}

```


## Config Options

 * serverLoggingUrl - URL to POST logs
 * level: The log level. The app will only log message for that level or higher
```
TRACE|DEBUG|INFO|LOG|WARN|ERROR
```


## Server Side Logging

If serverLogginUrl exists, NG2 Logger will attempt to POST that log to the server.

Payload Example
```{level: 'DEBUG', message: 'Your log message goes here'}```
