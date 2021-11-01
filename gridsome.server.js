// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    const presentations = require("./src/data/presentations.json");
    const collection = addCollection({
      typeName: "Presentations",
    });

    for (const presentation of presentations) {
      collection.addNode(presentation);
    }
  });

  api.loadSource(({ addCollection }) => {
    const engagements = require("./src/data/engagements.json");
    const collection = addCollection({
      typeName: "Engagements",
    });

    for (const engagement of engagements) {
      collection.addNode(engagement);
    }
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
