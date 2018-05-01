import React from 'react'
import Enzyme , {mount, render, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

import {GradientOverlay} from "./index"

const {expect} = chai
Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

describe("<GradientOverlay/>", ()=>{
    let wrapper = false
  before(()=>{
    wrapper = mount(
      <GradientOverlay 
      direction={"bottom"} 
      colors={[["red", "transparent"],["green", "transparent"], ["yellow", "transparent"]]} 
      transition={5}
      opacity={0.8} 
      >
      <img style={{width:"100%"}} src={"https://avatarfiles.alphacoders.com/837/83743.jpg"} />
    </GradientOverlay>
    ) 
  })
  
  it("should have a div of classname grad-overlay", () => {
    expect(wrapper.contains(<div overlaygroup="grad-overlay1"></div>)).to.equal(false);
  })

})


