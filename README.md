# React Animdated Gradient Overlay

![alttext](https://github.com/danieldram/react-animated-gradient-overlay/blob/master/example/example.gif?raw=true)

# About the project
Currently there is no CSS solution for gradient animations. This react-component works by allowing the user to set the gradient colors, the basic direction, transition time and opacity of the gradient and then wrap child images or nodes and have the gradients transition over it. 

### This is still a work in progress and is subject to change!
This is currently being used on http://www.playthis.io for the animated gradient background. If you like some of the code so far, please feel free to fork the repo and extend, I will be adding more code and fixing bugs as I continue to use this in the project and through iterations it will have different internals and also be more performant. Expect things to change! 

### Not on NPM, yet 
This is not on NPM yet, but will be once it has been developed a bit further. 

#### API
```js
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.oneOf(["radial", "linear"]),
        direction: PropTypes.oneOf(["left, right, bottom, top"]),
        colors: PropTypes.arrayOf(PropTypes.array),
        transition: PropTypes.number,
    }   
```

### EXAMPLE
```html
<GradientOverlay 
      direction={"bottom"} 
      colors={[
      ["red", "transparent"],
      ["green", "transparent"],
      ["yellow", "transparent"]]} 
      transition={5}
      opacity={0.8} >
      <img src={"https://avatarfiles.alphacoders.com/837/83743.jpg"} />
    </GradientOverlay>
```

# Enjoy