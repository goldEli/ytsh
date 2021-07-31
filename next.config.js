module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/",
        // destination: "http://www.ytshpos.cc/api", // Proxy to Backend
        destination: "http://localhost:9999/api/", // Proxy to Backend
      },
    ];
  },
};
