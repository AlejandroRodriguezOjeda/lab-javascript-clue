// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: `Jacob`,
        lastName: `Green`,
        occupation: `Entrepeneur`,
        age: 45,
        description:`He has a lot of connections`,
        image: `https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg`,
        color: `Green`
},
{
    firstName: `Doctor`, //QUIEN SE LLAMA DOCTOR LIKE WHAT, encima se apellida orchid y estudio plantas, increible personaje
    lastName: `Orchid`,
    occupation: `scientist`, // Por un momento pense que seria fontanera que se yo
    age: 26,
    description: `PhD in plant toxicology. Adopted daughter of Mr. Boddy`,
    image: `http://www.radiotimes.com/uploads/images/Original/111967.jpg`,
    color: `white`
},
{
    firstName:`Victor`,
    lastName:`Plum`,
    occupation:`Designer`,
    age:22,
    description:`Billionare Video game designer`, //Ojala yo
    image:`https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg`,
    color:`Purple`
},
{
    firstName:`Kassandra`,
    lastName:`Scarlet`,
    occupation:`Actor`,
    age: 31,
    description:`She is an A-list movie star with a dark past`,
    image:`https://www.radiotimes.com/uploads/images/Original/111967.jpg`,
    color:`Red`
},
{
    firstName:`Eleanor`,
    lastName:`Peacock`,
    occupation:`Socialité`,
    age:36,
    description:`She is from a wealthy family and uses her status and money to earn popularity`,
    image:`https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg`,
    color:`Blue`
},
{
    firstName:`Jack`,
    lastName:`Mustard`,
    occupation:`Retired football player`,//No era un coronel?.....
    age:62,
    description:` He is a former football player who tries to get by on his former glory`,
    image:`https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg`,
    color:`Yellow`
}

]



// Rooms Array

const roomsArray = [
    {name:`Dining room`},
    {name:`conservatory`},
    {name:`Kitchen`},
    {name:`Study`},
    {name:`Library`},
    {name:`Billiard Room`},
    {name:`Lounge`},
    {name:`Ballroom`},
    {name:`Hall`},
    {name:`Spa`},
    {name:`LivingRoom`},
    {name:`Observatory`},
    {name:`Theater`},
    {name:`Guest House`},
    {name:`Patio`},
];

// Weapons Array

const weaponsArray = [
    {name:`Rope`, weight: 10},
    {name:`knife`, weight: 8},
    {name:`candlestick`,weight: 2},
    {name:`dumbell`,weight:30},
    {name:`poison`,weight:2},
    {name:`Axe`,weight:15},
    {name:`Bat`,weight:13},
    {name:`Trophy`,weight:25},
    {name:`Pistol`,weight:20},
];


// ITERATION 2

function selectRandom(array) {
if(array.lenght === 0){
    return undefined;
}

if (array.length === 1){
    return array[0]
}

const randomSelect = Math.floor(Math.random() * array.length)
return array[randomSelect];

}

function pickMystery() {

    const suspect = selectRandom(suspectsArray);
    const weapon = selectRandom(weaponsArray);
    const room = selectRandom(roomsArray);

    return{
        suspect: suspect,
        weapon: weapon,
        room: room,
}


}


// ITERATION 3

function revealMystery(mystery) {
    const{suspect,weapon,room} = mystery;
    const{firstName,lastName} = suspect
    const{name: weaponName} = weapon
    const{name: roomName} = room
    
    return `${firstName} ${lastName} killed Mr. Boddy using the ${weaponName} in the ${roomName}!`; // Se llama boddy pq es un cadaver verdad......
}


// Also, claramente no importa que salga, fue Doctor Orchid, ya que con un nombre asi yo tambien odiaria a mi padrastro 

