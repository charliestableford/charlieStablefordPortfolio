console.log('working');

const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// an array to hold everything. Hold state.
// the current state should always be reflected in an bject
let items = [];

// listen for submit event.

function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted!!');
    // gettig the value 
    console.log(e.currentTarget); // this is the form value
    const name = e.currentTarget.item.value; // this is the input
    // if no name dont run
    if(!name) return;
    console.log(name);

    // create an object to put into the items array
    const item = {
        name: name,
        id: Date.now(),
        complete: false,
    };
    items.push(item);
    console.log(`there are now ${items.length} in your state.`);

    // clear the form. 
    e.target.reset(); // this clears all the inputs in a current form.
    //you could display this after you add an item but its not the best way.
    displayItems();
    //custom events
    //dispatch lives on all DOM elements
    // list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function deleteItem(id) {
    console.log('delete', id);
    // update our items array without this one
    items = items.filter(item => item.id !== id);
    // console.log(items);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
    // displayItems();
  }

function displayItems(){
    // use map because for each we can return a list item
    // loop over the array of names
    console.log(items);
    const html = items.map(item =>`<li class="shopping-item">
    <span class="itemName">${item.name}</span>
    <button
      aria-label="Remove ${item.name}"
      value="${item.id}"
    >&times</button>
    </li>`).join(''); // string
    list.innerHTML = html;// set innerHTML
    // console.log(html);
}

// don't use click on forms cause it is more accessible this way.
shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);

list.addEventListener('click', function(e) {
    let id = parseInt(e.target.value);
    console.log(id);
    // console.log(e);
    if (e.target.matches('button')) {
      deleteItem(id);
    }
  });