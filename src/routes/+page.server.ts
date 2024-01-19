import { error } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { users, albums, artists, tracks } from '../db/schema';
import { eq, sql } from 'drizzle-orm';

type OutputType = { music: any };

export const load: PageServerLoad<OutputType> = async ({ params, locals, cookies }) => {
	// Select
	const allAlbums = await locals.db
		.select()
		.from(artists)
		.leftJoin(albums, eq(albums.artistId, artists.id))
		.leftJoin(tracks, eq(tracks.albumId, albums.id));

	const loggedIn = cookies.get('loggedIn');

	return {
		music: allAlbums,
		loggedIn: loggedIn ? true : false
	};
};

export const actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const name = data.getAll('name') as string[];
		const password = data.getAll('password') as string[];
		cookies.set('loggedIn', true);
		console.log(name);
		console.log(password);
	},
	logout: async ({ request, cookies }) => {
		cookies.set('loggedIn', false);
	}
} satisfies Actions;

/*
// Joins
// You wouldn't BELIEVE how SMART the result type is! 😱
const allUsersWithCities = await db
  .select({
    id: users.id,
    name: users.fullName,
    city: {
      id: cities.id,
      name: cities.name,
    },
  })
  .from(users)
  .leftJoin(cities, eq(users.cityId, cities.id));

  */
