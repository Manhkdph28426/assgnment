import { router, useEffect, useState } from "../../lib"

const UpdateProjectPage = ({ id }) => {
    // console.log(id);
    const [project, setProject] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3000/projectList/${id}`)
            .then(response => response.json())
            .then(data => setProject(data))
    }, [])
    useEffect(() => {
        const updateForm = document.querySelector("#update-form")
        updateForm.addEventListener("submit", (event) => {
            event.preventDefault()
            const newData = {
                "title": document.querySelector("#title").value,
                "content": document.querySelector("#content").value
            }
            fetch(`http://localhost:3000/projectList/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newData)
            }).then(() => {
                router.navigate("/admin/project")
            })
        })
    })
    return `
        <form action="" id="update-form">
            <input type="text" placeholder="Project title" id="title" value="${project.title}"/>
            <input type="text" placeholder="Project content" id="content" value="${project.content}"/>
            <button>Update Project</button>
        </form>
    `
}

export default UpdateProjectPage