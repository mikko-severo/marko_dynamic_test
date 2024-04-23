import wd from "./wd.marko";
import mf from "./mf.marko";
import em from "./embed.marko";
export default async (app) => {
  app.get("/pn/:test", (request, reply) => {
    let test = request.params.test,
        page;
    if(test==='wd'){
      reply.marko(wd,{})
    } else if(test==='mf'){
      reply.marko(mf,{})
    } else {
      reply.marko(em,{})
    }
    
    // reply.marko(`import ${page} from "./${page}.marko"`, {});
  });
};



