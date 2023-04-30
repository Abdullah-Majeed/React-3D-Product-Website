const config = {
  development: {
    dalleBackendUrl: "http://localhost:3000/api/v1/dalle",
    chatBackendurl: "http://localhost:8080/api/v1/chat/completions"
  },
  production: {
    dalleBackendUrl: "https://yellow-meerkat-slip.cyclic.app/api/v1/dalle",
    chatBackendurl: "https://yellow-meerkat-slip.cyclic.app/api/v1/chat/completions"
  },
};

export default config;
