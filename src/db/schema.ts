import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial('id').primaryKey(),
    name: text("user_name"),
    password: text("password"),
});

export const artists = pgTable("artists", {
    id: serial('id').primaryKey(),
    name: text("artist_name"),
});

export const albums = pgTable("albums", {
    id: serial('id').primaryKey(),
    name: text("album_name"),
    artistId: integer('artist_id').references(() => artists.id),
});

export const tracks = pgTable("tracks", {
    id: serial('id').primaryKey(),
    name: text("track_name"),
    albumId: integer('album_id').references(() => albums.id),
    fileId: text("file_id")
});