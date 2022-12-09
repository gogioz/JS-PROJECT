


var books=new XMLHttpRequest();
var cart=[];

books.open('GET','https://api.itbook.store/1.0/search/java');
books.send();
books.onreadystatechange=function() 
{
    
    if(books.readyState==4 && books.status==200)
    {
        console.log(books.responseText);
        var x=localStorage.getItem("dwd")||[];
        console.log(x);

    var arrBooks=JSON.parse(books.responseText).books;
    console.log(arrBooks);
    for(var i=0;i<arrBooks.length;i++)
    {
        var newdiv=document.createElement("div");
       var img=document.createElement("img");
       var title=document.createElement("h3");
       var price=document.createElement("span");
        var add=document.createElement('div');
        var obj= JSON.stringify( arrBooks[i]);
      //  add.innerHTML=`<button onclick='add(${obj})'>add</button>`
        
       
        img.src=arrBooks[i].image;
        title.innerText=arrBooks[i].title;
        price.innerText=arrBooks[i].price;
        
        newdiv.appendChild(img);
        newdiv.appendChild(title);
        newdiv.appendChild(price);
        newdiv.appendChild(add);
        newdiv.setAttribute("class","card");
        document.body.appendChild(newdiv);
    }
    }
}




const searchInput = document.getElementById("searchInput");


const namesFromDOM = document.getElementsByClassName("card");


searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target;
    
   
    const searchQuery = value.toLowerCase();
    
    for (const nameElement of namesFromDOM) {
        
        let name = nameElement.textContent.toLowerCase();
        
        
        if (name.includes(searchQuery)) {
           
            nameElement.style.display = "block";
        } else {
            
            nameElement.style.display = "none";
        }
    }
});
