import React from 'react';
import { Geojson } from 'react-native-maps';

function CustomGeojson({ onLayout, ...props }) {
  const ref = React.useRef();

  function onLayoutGeojson() {
    if (ref.current) {
      ref.current.setNativeProps({ fillColor: props.fillColor });
    }
    // call onLayout() from the props if you need it
  }

  return <Geojson ref={ref} onLayout={onLayoutGeojson} {...props} />;
}

export default CustomGeojson;
