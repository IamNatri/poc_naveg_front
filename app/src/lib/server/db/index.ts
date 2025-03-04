// import { drizzle } from 'drizzle-orm/libsql';
// import { createClient } from '@libsql/client';
// import { env } from '$env/dynamic/private';
// if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
// const client = createClient({ url: env.DATABASE_URL });
// export const db = drizzle(client);

import Database from 'better-sqlite3';
import * as schema from './schema';
import { drizzle } from 'drizzle-orm/better-sqlite3';

const sqliteClient = new Database('../localDB/sqlite.db');
export const database = drizzle(sqliteClient, { schema })