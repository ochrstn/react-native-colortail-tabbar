import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ColorTailTabBar, { ColortailTabData } from 'react-native-colortail-tabbar';

const SampleIcon = (props: {opacity: number, size: number}) => <View style={{opacity: props.opacity, width: props.size, height: props.size, borderRadius: 7.5, borderWidth: 4, borderColor: '#FFFFFF'}} />;

const tabs1: ColortailTabData[] = [
  {
    color: '#e7645b',
    renderTab: (props) => <SampleIcon opacity={props.opacity} size={props.size} />
  },
  {
    color: '#ffbd73',
    renderTab: (props) => <SampleIcon opacity={props.opacity} size={props.size} />
  },
  {
    color: '#73adce',
    renderTab: (props) => <SampleIcon opacity={props.opacity} size={props.size} />
  },
  {
    color: '#e76394',
    renderTab: (props) => <SampleIcon opacity={props.opacity} size={props.size} />
  },
  {
    color: '#73d6b5',
    renderTab: (props) => <SampleIcon opacity={props.opacity} size={props.size} />
  }
];

interface State {
  activeTab: number;
}

export default class App extends Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = { activeTab: 0 };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <ColorTailTabBar
          tabs={tabs1}
          color="#5c4f71"
          activeTabIndex={this.state.activeTab}
          onTabPress={ (activeTab) => { this.setState({activeTab}); } }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});