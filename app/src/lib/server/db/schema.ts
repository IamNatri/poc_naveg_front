import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';


export const usersTable = sqliteTable('users', {
	id: text('id').primaryKey().notNull(),

	name: text('name').notNull(),

	email: text('email').notNull().unique(),

	password: text('password').notNull(),

	createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`)
});

export const usersSessionsTable = sqliteTable('users_session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => usersTable.id),
		expiresAt: integer('expires_at').notNull()
});

export type UserInsertSchema = typeof usersTable.$inferSelect;
