import React from 'react';
import EditButton from './EditButton';
import LogIn from './LogIn';

class Nav extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
       isEmptyState: true,
       weekNumber: "12",
       weekList: [1,2,3,4,5,6,7,8,9,10,11,12]
                   }
  }


  selectWeek(input){
    this.setState({weekNumber:input});
  }

  handleClick(item) {
    console.log(item);
  }

  triggerAddTripState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true
    })
  }
  render() {
  
    return (
        <div className="subHeaderBar border-dark ">
            <div className="row">
              <div className="col-sm-6 text-center">
                <div className="dropdown">
                  <button className="btn btn-primary dropdown-toggle mb-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  week {this.state.weekNumber}
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {this.state.weekList.map(item => {
                      return(
                        <button key={item} className="dropdown-item" onClick = {() => this.selectWeek(item)}>Week {item}</button>                        
                      )
                    })}
                  </div>
                </div>
              </div>
              <div class="col-sm-6 text-center">
                {this.state.isEmptyState && <EditButton addTrip={this.triggerAddTripState} />}
                {this.state.isAddTripState && <LogIn />}
              </div>
            </div>
          </div>
    );
  }
}

export default Nav;
