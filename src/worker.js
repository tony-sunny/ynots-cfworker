const html = `<!doctype html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Ynot Dev</title>
  </head>
  <body>
    <nav>
      <ul class="nav-list">
        <li>
          <h3><a href="https://github.com/tony-sunny">Github</a></h3>
        </li>
        <li>
          <h3><a href="https://blog.ynots.dev">Blog</a></h3>
        </li>
        <li>
          <h3><a href="https://www.linkedin.com/in/ynotdev">Linkedin</a></h3>
        </li>
      </ul>
    </nav>
  </body>
</html>
<style>
  html {
    background-color: #131313;
    color: #424242;
  }
  a {
    color: #1326ff;
  }
  ul.nav-list {
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
