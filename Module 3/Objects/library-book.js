var book = {
    title : "The Alchemist",
    author : "Paulo Coelho",
    pages : 234,
    isAvailable : true,
    borrow : function(){
        if (this.isAvailable){
            this.isAvailable = false;
            console.log ("You Borrowd " + this.title);
        }
        else {
            console.log ("Sorry, this book has already borrowed.");
        }
    },
    returnBook : function(){
       if (!this.isAvailable){
       
        console.log("You have returned this book" + this.title); 
       }
       else{
        console.log("You can't return this book " + this.title + "Because its alredy in library.");
       }
    }

};
book.borrow();
book.returnBook();