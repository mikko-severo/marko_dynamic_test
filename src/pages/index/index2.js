import wd from "./wd.marko";
import mf from "./mf.marko";
import em from "./embed.marko";
import fs from "./fs.marko";
import f from "./f.marko";
import onload from "./onload.marko";
export default async (app) => {
  app.get("/pn/:test", (request, reply) => {
    let test = request.params.test,
      page;
    if (test === "wd") {
      reply.marko(wd, {});
    } else if (test === "mf") {
      reply.marko(mf, {});
    } else if (test === "fs") {
      reply.marko(f, {});
    } else if (test === "f") {
      reply.marko(f, {});
    } else if (test === "onload") {
      reply.marko(onload, {});
    } else {
      reply.marko(em, {});
    }

    // reply.marko(`import ${page} from "./${page}.marko"`, {});
  });
};
