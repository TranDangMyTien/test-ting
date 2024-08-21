module.exports = {
  async rewrites() {
    return [
      {
        source: "/kols/:path*",
        destination: "http://localhost:8081/:path*", // Proxy to backend API
      },
    ];
  },
};
