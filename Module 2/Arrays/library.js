const libraryBooks = [
    "The Alchemist",
    "The Monk Who Sold His Ferrari",
    "The Secret",
    "The Power of Now",
    "The 7 Habits of Highly Effective People"
];

let bookListHTML = "<ul>";
for (let book = 0; book < libraryBooks.length; book++) {
    bookListHTML += "<li>" + libraryBooks[book] + "</li>";
}
bookListHTML += "</ul>";

document.getElementById("booklist").innerHTML = bookListHTML;