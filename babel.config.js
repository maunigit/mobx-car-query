//For a detailed explanation see: https://github.com/facebook/react-native/issues/20588

module.exports = function(api) {
  api.cache(true);
  return {
    plugins: [
      '@babel/transform-flow-strip-types',
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }]
    ],
    presets: ['babel-preset-expo','@babel/preset-env', '@babel/preset-react'],
    env: {
      "production": {
        "plugins": ["transform-remove-console"]
      }
    }    
  };
};