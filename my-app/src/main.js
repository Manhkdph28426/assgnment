import AboutPage from "./pages/About"
import HomePage from "./pages/Home"
import Navigo from 'navigo'
import NotFoundPage from "./pages/NotFoundPage"

const app = document.querySelector("#app") //tìm phần tử html có id là app

const router = new Navigo('/') //khởi tạo router từ đối tượng Navigo

const render = (content, container) => {
    return container.innerHTML = content()
}

router.on('/', () => { //sử dụng phương thức on để khai báo đường dẫn đến từng page
    return render(HomePage, app)
})
router.on('/about', () => {
    return render(AboutPage, app)
})

router.notFound(() => {
    return render(NotFoundPage, app)
})

router.resolve() //sử dụng phương thức resolve để thực thi 