import { error } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { users, albums, artists, tracks } from '../../db/schema';
import { eq, sql } from 'drizzle-orm';
import { fail } from '@sveltejs/kit';

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
    default: async (event) => {
        console.log("called file upload")
        console.log(event)
        const body = await event.request.formData();
        console.log(body)
        const formData = Object.fromEntries(body);
        console.log(formData)
        if (
          !(formData.fileToUpload as File).name ||
          (formData.fileToUpload as File).name === 'undefined'
        ) {
          return fail(400, {
            error: true,
            message: 'You must provide a file to upload'
          });
    
        }
  
        const { fileToUpload } = formData as { fileToUpload: File };
    
        console.log(fileToUpload)
	}
} satisfies Actions;