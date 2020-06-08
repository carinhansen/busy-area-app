import * as React from 'react';
import {Heatmap} from "react-native-maps";


function CustomHeatmap(props) {
  return (
    <Heatmap
      points={props.points}
      radius={25}
      gradient={{
        colors: ["#79BC6A", "#BBCF4C", "#EEC20B", "#F29305", "#E50000"],
        startPoints: [0.01, 0.25, 0.50, 0.75, 1],
        colorMapSize: 500
      }}
    />

  )
}

export default CustomHeatmap;
