/**
 * Extends the OpenNext CloudflareEnv interface with project-specific bindings.
 * This file is auto-picked up by TypeScript via tsconfig.
 */
declare global {
  interface CloudflareEnv {
    /** KV namespace for Bear Construction estimate config (site + pricing). */
    BEAR_ESTIMATE: KVNamespace;
  }
}

export {};
