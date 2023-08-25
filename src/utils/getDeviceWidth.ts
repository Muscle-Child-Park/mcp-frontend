import {Dimensions} from 'react-native';

const getDeviceWidth = () => Math.round(Dimensions.get('window').width);

export default getDeviceWidth;
