import Header from '../components/header';
// import { projectList } from '../dataFake'
import menu from '../components/menu';
import product from '../components/product';
import footer from '../components/footer';


const HomePage = () => {
    // console.log(postList);
    return `
       
        ${menu()}
        ${product()}
        ${footer()}

    `
}

export default HomePage