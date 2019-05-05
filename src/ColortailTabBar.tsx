import React from 'react'
import { View, ViewStyle } from 'react-native'
import { ColortailTab } from './ColortailTab'

export interface ColortailTabData<DS extends object = {}> {
  color: string
  renderAnimatedTab?: (props: DS) => JSX.Element
  renderTab?: () => JSX.Element
}

export interface ColortailTabbarProperties<DS extends object = {}> {
  barStyle?: ViewStyle
  tabs: Array<ColortailTabData<DS>>
  color: string
  activeTabIndex: number
  duration?: number
  from?: DS
  to?: DS
  onTabPress: (index: number) => void
}

export default class ColorTailTabBar<
  DS extends object = {}
> extends React.Component<ColortailTabbarProperties<DS>> {
  render() {
    const {
      activeTabIndex,
      barStyle,
      onTabPress,
      color = '#5c4f71',
      duration = 100,
      from,
      to,
    } = this.props

    return (
      <View
        style={{
          height: 37,
          alignSelf: 'stretch',
          flexDirection: 'row',
          backgroundColor: color,
          ...barStyle,
        }}
      >
        {this.props.tabs.map((tab, index) => {
          return (
            <ColortailTab
              key={index}
              index={index}
              color={tab.color}
              onTabPress={() => {
                onTabPress(index)
              }}
              renderTab={tab.renderTab}
              renderAnimatedTab={tab.renderAnimatedTab}
              to={to}
              from={from}
              activeTab={activeTabIndex}
              duration={duration}
            />
          )
        })}
      </View>
    )
  }
}
