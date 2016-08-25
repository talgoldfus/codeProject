import $ from 'jquery'

function seedAdminAddCategoryForm(submittedInfo){

    const questions =Object.keys(submittedInfo).map((key)=>{
      if(key==="multipleOptions"){
      return submittedInfo[key].map( mOptions => {
          return mOptions
        })
      }else if (key==="openOptions") {
      return submittedInfo[key].map(oOptions => {
            return oOptions
          })
      }
    })

    return $.ajax({
      url:`http://localhost:3000/api/v1/categories`,
      type:"POST",
      data: JSON.stringify({name: submittedInfo.CategoryName}),
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    }).then(
      (category)=>{
      category = category.id
      return $.ajax({
        url:`http://localhost:3000/api/v1/questions`,
        type:"POST",
        data: JSON.stringify({open: questions[2], multiple: questions[1],category_id:category.id}),
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    })
  }).then(
    (options)=>{
      return $.ajax({
        url:`http://localhost:3000/api/v1/options`,
        type:"POST",
        data: JSON.stringify(options),
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    })}
  )

   
}

export default seedAdminAddCategoryForm
