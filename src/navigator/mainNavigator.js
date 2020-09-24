import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList108326Navigator from '../features/ArticleList108326/navigator';
import ArticleList108325Navigator from '../features/ArticleList108325/navigator';
import ArticleList108324Navigator from '../features/ArticleList108324/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList108326: { screen: ArticleList108326Navigator },
ArticleList108325: { screen: ArticleList108325Navigator },
ArticleList108324: { screen: ArticleList108324Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
