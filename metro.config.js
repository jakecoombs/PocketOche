const { withNativeWind: withNativeWind } = require("nativewind/metro");

const { getDefaultConfig } = require("expo/metro-config");
/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
config.resolver.sourceExts.push("sql");
module.exports = withNativeWind(config, {
  input: "./global.css",
});
