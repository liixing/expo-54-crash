// Reexport the native module. On web, it will be resolved to ExpoPlayerModule.web.ts
// and on native platforms to ExpoPlayerModule.ts
export { default } from './src/ExpoPlayerModule';
export { default as ExpoPlayerView } from './src/ExpoPlayerView';
export * from  './src/ExpoPlayer.types';
