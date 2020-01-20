import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login'
import Map from './Map'


const Rotas = createStackNavigator({
  Login,
  Map,
},{
    defaultNavigationOptions:{
        headerBackTitle: null,
    }
},
);


export default createAppContainer(Rotas);
