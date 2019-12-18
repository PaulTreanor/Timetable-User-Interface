import React from 'react';
import Timetable from './Timetable';
import Nav from './Nav';

class MainArea extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            week: 12
                        }
  }
  handler = (val) => {
    console.log(val);
    this.setState({
      week: val
    })
  }
  render() {
  
    return (
        <div>
        <Nav handler = {this.handler}/>
        <Timetable week={this.state.week}/>
        </div>
    );
  }
}

export default MainArea;
