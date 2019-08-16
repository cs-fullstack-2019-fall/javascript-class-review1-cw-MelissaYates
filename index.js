// Problem 1:
// Put the start of your program in a main function. Create a class for Books with name, rating, genre, and author.
// Create 3 instances of Books and put them in an array. Afterwards print each one in the format below:
//
//     The book [BOOK NAME] has [RATING] stars!!!

class Books{
    constructor(name, rating, genre, author){
        this.namep=name;
        this.ratingp = rating;
        this.genrep = genre;
        this.authorp = author;
    }
}

function main() {
    let book1 = new Books("Harry Potter", 3, "Mystery", "J. K. Rowling");
    let book2 = new Books("Hunger Games", 4, "Mystery", "Suzanne Collins");
    let book3 = new Books("The Diary of a Young Girl ", 5, "Non-Fiction", "Anne Frank");
    let bookList =[book1,book2,book3];
    bookList.forEach(function (eachElementInBooklist) {
        console.log("The book " + eachElementInBooklist.namep + " has "+ eachElementInBooklist.ratingp + " stars!!!");
    });
}
main();