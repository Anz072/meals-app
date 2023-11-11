module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from", //added this so the drawer renders on expo web preview
      "react-native-reanimated/plugin", //must appear at the end of plugins. needed for react-native-reanimated to work
    ],
  };
};