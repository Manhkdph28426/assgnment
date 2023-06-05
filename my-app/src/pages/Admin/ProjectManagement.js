import { useEffect, useState } from "../../lib"

const ProjectManagementPage = () => {
    const [projects, setProject] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/projectList`)
            .then(res => res.json())
            .then(data => setProject(data))

    }, [])

    useEffect(() => {
        const btnList = document.querySelectorAll(".btn-remove")
        for (let btn of btnList) {
            const id = btn.dataset.id
            btn.addEventListener('click', () => {
                fetch(`http://localhost:3000/projectList/${id}`, {
                    method: 'DELETE'
                }).then(() => {
                    const newProjectList = projects.filter((project) => {
                        return project.id != id
                    })
                    setProject(newProjectList);
                })
            })
        }
    })
    return `
        <h1>Management Page</h1>
        <table>
        <thead>
            <tr>
            <th>Stt</th>
            <th>Project Title</th>
            <th>Project Content</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            ${projects.map((project, index) => {
        return `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${project.title}</td>
                        <td>${project.content}</td>
                        <td>
                            <button class="btn-remove" data-id="${project.id}">Delete</button>
                        </td>
                    </tr>
                `
    }).join("")}
        </tbody>
        </table>
    `
}
export default ProjectManagementPage