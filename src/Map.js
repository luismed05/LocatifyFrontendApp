import React, {useEffect,useState} from 'react';
import { View } from 'react-native';
import MapView, { Marker, Callout} from 'react-native-maps';


// import { Container } from './styles';

export default function Map(props) {
  [posicao,setPosicao] = useState({})
  useEffect(() => {
    async function getCoord(){
      setPosicao({
        latitude: props.navigation.state.params.latitude,
        longitude: props.navigation.state.params.longitude,
        latitudeDelta: props.navigation.state.params.latitudeDelta,
        longitudeDelta: props.navigation.state.params.longitudeDelta,
      })
    }
    getCoord();
  }, []);
  return (
    <MapView 
      pointerEvents="none"
      style={{flex: 1}} 
      region={posicao}
    >
      <Marker
        coordinate={{
          latitude: props.navigation.state.params.latitude,
          longitude: props.navigation.state.params.longitude,
        }}
      >

      </Marker>
    </MapView>
  );
}
