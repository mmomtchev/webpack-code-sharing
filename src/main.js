import sqlite from '../deps/sqlite3-bundler-friendly.mjs';

new Worker(new URL('./worker.js', import.meta.url));

export async function initSyncSQLite() {
  return sqlite().then(() => {
    return;
  });
}
