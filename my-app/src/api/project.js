import instance from "./instance"

const getAll = () => {
    return instance.get('/projectList')
}
const remove = (id) => {
    return instance.delete(`/projectList/${id}`)
}
export { getAll, remove }