const pages = [
  {
    url: "/blog/page/1/",
    title: "Blog",
  },
];

export default ({ search, ...props }) => (
  <>
    {[
      ...pages,
      ...search.pages("header"),
    ].map((page) => {
      let subpages = [];

      if(page.slug === "events"){
        subpages.push({
          title: "Hacks on the Beach 2026",
          url: "https://hotb.c3fl.de/de/",
        })
      }
      subpages = [...subpages, ...search.pages(`header(${page.slug})`, "date=desc")];
      
      if (subpages.length > 0) {
        return (
          <li class="category dropdown">
            <div
              class="btn btn-outline-dark btn-shadow m-2 dropdown-label"
              tabindex="0"
            >
              {page.title}
            </div>
            <div class="block dropdown-menu btn-outline-dark p-0 mx-2">
              {subpages.map((subpage) => (
                <a class="block dropdown-item" href={subpage.url}>
                  {subpage.title}
                </a>
              ))}
            </div>
          </li>
        );
      } else {
        return (
          <li>
            <a href={page.url}>
              <div class="btn btn-outline-dark btn-shadow m-2">
                {page.title}
              </div>
            </a>
          </li>
        );
      }
    })}
  </>
);
