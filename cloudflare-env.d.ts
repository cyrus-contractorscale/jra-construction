/**
 * Extends the OpenNext CloudflareEnv interface with project-specific bindings.
 * This file is auto-picked up by TypeScript via tsconfig.
 */
declare global {
  interface CloudflareEnv {
    /** KV namespace for JRA estimate config (site + pricing). */
    JRA_ESTIMATE: KVNamespace;
  }
}

export {};
