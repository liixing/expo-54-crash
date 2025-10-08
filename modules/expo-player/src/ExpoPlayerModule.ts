import { NativeModule, requireNativeModule } from 'expo';

import { ExpoPlayerModuleEvents } from './ExpoPlayer.types';

declare class ExpoPlayerModule extends NativeModule<ExpoPlayerModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoPlayerModule>('ExpoPlayer');
