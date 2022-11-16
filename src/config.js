import { Dimensions } from 'react-native';
const { width: APP_WIDTH, height: APP_HEIGHT } = Dimensions.get('window');

const width = 1200;
const height = 1920;

const config = {
    width: width,
    height: height,
    appWidth: APP_WIDTH,
    appHeight: APP_HEIGHT,
    ratio: {
        width : (APP_WIDTH / width),
        height : (APP_HEIGHT / height) 
    },
    font: {
        'Poppins' : {
            '100': 'Poppins-Thin',
            '100-litalic': 'Poppins-ThinItalic',
            '200': 'Poppins-ExtraLight',
            '200-litalic': 'Poppins-ExtraLightItalic',
            '300': 'Poppins-Light',
            '300-litalic': 'Poppins-LightItalic',
            '400': 'Poppins-Regular',
            '400-litalic': 'Poppins-Italic',
            '500': 'Poppins-Medium',
            '500-litalic': 'Poppins-MediumItalic',
            '600': 'Poppins-SemiBold',
            '600-litalic': 'Poppins-SemiBoldItalic',
            '700': 'Poppins-Bold',
            '700-litalic': 'Poppins-BoldItalic',
            '800': 'Poppins-ExtraBold',
            '800-litalic': 'Poppins-ExtraBoldItalic',
            '900': 'Poppins-Black',
            '900-litalic': 'Poppins-BlackItalic',
        },
        'Inter': {
            '100': 'Inter-Thin',
            '200': 'Inter-ExtraLight',
            '300': 'Inter-Light',
            '400': 'Inter-Regular',
            '500': 'Inter-Medium',
            '600': 'Inter-SemiBold',
            '700': 'Inter-Bold',
            '800': 'Inter-ExtraBold',
            '900': 'Inter-Black',
        }
    }
}
export default config;