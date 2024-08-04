const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Ynot Dev</title>
  </head>
  <body>
    <ul>
      <li><a href="https://github.com/tony-sunny">Github</a></li>
      <li><a href="https://blog.ynots.dev">Blog</a></li>
      <li><a href="https://www.linkedin.com/in/ynotdev">Linkedin</a></li>
    </ul>
  </body>
</html>
<style>
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
</style>`;

export default {
  async fetch(request, env, ctx) {
    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};
