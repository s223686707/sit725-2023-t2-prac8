const cardList = [{
    title: 'Subway',
    image: '/images/sub.jpeg',
    subTitle: 'Subway is known for its made-to-order submarine sandwiches (subs) and salads.Subway is known for its made-to-order submarine sandwiches (subs) and salads.Subway is known for its made-to-order submarine sandwiches (subs) and salads.',
    description: 'Subway is known for its made-to-order submarine sandwiches (subs) and salads.Customers can choose from various bread, protein, vegetable, and sauce options.Burger King is another global fast-food chain famous for its flame-grilled burgers. They offer a diverse menu with items like the Whopper (their signature burger), chicken sandwiches, salads, and a variety of sides.'
},
{
    title: 'Burger King',
    image: '/images/king.png',
    subTitle: 'Burger King is another global fast-food chain famous for its flame-grilled burgers. They offer a diverse menu with items like the Whopper (their signature burger), chicken sandwiches, salads, and a variety of sides.',
    description: 'Burger King is another global fast-food chain famous for its flame-grilled burgers. They offer a diverse menu with items like the Whopper (their signature burger), chicken sandwiches, salads, and a variety of sides.'
},
{
    title: 'Pizza Hut',
    image: '/images/download.png',
    subTitle: 'Pizza Hut is another popular pizza restaurant chain, offering a variety of pizzas, pasta, wings, and desserts. They have both dine-in and delivery options.Pizza Hut is another popular pizza restaurant chain, offering a variety of pizzas, pasta, wings, and desserts. They have both dine-in and delivery options.',
    description: 'Pizza Hut is another popular pizza restaurant chain, offering a variety of pizzas, pasta, wings, and desserts. They have both dine-in and delivery options.Pizza Hut is another popular pizza restaurant chain, offering a variety of pizzas, pasta, wings, and desserts. They have both dine-in and delivery options.Pizza Hut is another popular pizza restaurant chain, offering a variety of pizzas, pasta, wings, and desserts. They have both dine-in and delivery options.'
}];

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
                '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
                '</div><div class="card-content">'+
                '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.subTitle+'</a></p></div>'+
                '<div class="card-reveal">'+
                '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
                '<p class="card-text">'+item.desciption+'</p>'+
                '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}


$(document).ready(function(){
    $('.materialboxed').materialbox();
    addCards(cardList);
    $('.modal').modal();
});
  