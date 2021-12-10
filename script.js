function Book(title, price) {
    this.title = title;
    this.autor = price;
}

function UI() { }

UI.prototype.addBookToList = function () {
    const list = document.getElementById("book-list");
    // create an element
    const row = document.createElement('tr');
    // insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.price}</td>
    `;

    list.appendChild(row);
}

document.getElementById('bookForm').addEventListener('submit',
    function (e) {
        const title = document.getElementById("booksList").value;
        const price = document.getElementById("price").value;
        
        Book(title, price);
        
        const ui = new UI();


        e.preventDefault();
    }
);




