import type { Handle } from "@sveltejs/kit";
import { users, albums, artists, tracks } from "./db/schema";
import { db } from "./db/db"
import "./db/migrate"
import cookie from 'cookie';
import { hash } from "@node-rs/argon2"

await db.delete(tracks)
await db.delete(albums)
await db.delete(artists)
await db.delete(users)

await db.insert(users).values({ name: 'Pertti', password: await hash("pifsound")});
await db.insert(users).values({ name: 'Sirpa' });

const artist = await db.insert(artists).values({ name: "Pertti ja Sirpa -duo" }).returning();
console.log(artist);

const album = await db.insert(albums).values({ name: 'Pertti ja Sirpa Karibialla', artistId: artist[0].id}).returning();

await db.insert(tracks).values({ name: "Kolibrin Tanssi (Kolibri Juo Kaljaa)",
    fileId: "5612ae46-ac16-4c7a-a38e-762b62fa66d8.mp3",
    albumId: album[0].id,})

export const handle = (async ({ event, resolve }) => {
	const sessionId = event.cookies.get("session");
	event.locals.sessionId = sessionId || crypto.randomUUID();
    event.locals.db = db;
    console.log("Event:")
    console.log(event.url)

    const response = await resolve(event);
    if (!sessionId) {
        console.log("Setting session cookie")
        response.headers.set("Set-Cookie", cookie.serialize("session", event.locals.sessionId, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: "/",
            sameSite: "strict",
            secure: true,
        }));
    }

    return response;
}) satisfies Handle;

