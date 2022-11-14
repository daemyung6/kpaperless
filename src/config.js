import { Dimensions } from 'react-native';
const { width: APP_WIDTH, height: APP_HEIGHT } = Dimensions.get('window');

const width = 1200;
const height = 1920;

const config = {
    width: width,
    height: height,
    APP_WIDTH: APP_WIDTH,
    APP_HEIGHT: APP_HEIGHT,
    ratio: {
        width : (APP_WIDTH / width),
        height : (APP_HEIGHT / height) 
    }
}
export default config;