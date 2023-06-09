import instance from "./instance"

const getAll = () => {
    return instance.get('/projectList')
}
const getOne = (id) => {
    return instance.get(`/projectList/${id}`)
}
const remove = (id) => {
    return instance.delete(`/projectList/${id}`)
}
const add = () => { }
const update = () => { }
export { getAll, remove }