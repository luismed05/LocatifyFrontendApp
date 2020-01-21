import React, {useEffect,useState} from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';


// import { Container } from './styles';

export default function Map(props) {
  const [ posicao,setPosicao ] = useState({});
  useEffect(() => {
    async function pegarPosicao(){
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        if(status === 'granted'){
          const position = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
          console.log(position.coords.latitude);
          setPosicao({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }
    }
    pegarPosicao();
},[])
  return (
    <MapView 
      style={{flex: 1}}
      region={posicao}  
    />
  );
}
