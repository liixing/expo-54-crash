import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './ExpoPlayer.types';

type ExpoPlayerModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class ExpoPlayerModule extends NativeModule<ExpoPlayerModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(ExpoPlayerModule, 'ExpoPlayerModule');
