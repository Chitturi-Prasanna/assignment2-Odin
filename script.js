console.log("hi");
const title=document.querySelector("#title");
const author=document.querySelector("#author");
const pages=document.querySelector("#pages");
const didread=document.querySelector("#read");
const addBook=document.querySelector("#addBook");
const newBook=document.querySelector("#newBook");

addBook.addEventListener("click",addabook);
const arr=[];
function addabook(){
    let bookObj={
        otitle:"",
        oauthor:"",
        opages:"",
        oread:""
    };
    bookObj.otitle=title.value;
    bookObj.oauthor=author.value;
    bookObj.opages=pages.value;
    bookObj.oread=read.value==="on"?true:false;
    if(title.value!=="" || author.value!=="" || pages.value!=="" ||read.value!=="" ){
        arr.push(bookObj);
        render();
    }
    return;

}
newBook.addEventListener("click",makenewBook);
function makenewBook(){
    let newbookform=document.querySelector("#newbookform");
    newbookform.style.display="block";
    title.value="";
    author.value="";
    pages.value="";
    didread.value="";
    return;
}
function render(){
    let lib=document.querySelector("#library");
    lib.innerHTML="";
    for (let i=0;i<arr.length;i++){
        let book=arr[i];
        let bookEl=document.createElement("div");
        bookEl.innerHTML=`<p>${(book)['otitle']}
        ${(book)['oauthor']}
        ${(book)['opages']}
        ${(book)['oread']}</p>`;
        lib.appendChild(bookEl);
    }
    return
}
