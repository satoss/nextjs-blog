const withPWA = require("next-pwa");

const config = {
  pwa: {
    dest: "public",
  },
};

module.exports = withPWA(config);
