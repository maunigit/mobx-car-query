//For a detailed explanation see: https://jestjs.io/docs/en/configuration.html
//see https://github.com/mobxjs/mobx-react#testing-store-injection

module.exports = {
  preset: "jest-expo",
  modulePathIgnorePatterns: [".yarn",".npm"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)"
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
