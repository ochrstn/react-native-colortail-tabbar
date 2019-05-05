import React, { Component } from 'react'
import {
  Image,
  View,
  SafeAreaView,
  Dimensions,
  ImageSourcePropType,
} from 'react-native'
import {
  createBottomTabNavigator,
  createAppContainer,
  BottomTabBarProps,
} from 'react-navigation'
import ColorTailTabBar, {
  ColortailTabData,
} from 'react-native-colortail-tabbar'

import home from './icons/home.png'
import assessment from './icons/assessment.png'
import basket from './icons/basket.png'
import star from './icons/star.png'
import apps from './icons/apps.png'

interface AnimatedTabProps {
  size: number
  opacity: number
}

const ImageIcon = ({
  size,
  opacity,
  icon,
}: AnimatedTabProps & { icon: ImageSourcePropType }) => {
  return <Image style={{ width: size, height: size, opacity }} source={icon} />
}

const tabs: Array<ColortailTabData<AnimatedTabProps>> = [
  {
    color: '#e7645b',
    renderAnimatedTab: props => <ImageIcon {...props} icon={home} />,
  },
  {
    color: '#ffbd73',
    renderAnimatedTab: props => <ImageIcon {...props} icon={assessment} />,
  },
  {
    color: '#73adce',
    renderAnimatedTab: props => <ImageIcon {...props} icon={basket} />,
  },
  {
    color: '#e76394',
    renderAnimatedTab: props => <ImageIcon {...props} icon={star} />,
  },
  {
    color: '#73d6b5',
    renderAnimatedTab: props => <ImageIcon {...props} icon={apps} />,
  },
]

class Tab1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 25 }}>
        <View
          style={{ flex: 1, backgroundColor: '#5c4f71', borderRadius: 5 }}
        />
      </View>
    )
  }
}

// tslint:disable-next-line: max-classes-per-file
class Tab2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 25 }}>
        {[1, 2, 3, 4, 5].map(x => (
          <View
            key={x}
            style={{ flex: 1, flexDirection: 'row', marginVertical: 5 }}
          >
            <View
              style={{
                width: 75,
                height: 75,
                marginHorizontal: 15,
                backgroundColor: '#5c4f71',
                borderRadius: 100,
              }}
            />
            <View
              style={{
                flex: 1,
                height: 75,
                marginHorizontal: 15,
                backgroundColor: '#5c4f71',
                borderRadius: 5,
              }}
            />
          </View>
        ))}
      </View>
    )
  }
}

// tslint:disable-next-line: max-classes-per-file
class Tab3 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 25 }}>
        {[1, 2, 3, 4, 5].map(x => (
          <View
            key={x}
            style={{
              flex: 1,
              marginVertical: 5,
              backgroundColor: '#5c4f71',
              borderRadius: 5,
            }}
          />
        ))}
      </View>
    )
  }
}

// tslint:disable-next-line: max-classes-per-file
class Tab4 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 25 }}>
        {[1, 2, 3, 4, 5].map(x => (
          <View key={x} style={{ flex: 1, marginVertical: 5 }}>
            {[1, 2, 3].map(y => (
              <View
                key={y}
                style={{
                  width: Math.random() * (Dimensions.get('window').width - 100),
                  height: 20,
                  marginVertical: 5,
                  backgroundColor: '#5c4f71',
                  borderRadius: 5,
                }}
              />
            ))}
          </View>
        ))}
      </View>
    )
  }
}

// tslint:disable-next-line: max-classes-per-file
class Tab5 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 25 }}>
        {[1, 2, 3, 4, 5].map(x => (
          <View
            key={x}
            style={{ flex: 1, flexDirection: 'row', marginVertical: 5 }}
          >
            {[1, 2, 3].map(y => (
              <View
                key={y}
                style={{
                  flex: 1,
                  marginHorizontal: 5,
                  backgroundColor: '#5c4f71',
                  borderRadius: 5,
                }}
              />
            ))}
          </View>
        ))}
      </View>
    )
  }
}

// tslint:disable-next-line: max-classes-per-file
class MyTabBar extends Component<BottomTabBarProps, { activeTab: number }> {
  state = {
    activeTab: 0,
  }

  onTabPress = (activeTab: number) => {
    this.setState({ activeTab })

    switch (activeTab) {
      default:
      case 0:
        this.props.navigation.navigate('Tab1')
        break
      case 1:
        this.props.navigation.navigate('Tab2')
        break
      case 2:
        this.props.navigation.navigate('Tab3')
        break
      case 3:
        this.props.navigation.navigate('Tab4')
        break
      case 4:
        this.props.navigation.navigate('Tab5')
        break
    }
  }

  render() {
    return (
      <ColorTailTabBar
        tabs={tabs}
        color='#5c4f71'
        activeTabIndex={this.state.activeTab}
        onTabPress={this.onTabPress}
        duration={200}
        from={{ size: 22, opacity: 0.5 }}
        to={{ size: 30, opacity: 1.0 }}
      />
    )
  }
}

const TabNavigation = createBottomTabNavigator(
  {
    Tab1: { screen: Tab1 },
    Tab2: { screen: Tab2 },
    Tab3: { screen: Tab3 },
    Tab4: { screen: Tab4 },
    Tab5: { screen: Tab5 },
  },
  {
    tabBarComponent: (props: BottomTabBarProps) => <MyTabBar {...props} />,
  },
)

const AppContainer = createAppContainer(TabNavigation)

// tslint:disable-next-line: max-classes-per-file
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#423853' }}>
        <AppContainer />
      </SafeAreaView>
    )
  }
}
