import React, { Component } from 'react'
import { Link } from 'react-router'
// import AddCategoryContainer from '../containers/addCategoryContainer'
// import AddBoardContainer from '../containers/AddBoardContainer'


class Admin extends Component {
  render() {
    return (
      <div>
        <div className="center">
            <h2>Welcome to the admin pannel</h2>
            <button>
              <Link to={`/admin/addCategory`}>Add Category</Link>
            </button>
            <button>
              <Link to={`/admin/addBoard`} >Add Board</Link>
            </button>
            {this.props.children}
        </div>
      </div>
    )
  }

}


export default Admin
