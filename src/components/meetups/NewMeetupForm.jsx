import { useRef } from "react";

import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const adddressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = adddressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    console.log(meetupData);
    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Address</label>
          <input type="text" required id="address" ref={adddressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.action}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
