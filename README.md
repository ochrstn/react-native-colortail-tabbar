# react-native-colortail-tabbar

A colorful animated tabbar for React Native, which creates a color trail when the tab changes.

<p align="center">
  <img src="https://github.com/ochrstn/react-native-colortail-tabbar/blob/master/docs/example.gif" />
</p>

## Installation

Install using npm:

```sh
npm install --save react-native-colortail-tabbar
```

Install using yarn:

```sh
yarn add react-native-colortail-tabbar
```

## Usage

```jsx
// import the library
import ColorTailTabBar, { ColortailTabData } from 'react-native-colortail-tabbar';

// define the tabs giving their color and rendering function for the icon
// see full example for ImageIcon code
const tabs = [
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
  }
]

// render the component
render() {
    return (
        <ColorTailTabBar
            // defined tabs, see above
            tabs={tabs}
            // background color of the tabbar
            color='#5c4f71'
            // currently active tab index from a source of your choice
            activeTabIndex={this.state.activeTab}
            // function that is called when a tab was pressed
            onTabPress={(index) => { this.setState({activeTab: index}); }}
            // duration in ms for the tab switch animation
            duration={200}
            // values to be animated that are passed as props to the renderAnimatedTab functions
            from={{size: 22, opacity: 0.5}}
            to={{size: 30, opacity: 1.0}}
        />
    );
}
```

## Full example

See [`example/App.tsx`](example/App.tsx) for a working demo with [`react-navigation`](https://reactnavigation.org).

## :baby: Stability / Maturity :baby:

This is in the early development phase. As such:

* The code may be refactored drastically
* Interfaces may change in a backwards-incompatible ways
* Documentation and testing may be lacking

## Built With

* [Typescript](https://maven.apache.org/) - TypeScript is a typed superset of JavaScript that compiles to plain JavaScript
* [react-spring](https://www.react-spring.io) - brings your components to life with simple spring animation primitives

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

I got inspired by this [dribbble post](https://dribbble.com/shots/2071319-GIF-of-the-Tapbar-Interactions).
