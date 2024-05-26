// const accessKey = "P1ja9CyQ7QgSlGr2MsgH75kOB-TZQ2lmE-hp6kImyJo"

// const searchForm = document.getElementById("search-form");
// const searchBox = document.getElementById("search-box");
// const searchResult = document.getElementById("search-result");
// const searchBtn = document.getElementById("searchBtn");
// const showMoreBtn = document.getElementById("show-more-btn");


// let keyword = "";
// let page = 1;
// searchResult.style.border = 0;

// async function searchImages(){
//     keyword = searchBox.value;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;


//     const response = await fetch(url);
//     const data = await response.json();

//     if(page == 1){
//         searchResult.innerHTML = "";
//     }




//     const results = data.results;

//     results.map((result)=>{
//         const image = document.createElement("img");
//         image.src = result.urls.small;
//         const imageLink = document.createElement("a");
//         imageLink.href = result.links.html;
//         imageLink.target = "_blank";

//         imageLink.appendChild(image);
//         searchResult.appendChild(imageLink);
//     })
//     showMoreBtn.style.display = "block";
// }


// searchBtn.addEventListener("click",()=>{
//     searchImages();
    
// })


// searchForm.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     page = 1;
//     searchImages();
// });



// showMoreBtn.addEventListener("click", ()=>{
//     page++;
//     searchImages();
// })



//unsplash.com
const accessKey = "P1ja9CyQ7QgSlGr2MsgH75kOB-TZQ2lmE-hp6kImyJo";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchBtn = document.getElementById("searchBtn");
const showMoreBtn = document.getElementById("show-more-btn");
// const showLessBtn = document.getElementById("show-less-btn");
const introSection = document.getElementById("intro-section");

let keyword = "";
let page = 1;
searchResult.style.border = 0;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if (page == 1) {
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });

    if (results.length > 0) {
        searchResult.classList.add("open");
        introSection.style.display = "none";
    } else {
        searchResult.classList.remove("open");
        introSection.style.display = "flex";
    }

    showMoreBtn.style.display = "block";
    // showLessBtn.style.display = "block";
}

searchBtn.addEventListener("click", () => {
    searchImages();
});

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});


showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
});

