import { useState } from 'react';
import BucketForm from './BucketForm';

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  console.log(props.bucket);

  const submitUpdate = (value) => {

    // TODO: Write logic to update the `edit` value in state after a user updates an entry in the list
    // Hint: use the `setEdit` method to update the `edit` object in state
    // Hint: use the spread operator to copy the `edit` object in state
    // Hint: use the `value` argument passed into the `submitUpdate` method to update the `edit.value` property
    // Hint: use the `edit.id` property to update the `edit.id` property
    // Hint: use the `edit.eagerness` property to update the `edit.eagerness` property
    // Hint: use the `props.bucket` array to update the `props.bucket` array
    // Hint: use the `setBucket` method to update the `props.bucket` array
    // Hint: use the `map` method to loop over the `props.bucket` array
    // Hint: use a ternary operator to check if the `item.id` matches the `edit.id` property
    // Hint: if the `item.id` matches the `edit.id` property, return the `edit` object
    // Hint: if the `item.id` does not match the `edit.id` property, return the `item` object
   
    


    setEdit({
      id: null,
      value: '',
      eagerness: '',
    });
  };

    // TODO: Set the key:value pairs in the `edit` object back to empty strings
const completeBucketItem = (id) => {

  };

const removeBucketItem = (id) => {

  };

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.bucket.map((item, index) => (
    // TODO: Add a className of `bucket row complete ${item.eagerness}` for completed items, and `bucket-row ${item.eagerness}` for non-completed items
    // TODO: Add a key attribute set to the value of the index position
    // Hint: use a ternary operator
    <div className={`bucket-row ${item.eagerness}${item.completed ? ' complete': ''}`} key={index}>

      {/* { TODO: Add an onClick event that invokes the `completeBucketItem` method passing the item id as a argument} */}
      <div key={index} onClick={()=> completeBucketItem(item.id)}>
        {item.text}
          {/* TODO: Add the item text here */}
      </div>
      <div className="icons">
       {/* // TODO: Add an onClick event update the `edit` object with the `id`, `value`, and `eagerness` properties */}
        <p onClick={()=>  setEdit ({ id: item.id, value: item.text, eagerness: item.eagerness })}>✏️</p>
        {/* TODO: Add an onClick event that will invoke the removeBucketItem method passing in the `item.id` */}
        <p onClick={()=> removeBucketItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
