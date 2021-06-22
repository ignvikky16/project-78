var images = ["https://i.pinimg.com/originals/c3/48/8b/c3488b3af85fb51d9224f1fa94ef9bac.jpg","https://image.shutterstock.com/image-vector/cartoon-dad-vector-clip-art-260nw-142692979.jpg","https://www.pinclipart.com/picdir/middle/525-5255157_clipart-walking-boy-school-bag-animated-school-boy.png","https://image.shutterstock.com/image-vector/illustration-cute-baby-boy-clapping-260nw-102969851.jpg"];

var names = ["rakhee kolli","chaitanya nallamothu","vikyath nallamothu","rishvik nallamothu"];

var i = 0;

function update() 
{
i++;

var number_of_family_members = 3;

if(i > number_of_family_members)
{
    i = 0
}
var update_images = images[i];

var update_names = names[i]

document.getElementById("family_member_image").src = update_images;

document.getElementById("name_of_the_family_member").innerHTML = update_names;
}