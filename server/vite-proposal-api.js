import { Readable } from "node:stream";
import { handleProposal } from "./proposal.js";

export function proposalApi(env) {
  const middleware = async (incoming, outgoing, next) => {
    if (incoming.url?.split("?")[0] !== "/api/proposal") return next();
    try {
      const headers = new Headers();
      for (const [name, value] of Object.entries(incoming.headers)) {
        if (value !== undefined)
          headers.set(name, Array.isArray(value) ? value.join(", ") : value);
      }
      const request = new Request(
        new URL(incoming.url, `http://${incoming.headers.host}`),
        {
          method: incoming.method,
          headers,
          ...(!["GET", "HEAD"].includes(incoming.method)
            ? { body: Readable.toWeb(incoming), duplex: "half" }
            : {}),
        },
      );
      const response = await handleProposal(request, { env });
      outgoing.writeHead(response.status, Object.fromEntries(response.headers));
      outgoing.end(Buffer.from(await response.arrayBuffer()));
    } catch {
      outgoing.writeHead(500, {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      });
      outgoing.end(
        JSON.stringify({
          error: "The request could not be processed. Please try again.",
        }),
      );
    }
  };
  return {
    name: "cera-proposal-api",
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}
