const product = ()=>{
    return `
    <section class="product ml-5 md:ml-0"> 
    <div class="max-w-7xl mx-auto">
        <div class="product-heading text-center">
            <h2 class="text-5xl font-bold mt-12 mb-4 ">Our Popular Dishes</h2>
            <p class="text-base">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut<br> labore et dolore magna aliqut enim ad minim </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
            <div class="product-items mb-10">
                <div class="product-items-images">
                    <a href="detail.html">
                        <img src="https://res.cloudinary.com/dca0fvukq/image/upload/v1655049881/baiasm/Mask_Group_3_qtc2q5.png" alt="">
                    </a>
                </div>
                <div class="product-items-conten">
                    <h3 class="text-red-500 text-lg my-4"><a href="detail.html">Big and Juicy Wagyu Beef Cheeseburger</a></h3>
                    <div class="flex text-sm">
                        <span class="mr-4"><i class="fa-solid fa-stopwatch"></i><span class="text-slate-500"> 30 Minutes</span></span>
                        <span><i class="fa-solid fa-utensils"></i><span class="text-slate-500"> Snack</span></span>
                    </div>
                </div>
            </div>
            <!-- End.items -->
            <div class="product-items mb-10">
                <div class="product-items-images">
                    <a href="">
                        <img src="https://res.cloudinary.com/dca0fvukq/image/upload/v1655049881/baiasm/Mask_Group_2_wpltcj.png" alt="">
                    </a>
                </div>
                <div class="product-items-conten">
                    <h3 class="text-red-500 text-lg my-4"><a href="">Fresh Lime Roasted Salmon</a></h3>
                    <div class="flex text-sm">
                        <span class="mr-4"><i class="fa-solid fa-stopwatch"></i><span class="text-slate-500"> 30 Minutes</span></span>
                        <span><i class="fa-solid fa-utensils"></i><span class="text-slate-500"> Fish</span></span>
                    </div>
                </div>
            </div>
            <!-- End.items -->
            <div class="product-items mb-10">
                <div class="product-items-images">
                    <a href="">
                        <img src="https://res.cloudinary.com/dca0fvukq/image/upload/v1655049880/baiasm/Mask_Group_5_xfk9ri.png" alt="">
                    </a>
                </div>
                <div class="product-items-conten">
                    <h3 class="text-red-500 text-lg my-4"><a href="">The Best Easy One Pot Chicken and Rice</a></h3>
                    <div class="flex text-sm">
                        <span class="mr-4"><i class="fa-solid fa-stopwatch"></i><span class="text-slate-500"> 30 Minutes</span></span>
                        <span><i class="fa-solid fa-utensils"></i><span class="text-slate-500"> Snack</span></span>
                    </div>
                </div>
            </div>
            <!-- End.items -->
            <div class="product-items mb-10">
                <div class="product-items-images">
                    <a href="">
                        <img src="https://res.cloudinary.com/dca0fvukq/image/upload/v1655049880/baiasm/Mask_Group_1_uxwujd.png" alt="">
                    </a>
                </div>
                <div class="product-items-conten">
                    <h3 class="text-red-500 text-lg my-4"><a href="">Fresh and Healthy Mixed Mayonnaise </a></h3>
                    <div class="flex text-sm">
                        <span class="mr-4"><i class="fa-solid fa-stopwatch"></i><span class="text-slate-500"> 30 Minutes</span></span>
                        <span><i class="fa-solid fa-utensils"></i><span class="text-slate-500"> Snack</span></span>
                    </div>
                </div>
            </div>
            <!-- End.items -->
            <div class="product-items mb-10">
                <div class="product-items-images">
                    <a href="">
                        <img src="https://res.cloudinary.com/dca0fvukq/image/upload/v1655049881/baiasm/Mask_Group_2_wpltcj.png" alt="">
                    </a>
                </div>
                <div class="product-items-conten">
                    <h3 class="text-red-500 text-lg my-4"><a href="">The Creamiest Creamy Chicken </a></h3>
                    <div class="flex text-sm">
                        <span class="mr-4"><i class="fa-solid fa-stopwatch"></i><span class="text-slate-500"> 30 Minutes</span></span>
                        <span><i class="fa-solid fa-utensils"></i><span class="text-slate-500"> Healthy</span></span>
                    </div>
                </div>
            </div>
            <!-- End.items -->
            <div class="product-items mb-10">
                <div class="product-items-images">
                    <a href="">
                        <img src="https://res.cloudinary.com/dca0fvukq/image/upload/v1655049881/baiasm/Mask_Group_4_dtz9h2.png" alt="">
                    </a>
                </div>
                <div class="product-items-conten">
                    <h3 class="text-red-500 text-lg my-4"><a href="">Fruity Pancake with Orange & Blueberry</a></h3>
                    <div class="flex text-sm">
                        <span class="mr-4"><i class="fa-solid fa-stopwatch"></i><span class="text-slate-500"> 30 Minutes</span></span>
                        <span><i class="fa-solid fa-utensils"></i><span class="text-slate-500"> Noodles</span></span>
                    </div>
                </div>
            </div>
            <!-- End.items -->
        </div>
    </div>
</section>
<section class="categories mt-4 ml-5 md:ml-0">
    <div class="max-w-7xl mx-auto">
        <div class="categories-heading flex justify-between items-center">
            <h2 class="text-5xl font-bold">Categories</h2>
            <a href="" class="px-4 py-2.5 border border-solid border-red-400 rounded text-red-500 hidden md:block">View All Categories</a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-8 mt-20">
            <div class="categories-items">
                <div class="categories-items-images">
                    <a href="">
                        <img class="block mx-auto" src="https://res.cloudinary.com/dca0fvukq/image/upload/v1655050415/baiasm/Group_879_lyjqqs.png" alt="">
                    </a>
                </div>
                <h3 class="text-lg pr-8 font-bold text-center"><a href="">Breakfast</a></h3>
            </div>
            <!-- End.categories items -->
            <div class="categories-items">
                <div class="categories-items-images">
                    <a href="">
                        <img class="block mx-auto" src="https://res.cloudinary.com/dca0fvukq/image/upload/v1655050415/baiasm/Group_891_ugysxd.png" alt="">
                    </a>
                </div>
                <h3 class="text-lg pr-8 font-bold text-center"><a href="">Vegan</a></h3>
            </div>
            <!-- End.categories items -->
            <div class="categories-items">
                <div class="categories-items-images">
                    <a href="">
                        <img class="block mx-auto" src="https://res.cloudinary.com/dca0fvukq/image/upload/v1655050415/baiasm/Group_894_sysiqd.png" alt="">
                    </a>
                </div>
                <h3 class="text-lg pr-8 font-bold text-center"><a href="">Meat</a></h3>
            </div>
            <!-- End.categories items -->
            <div class="categories-items">
                <div class="categories-items-images">
                    <a href="">
                        <img class="block mx-auto" src="https://res.cloudinary.com/dca0fvukq/image/upload/v1655050415/baiasm/Group_890_zoeh8z.png" alt="">
                    </a>
                </div>
                <h3 class="text-lg pr-8 font-bold text-center"><a href="">Dessert</a></h3>
            </div>
            <!-- End.categories items -->
            <div class="categories-items">
                <div class="categories-items-images">
                    <a href="">
                        <img class="block mx-auto" src="https://res.cloudinary.com/dca0fvukq/image/upload/v1655050416/baiasm/Group_892_cwgire.png" alt="">
                    </a>
                </div>
                <h3 class="text-lg pr-8 font-bold text-center"><a href="">Lunch</a></h3>
            </div>
            <!-- End.categories items -->
            <div class="categories-items">
                <div class="categories-items-images">
                    <a href="">
                        <img class="block mx-auto" src="https://res.cloudinary.com/dca0fvukq/image/upload/v1655050415/baiasm/Group_893_aw4rj7.png" alt="">
                    </a>
                </div>
                <h3 class="text-lg pr-8 font-bold text-center"><a href="">Chocolate</a></h3>
            </div>
            <!-- End.categories items -->
        </div>
    </div>
</section>
    `
}
export default product;