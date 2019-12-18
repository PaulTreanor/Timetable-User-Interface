import React from 'react';
import EditButton from './EditButton';
import LogIn from './LogIn';

class Nav extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
       isEmptyState: true,
       weekNumber: "",
       weekList: [1,2,3,4,5,6,7,8,9,10,11,12]
                   }
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
        <div class="subHeaderBar border-dark ">
            <div class="row">
              <div class="col-sm-6 text-center">
                <div class="dropdown">
                  <button class="btn btn-primary dropdown-toggle mb-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  week {this.state.weekNumber}
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {this.state.weekList.map(item => {
                      return(
                        <a class="dropdown-item" href="#">Week {item}</a>                        
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
