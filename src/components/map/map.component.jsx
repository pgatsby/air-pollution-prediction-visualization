import React, { useRef, useEffect, useState } from "react";
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import LayerList from "@arcgis/core/widgets/LayerList";

import POLLUTION_DATA from "./pollution.data.js";
import "./map.style.scss";

function Map(props){
  const { id } = props;
  const [data, setData] = useState(POLLUTION_DATA);
  const layers = [];
  console.log(id);

  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      // Initialize Map
      const map = new ArcGISMap({
        basemap: "topo-vector",
      });

      const view = new MapView({
        map,
        container: mapDiv.current,
        center: [-118.2437, 34.0522],
        zoom: 11,
        minScale: 0,
        maxScale: 10000,
      });

      data.map((data) => {
        if (id === data.id) {
          console.log(data.layers);
          data.layers.map((layer) => {
            // console.log(layer)
            layers.push(layer);
          });
        }
      });

      view.when(() => {
        var layerList = new LayerList({
          view: view,
        });
        view.ui.add(layerList, "top-right");
      });

      map.addMany(layers);
    }
  }, []);

  return <div className="mapDiv" ref={mapDiv}></div>;
};

export default Map;
