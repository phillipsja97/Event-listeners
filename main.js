const pies = [
    {
    pieName: 'Dutch Applie Pie',
    image: 'https://cincyshopper.com/wp-content/uploads/2014/09/Dutch-Apple-Pie-Recipe.jpg',
    instructorsFavorite: 'zoe',
    iceCream:'vanilla',
},

{
    pieName: 'Berry Pie',
    image: 'https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/mccormick/m/800/mixed-berry-pie.jpg',
    instructorsFavorite: 'callan',
    iceCream: 'banana',
},

{
    pieName: 'Pumpkin Pie',
    image: 'https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2016/11/Homemade-Pumpkin-Pie-1-2.jpg?resize=1360%2C2040&ssl=1',
    instructorsFavorite: 'callan',
    iceCream: 'rocky road',
},

{
    pieName: 'Shoo Fly Pie',
    image: 'https://static01.nyt.com/images/2016/09/27/dining/27COOKING-SHOOFLY-PIE2/27COOKING-SHOOFLY-PIE2-articleLarge.jpg',
    instructorsFavorite: 'michael',
    iceCream: 'none'
},

{
    pieName:'Pecan Pie',
    image: 'https://cookiesandcups.com/wp-content/uploads/2018/10/pecanpie-3.jpg',
    instructorsFavorite: 'michael',
    iceCream: 'chocolate'
},

{
    pieName: 'Keylime Pie',
    image: 'https://www.momontimeout.com/wp-content/uploads/2015/03/best-key-lime-pie-recipe-easy.jpg',
    instructorsFavorite: 'zoe',
    iceCream: 'none'
},
];

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint
};

const pieBuilder = (piesArray) => {
    for (let i = 0; i < piesArray.length; i++) {
        const pies = piesArray[i];
        const domString = `
        <div class="card">
        <h2>${pies.pieName}</h2> 
        <img src=${pies.image} alt='image of ${pies.pieName}' />
    </div>
        `
        printToDom(domString, 'pie-zone')
    };
 };

document.getElementById('cake').addEventListener('click',  () => {
    console.log('🎂 is better')
});

 pieBuilder(pies);