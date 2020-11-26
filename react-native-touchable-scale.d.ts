declare module 'react-native-touchable-scale' {
  import React from 'react';
  import {TouchableWithoutFeedbackProps} from 'react-native';

  interface TouchableScaleProps extends TouchableWithoutFeedbackProps {
    defaultScale?: number;
    activeScale?: number;
    tension?: number;
    friction?: number;
    pressInTension?: number;
    pressInFriction?: number;
    pressOutTension?: number;
    pressOutFriction?: number;
    useNativeDriver?: boolean;
  }

  const TouchableScale: React.ComponentType<TouchableScaleProps>;
  export default TouchableScale;
}