const product=[
    {
        id: 1,
        image: 'p1.jpg',
        title: 'Mickey Mouse',
        price: 999
    },
    {
        id: 2,
        image: 'p2.jpg',
        title: 'Empty Gatorade Bottle',
        price: 69
    },
    {
        id: 3,
        image: 'p3.jpg',
        title: 'Leftover Bread',
        price: 420
    },
    {
        id: 4,
        image: 'p4.jpg',
        title: 'Playing Cards',
        price: 333
    },
    {
        id: 5,
        image: 'p5.jpg',
        title: 'Phone Stand',
        price: 399
    },
]
const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=> {
        return(
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, price } = item;
        return (
            `<div class='box' style='background-image: radial-gradient(circle, #ffffff, #5cb55c)'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>₱ ${price}.00</h2>
                <button>Add to cart</button>
                </div>
            </div>`
        )
    }).join('')
};
displayItem(categories);