const express = require('express');
const Item = require('../models/item.model')
const router = express.Router();

router.get('/hello',(req,res) => {
    res.send("hello world");
})

//create item
router.post('/details',async (req,res,next)=>{
  console.log(req.headers);
    const newItem = new Item({
        itemName: req.body.itemName,
        
        quantity: req.body.quantity,
        price: req.body.price,
      });
      try {
        const savedItem = await newItem.save();
        return res.status(200).json(savedItem);
      } catch (err) {
        return next(err);
      }
})



// router.post('/employees',async (req,res)=>{
//     try {
//         const payload = req.body;

//         const newEmployee = new Employees(payload);

//         await newEmployee.save((err, data)=> {
//             if(err){
//                 return res.status(400).send({message: 'Error while adding new employee. Please check the data'});
//             }

//             res.status(201).send({employeeId: data._id, message: "Employee has been added successfully." })
//         })

//     } catch (error) {
//         res.status(500).send({
//             message: "Internal Server Error"
//         })
//     }
    
// });
module.exports = router;