/* eslint-disable no-undef */
module.exports = function (api) {
  api.cache(true);

  const presets = ["next/babel"];
  const plugins = [
    [
      "styled-components",
      {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
      "inline-react-svg",
    ],
  ];

  return {
    presets,
    plugins,
  };
};
