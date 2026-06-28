# c3fl.de-website

Chaos Computer Club Flensburg Website in [Lume](https://lume.land/)

## content managment

The content is managed via [Markdown](https://en.wikipedia.org/wiki/Markdown) in
the corresponding folders inside `./src`. The folder structure of the source
folder is the same as the resulting routes.

### blog posts

Blog posts should be located at `./src/blog/[year]/[slug]` and should have all
required labels set:

- layout: Blog.tsx
- tags:
  - blog
- title: [title of the post]
- excerpt: [short excerpt of the post]
- date: [date of the post as ISO-date]

Posts with the label `blog` will automatically be rendered on the `/blog` page
in descending date order (with pagination).

Other posts - f/e/ of the category events - should be in the folder of the
category.

### categories

Each category consists of a folder of the same name as the slug and an
`index.md` page inside. The slug is set in the labels of the category index
page, f/e/:

- layout: Default.tsx
- tags:
  - header
- title: Events
- slug: "events"

Posts with the tag `header` will be displayed in the header and side menu. To
link a post to a category add a tag like this: `header(events)` (where `events`
is the slug of the category). The post will then be displayed in a dropdown menu
in the header.

## development

### start dev server

```bash
deno task serve
```

### build project

```
deno task build
```

the generated static html files will be located at `./_site`
