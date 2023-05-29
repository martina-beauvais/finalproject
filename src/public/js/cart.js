const deleteItem = document.getElementById('deleteItem');
deleteItem.addEventListener('click', async evt => {
    evt.preventDefault();
    await fetch('/api/carts/deleteProduct', {
        method: 'POST',
    }).then(result => result.json()).then(json => {
        if (json.status === 'success') {
            console.log(json);
        }
    });
})