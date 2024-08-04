/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

const html = `<!DOCTYPE html>
  <html lang="en">
  <body>
    <h1>Hello World</h1>
    <a href="https://blog.ynots.dev">Blog</a>
  </body>
</html>`;

export default {
  async fetch(request, env, ctx) {

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};