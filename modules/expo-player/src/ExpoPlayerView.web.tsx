import * as React from 'react';

import { ExpoPlayerViewProps } from './ExpoPlayer.types';

export default function ExpoPlayerView(props: ExpoPlayerViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
