export interface entries {
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

export function load(options?: envParseOptions): entries;
export function parse(env: string, options?: envParseOptions): entries;

export const env: entries;
export default env;
