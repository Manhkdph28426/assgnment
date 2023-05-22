import Header from '../components/header';
import { postList } from '../dataFake'


const HomePage = () => {
    console.log(postList);
    return `
        ${Header()}

        <main>
        <div>
            ${postList.map(function (post) {
        return `
                        <div>
                            <h2>${post.title}</h2>
                            <p>${post.content}</p>
                        </div>
                    `
    }).join("")}
            </div>
        </main>
        <footer></footer>
        
    `
}

export default HomePage