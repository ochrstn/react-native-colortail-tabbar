import React from 'react'
import { TouchableOpacity, View } from 'react-native'
// @ts-ignore
import { Spring, config } from 'react-spring/renderprops-native'
import { ColortailTabData } from '.'

interface Props<DS extends object = {}> extends ColortailTabData<DS> {
  activeTab: number
  index: number
  duration: number
  from?: DS
  to?: DS
  onTabPress: () => void
}

interface State {
  toggle: boolean
  forward: boolean
  distance: number
  isBetween: boolean
}

export class ColortailTab<DS extends object = {}> extends React.Component<
  Props<DS>,
  State
> {
  state = {
    toggle: false,
    distance: 0,
    forward: false,
    isBetween: false,
  }

  componentDidMount() {
    if (this.props.activeTab === this.props.index) {
      this.setState({ toggle: true })
    }
  }

  isBetween = (
    index: number,
    prev: number,
    current: number,
    forward: boolean,
  ) => {
    if (forward) {
      return index > prev && index < current
    } else {
      return index < prev && index > current
    }
  }

  componentDidUpdate(prevProps: Props<DS>) {
    if (this.props.activeTab !== prevProps.activeTab) {
      const distance = Math.abs(prevProps.activeTab - this.props.index)
      const forward = prevProps.activeTab < this.props.activeTab
      const isBetween = this.isBetween(
        this.props.index,
        prevProps.activeTab,
        this.props.activeTab,
        forward,
      )
      const toggle = isBetween || this.props.activeTab === this.props.index
      this.setState({ toggle, distance, forward, isBetween }, () => {
        if (isBetween) {
          setTimeout(() => {
            this.setState({
              toggle: !this.state.toggle,
              distance: this.state.distance,
              forward: this.state.forward,
              isBetween,
            })
          }, distance * this.props.duration)
        }
      })
    }
  }

  _leftAndRight = () => {
    const { toggle, forward } = this.state
    if (toggle) {
      if (forward) {
        return { left: 0 }
      } else {
        return { right: 0 }
      }
    } else {
      if (forward) {
        return { right: 0 }
      } else {
        return { left: 0 }
      }
    }
  }

  _opacityFrom = () => {
    const { toggle, isBetween } = this.state
    if (isBetween) {
      if (toggle) {
        return 0
      } else {
        return 1
      }
    } else {
      return 1
    }
  }

  _opacityTo = () => {
    const { toggle, isBetween } = this.state
    if (isBetween) {
      if (toggle) {
        return 1
      } else {
        return 0
      }
    } else {
      return 1
    }
  }

  renderContent = () => {
    if (this.props.from !== undefined && this.props.to !== undefined) {
      return (
        <Spring
          config={config.wobbly}
          from={
            this.state.toggle || this.state.isBetween
              ? this.props.from
              : this.props.to
          }
          to={
            this.state.toggle && !this.state.isBetween
              ? this.props.to
              : this.props.from
          }
        >
          {(props: DS) =>
            (this.props.renderAnimatedTab &&
              this.props.renderAnimatedTab(props)) ||
            (this.props.renderTab && this.props.renderTab()) || null
          }
        </Spring>
      )
    } else {
      if (this.props.renderTab) {
        this.props.renderTab()
      }
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Spring
          config={{ ...config.stiff, duration: this.props.duration }}
          from={{
            width: this.state.toggle ? '0%' : '100%',
          }}
          to={{ width: this.state.toggle ? '100%' : '0%' }}
          delay={
            this.state.distance > 1
              ? (this.state.distance - 1) * this.props.duration
              : 0
          }
        >
          {({ width }: { width: number }) => (
            <View
              style={{
                position: 'absolute',
                backgroundColor: this.props.color,
                width,
                height: '100%',
                ...this._leftAndRight(),
              }}
            />
          )}
        </Spring>

        <TouchableOpacity
          onPress={this.props.onTabPress}
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {this.renderContent()}
        </TouchableOpacity>
      </View>
    )
  }
}
