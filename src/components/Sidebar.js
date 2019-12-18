import React from 'react';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		
  }
  render() {

    return (
        <div class="col-md-3 p-0 m-0">
            <div class= "sidebar border-dark ">

              <form class="form-inline my-2 my-lg-0">
                <div class="searchy">
                  <h6>Search for Club/Society</h6>
                  <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-primary my-2 my-sm-0" type="submit">
                    <i class = "fa fa-search"></i>
                  </button>
                </div>
              </form>
              
            </div>
          </div>
    );
  }
}

export default Sidebar;
