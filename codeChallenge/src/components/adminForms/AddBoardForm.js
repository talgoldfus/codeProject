import React, { Component, PropTypes } from 'react'
import { reduxForm , addArrayValue} from 'redux-form'
import seedBoard from '../../actions/seedBoard'
import CategorySelectorContainer from '../../containers/CategorySelectorContainer'
export const fields = [ 'boardName' , 'categories[]' ]

const validate = values => {
  const errors = {}
  if (!values.boardName) {
    errors.boardName = 'Required'
  } else if (values.boardName.length > 15) {
    errors.boardName = 'Must be 15 characters or less'
  }
  return errors
}

class AddBoardForm extends Component {

  componentWillMount(){
    this.props.getCategories().then(()=>{for (let cIndex = 0; cIndex < 5; cIndex++) {
    this.props.addCategories('AddBoard','categories')}
  })

  }




  render() {

    const { fields: { categories,boardName },handleSubmit} = this.props

    return (
      <form onSubmit={handleSubmit(seedBoard)}>
        <div>
         <h4>Please choose your board name and atleast 5 categories:</h4>
          <div>
              <label>Board Name</label>
              <input type="text" placeholder="Board Name" {...boardName}/>
          </div>
            {boardName.touched && boardName.error && <div>{boardName.error}</div>}
        </div>
        <div>
        <label>Categories</label>

        </div>
           {!categories.length && <div>No Categories</div>}
           {categories.map((category, index) =>
            <div key={index}>
              <div>
                <label>Category #{index + 1}</label>
                <div>
                   <CategorySelectorContainer field={categories[index]} key={index}/>
                </div>
               </div>
               <div>
                   {categories.length>5 &&<button type="button" onClick={() => {
                     categories.removeField(index)  // remove from index
                   }}><i/> Remove
                   </button>}
              </div>
           </div>)}
           <button type="button" onClick={() => {
              categories.addField()    // pushes Category field onto the end of the array
            }}><i/>Add Category</button>
        <div>
          <button type="submit">
            Submit <i/>
          </button>
        </div>
      </form>
    )
  }
}

AddBoardForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'AddBoard',
  fields,
  validate
},null,{addCategories: addArrayValue})(AddBoardForm)
