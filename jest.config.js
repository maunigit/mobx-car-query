//For a detailed explanation see: https://jestjs.io/docs/en/configuration.html

module.exports = {
  preset: "jest-expo",
  modulePathIgnorePatterns: [".yarn",".npm"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)"
  ]
};
