const mongoose = require('mongoose');

//Schema definition
const itemSchema = new mongoose.Schema({
    
  itemName: {
        type: String,
        required: true,
        trim: true,
        //enum: ['Pizza', 'Tacos','Burger','Nachos' ]
      },
      quantity: {
        type: Number,
        required: true,
        //trim: true
       
      },
      price: {
        type: Number,
        required: true,
        //trim: true

      },
    });

   
//Model creation
module.exports = mongoose.model('Item', itemSchema);

// {
//   text: "Pizza",
//   img: pizzaImg,
//   desc:"Thin Crust Veggie Pizza with Extra Cheese",
//   added: false,
//   price: 11.18,
//   qty: 0,
//   id: 1
// },
// {
//   text: "Tacos",
//   img:tacosImg,
//   desc: "Crunchy tacos with creamy dip",
//   added: false,
//   price: 10.20,
//   qty: 0,
//   id: 2
// },
// {
//   text: "Burger",
//   img:burgerImg,
//   desc:"Creamy CheeseFilled Chicken Burger",
//   added: false,
//   price: 9.18,
//   qty: 0,
//   id: 3
// },
// {
//   text: "Nachos",
//   img:nachosImg,
//   desc:"Crispy Triple Layer Nachos",
//   added: false,
//   price: 10.18,
//   qty: 0,
//   id: 4
// },