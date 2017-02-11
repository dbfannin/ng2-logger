
import {ModuleWithProviders} from "@angular/core";
interface NG2Logger {
  trace(message: string): void;
  debug(message: string): void;
  info(message: string): void;
  log(message: string): void;
  warn(message: string): void;
  error(message: string): void;
}

interface LoggerConfig {
  level: string;
  serverLoggingUrl: string;
}

/**
 * The module for ng2 logger.
 * @stable
 */
export declare class LoggerModule {
  static forRoot(config: LoggerConfig) : ModuleWithProviders
}