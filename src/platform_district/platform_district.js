import React from "react";
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";

let sel;

function setup() {
  textAlign(CENTER);
  background(200);
  sel = createSelect();
  sel.position(10, 10);
  sel.option('pear');
  sel.option('kiwi');
  sel.option('grape');
  sel.selected('kiwi');
  sel.changed(mySelectEvent);
}

function mySelectEvent() {
  let item = sel.value();
  background(200);
  text('It is a ' + item + '!', 50, 50);
}

class Platform_District extends React.Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default withRouter(Platform_District);
