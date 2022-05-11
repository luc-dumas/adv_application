import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

function Map() {
  return (
    <LoadScript googleMapsApiKey='AIzaSyDJqQAcBy_ZYlp2Q_WCHbLALVhGvzasR_M'>
      <GoogleMap
        options={{
          mapTypeControl: true,
          draggableCursor: 'default',
          // mapId: '3115195beae83bcd',
        }}
        center={{ lat: 38.34312678758847, lng: -89.5762144563771 }}
        zoom={4}
        mapContainerStyle={{
          height: 'calc(100vh - 8vh)',
          width: '100%',
        }}
      />
    </LoadScript>
  )
}

export default React.memo(Map)
