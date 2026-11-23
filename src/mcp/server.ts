import { McpServer } from "@modelcontextprotocol/server";
import { serveStdio } from "@modelcontextprotocol/server/stdio";
import * as z from "zod/v4";

function createServer() {
  const server = new McpServer({
    name: "shop-stock-sales",
    version: "0.1.0",
  });

  server.registerTool(
    "ping",
    {
      description: "Checks that the Shop Stock & Sales MCP server is reachable.",
      inputSchema: z.object({}),
    },
    async () => ({
      content: [{ type: "text", text: "pong" }],
    }),
  );

  return server;
}

void serveStdio(createServer);
console.error("Shop Stock & Sales MCP server running on stdio");