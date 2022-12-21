import React, { useState } from 'react';

export default function Test() {
  // Declare a new state variable, which we'll call "items"
  const [items, setItems] = useState([]);
  const [product,setProduct] = useState([])

  const [productName,setProductName] = useState(null)

  // Add an item to the array
  const addItem = () => {
    setItems([...items, { id: items.length, value: Math.random() * 100 }]);
  };

  // Remove an item from the array
  const removeItem = index => {
    setItems(items.filter((item, i) => i !== index));
  };
  let number = 1
  const addProduct = () => {
    const data = {
      marketing : {
        way : productName,
        export : 'ส่งออก',
        maketPlace : 'ค่อนข้างดี'
      },
      recivery:{
        product : 'เก็บในร่ม',
        pre_product : 'แช่เย็น',
        capacity : 'โกดัง'
      }
    }
    setProduct([...product,data])
    console.log(product)
  }

  return (
    <div>
      <button onClick={() => {setProductName('เป็ด')}}>Add item</button>
      <button title='Test' onClick={addProduct}>test</button>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.value}
            <button onClick={() => removeItem(index)}>Remove</button>
           
          </li>
        ))}
      </ul>
    </div>
  );
}
