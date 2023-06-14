const menu =()=>{
    return`
    <header class="mt-4">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="logo font-bold text-3xl ">
            <a href="index.html">Fudo<strong class="text-red-500">.</strong></a>
        </div>       
            <ul class="flex items-center text-lg ">
                <li class="mr-5 text-red-500"><a href="/home">Home</a></li>
                <li class="mr-5 text-red-500"><a href="/admin/project">Admin</a></li>
                
            </ul>       
        <div class="flex">
            <button class="mr-2.5"><i class="fa-solid fa-cart-shopping hidden md:block"></i></button>
            <a href="signin.html" class="mr-2.5 p-2 border-2 border-solid border-red-500 rounded text-sm block">Sign In</a>
            <a href="signup.html" class="p-2 border-2 border-solid border-red-500 rounded bg-red-500 text-white text-sm block">Sign Up</a>
        </div>
    </div>
</header>
<section class="banner mt-8 ml-5 md:ml-0">
    <div class="max-w-7xl mx-auto ">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="banner-column mt-12">
                <span class="bg-red-200/50 text-red-400 text-lg p-2.5 rounded">Quality Food</span>
                <h2 class="text-7xl font-bold mt-5 mb-5">Fastest<br><span class="text-red-500">Delivery</span> &<br> Easy <span class="text-red-500">Pickup</span></h2>
                <p>Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
                <form action="" class="mt-5 md:w-[80%] md:w-full">
                    <input type="text" placeholder="Enter your delivery location" class="w-[75%] py-4 pl-4 outline-none text-black border border-red-500 rounded-l-lg">
                    <button class="w-[24%] px-2.5 py-[17px] bg-red-500 rounded-r-lg text-white -ml-[5px]">Discover</button>
                </form>
            </div>
            <div class="banner-column">
                <img src="https://res.cloudinary.com/dca0fvukq/image/upload/v1655049882/baiasm/Images_1_qpawcd.png" alt="" class="w-3/4 mx-auto md:float-right">
            </div>
        </div>
    </div>
    <!-- End.banner -->
    </section>
    `
}
export default menu;