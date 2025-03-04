// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			user: import('lucia').User<Lucia>|null;
			session: import('lucia').Session<Lucia>|null;
		}
	}
}

export {};
