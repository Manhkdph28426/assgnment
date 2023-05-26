import AboutPage from "./pages/About"
import HomePage from "./pages/Home"
import Navigo from 'navigo'

const app = document.querySelector("#app") //tìm phần tử html có id là app

const router = new Navigo('/') //khởi tạo router từ đối tượng Navigo

router.on('/', () => { //sử dụng phương thức on để khai báo đường dẫn đến từng page
    return app.innerHTML = HomePage()
})
router.on('/about', () => {
    return app.innerHTML = AboutPage()
})

router.resolve() //sử dụng phương thức resolve để thực thi 