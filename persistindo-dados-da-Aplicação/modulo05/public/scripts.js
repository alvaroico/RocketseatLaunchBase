const currentPage = location.pathname
const menuItens = document.querySelectorAll("header .links a")

for (item of menuItens){
    if (currentPage.includes(item.getAttribute("href"))){
        item.classList.add("active")
    }
}

// Paginação
// totalPage = 20 
// selectedpage = 15
// [1, ..., 13, 14, 15, 16, 17, ..., 20 ]

let totalPage = 20,
selectedPage = 15.
pages = []
 for (let currentPage = 1; currentPage <= totalPage; currentPage++) {

    const firstAndLastPage = currentPage == 1 || currentPage == totalPage
    const pagesAfterSelectedPage = currentPage <= selectedPage + 2
    const pagesBeforeSelectedPage = currentPage >= selectedPage - 2

     if(firstAndLastPage || pagesBeforeSelectedPage && pagesAfterSelectedPage){
         pages.push(currentPage)
     }
 }

 console.log(pages)