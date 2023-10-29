CREATE TABLE IF NOT EXISTS "albums" (
	"id" serial PRIMARY KEY NOT NULL,
	"album_name" text,
	"artist_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "artists" (
	"id" serial PRIMARY KEY NOT NULL,
	"artist_name" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tracks" (
	"id" serial PRIMARY KEY NOT NULL,
	"track_name" text,
	"album_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_name" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "albums" ADD CONSTRAINT "albums_artist_id_artists_id_fk" FOREIGN KEY ("artist_id") REFERENCES "artists"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tracks" ADD CONSTRAINT "tracks_album_id_albums_id_fk" FOREIGN KEY ("album_id") REFERENCES "albums"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
