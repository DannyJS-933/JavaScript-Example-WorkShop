const list = document.createElement('ul'); //creo la variable y de una vez le asigno el valor
const info = document.createElement('p');
const html = document.querySelector('html'); //queryselector mandar un elemento del tipo html en este caso o cualquier dato 

info.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui, consequatur porro consequuntur laboriosam possimus voluptatum? Voluptatem, numquam dolorem! Quis qui repellat ut quaerat neque fugiat sed, sapiente asperiores saepe!';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = () => {
    const listItem = document.createElement('li');
    const listContent = prompt('Favorite color');
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function(event) {
        event.stopPropagation();
        const listContent = prompt ('Change your color');
        this.textContent = listContent;


    };
}