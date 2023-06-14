import { update } from "../../api/project"
import { router, useEffect, useState } from "../../lib"

const UpdateProjectPage = ({ id }) => {
    // console.log(id);
    const [project, setProject] = useState({}) //khai báo biến project để lưu trữ data

    // call api để lấy dữ liệu và gán vào biến project
    useEffect(() => {
        fetch(`http://localhost:3000/projectList/${id}`)
            .then(response => response.json())
            .then(data => setProject(data))
    }, [])

    // thêm mới data
    useEffect(() => {
        const updateForm = document.querySelector("#update-form")
        // tìm tới form update và lắng nghe sự kiện submit
        updateForm.addEventListener("submit", (event) => {
            event.preventDefault() //chặn sự kiện reload trang
            // lấy dữ liệu từ form
            const newData = {
                "id": id,
                "title": document.querySelector("#title").value,
                "content": document.querySelector("#content").value,
                "image": document.querySelector("#image").value,
                "url": document.querySelector("#url").value,
                "repository": document.querySelector("#repository").value
            }
            // gọi api để update data
            // fetch(`http://localhost:3000/projectList/${id}`, {
            //     method: "PUT", //phương thức PUT để cập nhật data
            //     headers: {
            //         'Content-Type': 'application/json' //định dạng dữ liệu gửi đi
            //     },
            //     body: JSON.stringify(newData) //chuyển đổi dữ liệu sang định dạng json
            // }).then(() => {
            //     router.navigate("/admin/project")
            //     //sau khi update thành công thì chuyển hướng về trang quản lý
            // })

            update(newData).then(() => { router.navigate("/admin/project") }).then(() => {alert('Project update successfully')});
        })
    })
    return `
   
    <form class="form"action="" id="update-form" >
    <div class="mb-3">
        <label for="validationCustom01" class="form-label fw-bold">title</label>
        <input type="text" name="" id="title" class="form-control" id="validationCustom01" required value="${project.title}">
        <div class="invalid-feedback">
        không được bỏ trống
        </div>
    </div>
    <div class="mb-3">
        <label for="validationCustom01" class="form-label fw-bold">content</label>
        <input type="text" name="" id="content" class="form-control" id="validationCustom01" required value="${project.content}">
        <div class="invalid-feedback">
        không được bỏ trống
        </div>
    </div>
    <div class="mb-3">
        <label for="validationCustom01" class="form-label fw-bold">image</label>
        <input type="text" name="" id="image" class="form-control" id="validationCustom01" required value="${project.image}">
        <div class="invalid-feedback">
        không được bỏ trống
        </div>
    </div>
    <div class="mb-3">
        <label for="validationCustom01" class="form-label fw-bold">url</label>
        <input type="text" name="" id="url" class="form-control" id="validationCustom01" required value="${project.title}">
        <div class="invalid-feedback">
        không được bỏ trống
        </div>
    </div>
    <div class="mb-3">
        <label for="validationCustom01" class="form-label fw-bold">repository</label>
        <input type="text" name="" id="repository" class="form-control" id="validationCustom01" required value="${project.repository}">
        <div class="invalid-feedback">
        không được bỏ trống
        </div>
    </div>
    
            <button class="btn btn-danger ">update</button>
            </form>
        
    `
}

export default UpdateProjectPage