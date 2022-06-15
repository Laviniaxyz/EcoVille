import Constants from 'expo-constants';
import { Dimensions, Platform } from 'react-native';

export const DEVICE_HAS_NOTCH: boolean = (() => {
    return Platform.OS === 'ios' && Constants.statusBarHeight > 20;
})();

export const STATUS_BAR_HEIGHT: number = (() => Constants.statusBarHeight)();
export const CHIN_HEIGHT: number = (() => (Platform.OS === 'ios' && DEVICE_HAS_NOTCH ? 34 : 0))();
export const CHIN_HEIGHT_TRIMMED = CHIN_HEIGHT > 24 ? CHIN_HEIGHT - 24 : 0;
export const SCREEN_WIDTH: number = (() => Dimensions.get('window').width)();
export const SCREEN_HEIGHT: number = (() => Dimensions.get('window').height)();

export const TOP_NAV_BAR_SIZE = 56;
export const TAB_BAR_SIZE = 56;
export const TAB_BAR_SELECTED_ICON_SIZE = 32;
export const TAB_BAR_UNSELECTED_ICON_SIZE = 20;
export const TOP_PROJECT_HEADER_SIZE = 88;
