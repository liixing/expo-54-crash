import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoPlayerViewProps } from './ExpoPlayer.types';

const NativeView: React.ComponentType<ExpoPlayerViewProps> =
  requireNativeView('ExpoPlayer');

export default function ExpoPlayerView(props: ExpoPlayerViewProps) {
  return <NativeView {...props} />;
}
