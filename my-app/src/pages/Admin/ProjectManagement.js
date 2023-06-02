import { useEffect, useState } from "../../lib"

const ProjectManagementPage = () => {
    const [projects, setProject] = useState([])
    // [] -> [{},{}...]

    useEffect(() => {
        fetch('http://localhost:3000/projectList')
            .then((response) => {
                return response.json()
            })
            .then((data) => setProject(data))
    }, [])
    console.log(projects);

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
                        <td></td>
                        <td></td>
                    </tr>
                `
    }).join("")}
        </tbody>
        </table>
    `
}
export default ProjectManagementPage