import { add } from "../../api/project";
import { router } from "../../lib";
import { useEffect } from "../../lib";

const AddProjectPage = () => {
    useEffect(() => {
        const addForm = document.querySelector("#add-form")
        addForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const newProject = {
                "title": document.querySelector("#title").value,
                "content": document.querySelector("#content").value,
                "image": document.querySelector("#image").value,
                "url": document.querySelector("#url").value,
                "repository": document.querySelector("#repository").value

            }
            // fetch(`http://localhost:3000/projectList`, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(newProject)
            // }).then(() => {
            //     router.navigate('/admin/project')
            // })

            add(newProject).then(() => { router.navigate('/admin/project') }) .then(() => {alert('Project added successfully')})

        })
       

    })
    return /*html*/`

<div class="alert alert-success " role="alert">
        <h2>Thêm mới</h2>
    </div>
<form class="form"action="" id="add-form" >
        <div class="mb-3">
            <label for="validationCustom01" class="form-label fw-bold">title</label>
            <input type="text" name="" id="title" class="form-control" id="validationCustom01" required placeholder ="title">
            <div class="invalid-feedback">
             không được bỏ trống
        </div>
        <div class="">
            <label for="validationCustom01" class="form-label fw-bold">content</label>
            <input type="text" name="" id="content" class="form-control" id="validationCustom01" required placeholder ="content" >
            <div class="invalid-feedback">
             không được bỏ trống
         </div>
         <div class="">
            <label for="validationCustom01" class="form-label fw-bold">image</label>
            <input type="text" name="" id="image" class="form-control" id="validationCustom01" required placeholder ="image">
            <div class="invalid-feedback">
          không được bỏ trống
      </div>
      <div class="">
            <label for="validationCustom01" class="form-label fw-bold">url</label>
             <input type="text" name="" id="url" placeholder ="http:/" class="form-control" id="validationCustom01" required >
            <div class="invalid-feedback">
       không được bỏ trống
        </div>
        <div class="">
            <label for="validationCustom01" class="form-label fw-bold">title</label>
        <input type="text" name="" id="repository" placeholder="repository" class="form-control" id="validationCustom01" required >
        <div class="invalid-feedback">
            không được bỏ trống
        </div>
        
       <button class="btn btn-danger ">Add New Project</button>

    </div>
            
        </form>
    `
}

export default AddProjectPage;