module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo','@babel/preset-env', '@babel/preset-react'],
    env: {
      "production": {
        "plugins": ["transform-remove-console"]
      }
    },
    plugins: ["@babel/plugin-proposal-class-properties"]
  };
};