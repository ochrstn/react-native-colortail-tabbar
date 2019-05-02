import React from 'react'
import { View, ViewStyle } from 'react-native'
import { ColortailTab } from './ColortailTab'

export interface TabRenderProps {
  size: number
  opacity: number
}

export interface ColortailTabData {
  color: string
  renderTab: (props: TabRenderProps) => JSX.Element
}

export interface ColortailTabbarProperties {
  barStyle?: ViewStyle
  tabs: ColortailTabData[]
  color: string
  activeTabIndex: number
  onTabPress: (index: number) => void
}

export default class ColorTailTabBar extends React.Component<
  ColortailTabbarProperties
> {
  render() {
    const {
      activeTabIndex,
      barStyle,
      onTabPress,
      color = '#5c4f71',
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
              activeTab={activeTabIndex}
            />
          )
        })}
      </View>
    )
  }
}
