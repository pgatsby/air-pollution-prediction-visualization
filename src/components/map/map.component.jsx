import React, { useRef, useEffect, useState } from "react";
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import LayerList from "@arcgis/core/widgets/LayerList";

import POLLUTION_DATA from "./pollution.data.js";
import "./map.style.scss";

function Map({ id }) {
  const [state, setState] = useState({
    id: id,
    data: POLLUTION_DATA,
  });

  if (id !== state.id) {
    setState((prevState) => {
      return {
        ...prevState,
        id: id,
      };
    });
  }

  const layers = [];
  // console.log(state);
  // console.log(state.id);

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

      state.data.map((data) => {
        if (state.id === data.id) {
          data.layers.map((layer) => {
            layers.push(layer);
          });
        }
      });

      view.when(() => {
        var layerList = new LayerList({
          view: view,
        });
        view.ui.add(layerList, "top-left");
      });
      view.ui.move("zoom", "top-right");
      map.addMany(layers);
    }
  }, [state]);

  return <div className="mapDiv" ref={mapDiv} id="map"></div>;
}

export default Map;
