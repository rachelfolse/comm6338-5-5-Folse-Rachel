
const form = document.querySelector('#add-todo');
const button = document.querySelector('button')
const list = document.querySelector('#todo-list')

form.addEventListener('submit', event => {
    event.preventDefault();
    const input = form.querySelector('input[type="text"]');
    if (input.value.trim() !== '') {
        const newListItem = document.createElement('li')
        const newButtonItem = document.createElement('button')
        newListItem.appendChild(newButtonItem)
        newButtonItem.textContent = input.value;
        list.appendChild(newListItem);
        input.value = "";

        let clickCount = 0;
        newButtonItem.addEventListener('click', event => {
            clickCount++
            if (clickCount === 1) {
                newButtonItem.style.textDecoration = 'line-through'
            } else if (clickCount === 2) {
                list.removeChild(newListItem)
            }
        })
    }
})