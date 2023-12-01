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

  return props.bucket.map((item, index) => (
    // TODO: Add a className of `bucket row complete ${item.eagerness}` for completed items, and `bucket-row ${item.eagerness}` for non-completed items
    // TODO: Add a key attribute set to the value of the index position
    // Hint: use a ternary operator
    <div 
      className={
        item.isComplete
        ? `bucket-row complete ${item.eagerness}`
        : `bucket-row ${item.eagerness}`
       } 
       key={index}>

      <div key={item.id} onClick={()=> completeBucketItem(item.id)}>
        {item.text}
          {/* TODO: Add the item text here */}
      </div>
      <div className="icons">
        {console.log(item)}
        <p onClick={()=>  setEdit ({ id: item.id, value: item.text, eagerness: item.eagerness })}>✏️</p>
        {/* TODO: Add an onClick event that will invoke the removeBucketItem method passing in the `item.id` */}
        <p onClick={()=> removeBucketItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}



export default Bucket;