import * as dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';

dotenv.config();
const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
	throw new Error(
		'No DATABASE_URL defined in the environment variables. Please ensure it is set in the .env file.'
	);
}

export default {
	schema: 'src/lib/server/db/schema.ts',
	out: './drizzleMigrations',
	dialect : 'sqlite',	
	dbCredentials: {
		url: DATABASE_URL
	}
} satisfies Config;