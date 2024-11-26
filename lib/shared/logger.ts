interface ILogger {
  info: (message: string, metadata: any) => void;
  debug: (message: string, metadata: any) => void;
  warn: (message: string, metadata: any) => void;
  error: (message: string, metadata: any) => void;
}

export function getLogger(): ILogger {
  return getConsoleLogger();
}

function getConsoleLogger(): ILogger {
  return {
    info: (message: string, metadata: any) => {
      console.info(message, metadata);
    },
    debug: (message: string, metadata: any) => {
      console.debug(message, metadata);
    },
    warn: (message: string, metadata: any) => {
      console.warn(message, metadata);
    },
    error: (message: string, metadata: any) => {
      console.error(message, metadata);
    },
  };
}
