import React, { Component } from 'react'
import AddCategoryContainer from '../containers/addCategoryContainer'
import AddBoardContainer from '../containers/AddBoardContainer'


class Admin extends Component {
  render() {
    return (
      <div>
        <div className="center">
            <AddBoardContainer />
        </div>
      </div>
    )
  }

}


export default Admin
