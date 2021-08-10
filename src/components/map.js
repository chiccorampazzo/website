// React-Leaflet: https://github.com/PaulLeCam/react-leaflet/pull/885#issuecomment-861855496
// Tiles: https://leaflet-extras.github.io/leaflet-providers/preview/

import React, { Component } from "react"
import { MapContainer, TileLayer } from "react-leaflet"

export default class LeafletMap extends Component {
  render() {
    const { position, zoom, children } = this.props

    if (typeof window !== "undefined") {
      return (
        <div className="w-full">
          <MapContainer
            center={position}
            zoom={zoom}
            scrollWheelZoom={true}
            style={{
              height: `480px`,
              width: `100%`,
              zIndex: 1,
              margin: `auto`,
            }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
            />
            {children}
          </MapContainer>
        </div>
      )
    }
    return null
  }
}
