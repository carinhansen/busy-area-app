import * as React from 'react';
import {Heatmap} from "react-native-maps";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

function CustomHeatmap(props) {
  return (
    <Heatmap
      points={props.points}
      radius={50}
      opacity={1}
      onZoomRadiusChange={{
        zoom: [0, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17],
        radius: [10, 10, 15, 20, 30, 60, 80, 100, 120, 150, 180, 200, 250, 250]
      }}
      gradient={{
        // colors: ["#79BC6A", "#BBCF4C", "#EEC20B", "#F29305", "#E50000"],
        colors: ["#BBCF4C", "#EEC20B", "#F29305", "#E50000","#E50000"],
        startPoints: [0.01, 0.25, 0.50, 0.75, 1],
        colorMapSize: 500,
      }}
      maxIntensity={100}
      gradientSmoothing={10}
      heatmapMode={"POINTS_WEIGHT"}
    />

  )
}

export default CustomHeatmap;
