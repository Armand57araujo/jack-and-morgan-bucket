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
    props.editBucketItem(edit.id, edit);
    setEdit({
      id: null,
      value: '',
      eagerness: '',
    
    })
  };
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }
  const updatedBucket = props.bucket.map((item) => (item.id === edit.id ? edit : item)
  );
    // TODO: Set the key:value pairs in the `edit` object back to empty strings
const completeBucketItem = (id) => {
  let updatedBucket = props.bucket.map((item) => {
    if (item.id === id) {
      item.completed = !item.completed;
    }
    return item;
  });
  props.setBucket(updatedBucket);
  };

const removeBucketItem = (id) => {
  let updatedBucket = [...props.bucket].filter((item) => item.id !== id);
  props.setBucket(updatedBucket);
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

      // TODO: Add an onClick event that invokes the `completeBucketItem` method passing the item id as a argument
      <div key={index} onClick={()=> completeBucketItem(item.id)}>
        {item.text}
          {/* TODO: Add the item text here */}
      </div>
      <div className="icons">
        // TODO: Add an onClick event update the `edit` object with the `id`, `value`, and `eagerness` properties
        <p onClick={()=>  setEdit ({ id: item.id, value: item.text, eagerness: item.eagerness })}>✏️</p>
        {/* TODO: Add an onClick event that will invoke the removeBucketItem method passing in the `item.id` */}
        <p onClick={()=> removeBucketItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}



export default Bucket;