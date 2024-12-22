//Activity 1//
//Task1
const book={
    title:"Money bank",
    author:"Sahil",
    Year:2024
};
console.log(book);
//task2
console.log(book.title+" "+book.author);

//Activity 2//
//Task3
let bookIdentity=book.title+" "+book.author;
console.log(bookIdentity);
//TAsk4
book.Year=2022;
console.log(book.Year);

//Activity 3//
//Task5\
const library={
    name:"Silent library",
    books:{
        book1:"New world",
        book2:"The Eldian",
        book3:"The tale of Jiraya, the Galent"
    }
}
console.log(library);
//Task6
console.log(library.name);
console.log(library.books.book1);
console.log(library.books.book2);
console.log(library.books.book3);

//Activity 4//
//task7
const bookk={
    title:"Money bank",
    author:"Sahil",
    Year:2024,
    Fullname:function Full(){
        return this.author+" "+this.title;
    }
};
console.log(bookk.Fullname());
//Activity 5//
//Task8
for(let x in bookk){
    console.log(x);
    console.log(bookk[x]);
}
//Task9
console.log(Object.keys(bookk));
console.log(Object.values(bookk));