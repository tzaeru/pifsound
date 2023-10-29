// File server for serving music tracks etc
import http from 'http'
import { send } from '@fastify/send';
import fs from 'fs';
import parseUrl from "parseurl";
fs.readdirSync(".").forEach((file: any) => {
    console.log(file);
  });
var server = http.createServer(function onRequest (req: any, res: any) {
    console.log("File server request: ", parseUrl(req)?.pathname || "")
    send(req, parseUrl(req)?.pathname || "", { root: './static/uploadables' })
        .pipe(res)
})

server.listen(3000)