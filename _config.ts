import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import mdx from "lume/plugins/mdx.ts";
//import minify_html from "lume/plugins/minify_html.ts";
import pagefind from "lume/plugins/pagefind.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import feed from "lume/plugins/feed.ts";

const site = lume({
  src: "./src",
  location: new URL("https://chaostreff-flensburg.de/"),
});

site
  .use(jsx({ pageSubExtension: "" }))
  .use(mdx())
  .use(pagefind())
  // minify also flattens the nested CSS rules for older browsers
  .use(tailwindcss({ minify: true }))
  //.use(minify_html())
  .use(
    feed({
      title: "Chaos Computer Club Flensburg",
      output: ["/feed.rss", "/feed.json"],
      query: "blog",
      sort: "date=desc",
      info: {
        title: "=site.title",
        description: "=site.description",
      },
      items: {
        title: "=title",
        description: "=excerpt",
      },
    }),
  )
  .add("main.css")
  .copy("media")
  .copy("assets", ".")
  .copy("main.js")
  .copy(
    "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.12.0/build/styles/github.min.css",
    "code.css",
  );

export default site;
