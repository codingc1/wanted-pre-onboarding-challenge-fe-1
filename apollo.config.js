module.exports = {
    client: {
        tagName: "gql",
        includes: ["./src/**/*.{tsx,ts}"],
      service: {
          name: "hang-server",
          url: "http://localhost:8080"
          }
    }
  };