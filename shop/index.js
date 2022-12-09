var api = new XMLHttpRequest();

api.open('GET', "https://api.itbook.store/1.0/search/java")
api.send();

api.onreadystatechange = function () {
    if(api.readyState==4 && api.status == 200){
        var books = JSON.parse(api.responseText).books;
        console.log(books);
        // var x=localStorage.getItem("dwd")||[];
        // console.log(x);
//localStorage.setItem("products",products.responseText);
    // var arrProducts=JSON.parse(products.responseText).products;
    // console.log(arrProducts);
    for(var i=0;i<books.length;i++)
    {
        var newdiv=document.createElement("div");
        var bookImg=document.createElement("img");
        var bookTitle=document.createElement("h3");
        var bookPrice=document.createElement("p");

        newdiv.classList.add("book")
        bookImg.classList.add("bookImg")
        bookTitle.classList.add("title")
        bookPrice.classList.add("price")

        bookImg.setAttribute("src", books[i].image)
        bookImg.src=books[i].image;
        bookTitle.innerText=books[i].title
        bookPrice.innerText=books[i].price
        newdiv.appendChild(bookImg)
        newdiv.appendChild(bookTitle)
        newdiv.appendChild(bookPrice)
        var container = document.getElementById("book-container")
        container.appendChild(newdiv)
        }
    }
}