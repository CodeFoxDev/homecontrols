interface envEntries {
  PROD: boolean;
  PORT: number;
  HOST: string;
}

interface envParseOptions {
  /** @default true */
  parseBoolean: boolean;
  /** @default true */
  parseInt: boolean;
}

export function load(options?: envParseOptions): envEntries;
export function parse(env: string, options?: envParseOptions): envEntries;

export const env: envEntries;
export default env;
