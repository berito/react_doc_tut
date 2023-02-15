import { useState } from "react";
export default function FormState() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "example@gmail.com",
    artwork:{
        title: 'Blue Nana',
        city: 'Hamburg',
        image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });
  //using single event handler
  function handleOnChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }
  function handleOnChangeArtwork(e) {
    setPerson({
      ...person,
      artwork:{
        ...person.artwork,[e.target.name]:e.target.value
      }
    });
  }
  function handleFirstName(e) {
    // without spread operator
    // setPerson({
    //   firstName: e.target.value,
    //   lastName: person.lastName,
    //   email: person.email,
    // });
    setPerson({ ...person, firstName: e.target.value });
  }
  function handleLasttName(e) {
    // without spread operator
    // setPerson({
    //   firstName: person.firstName,
    //   lastName: e.target.vlue,
    //   email: person.email,
    // });
    setPerson({ ...person, lastName: e.target.value });
  }
  function handleEmail(e) {
    setPerson({ ...person, email: e.target.email });
  }
  return (
    <>
      <div>
        {" "}
        <label>
          First Name{" "}
          <input
            name="firstName"
            value={person.firstName}
            placeholder="first name"
            onChange={handleOnChange}
          />
        </label>
      </div>
      <div>
        <label>
          Last Name
          <input
            name="lastName"
            value={person.lastname}
            placeholder="last name"
            onChange={handleOnChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email
          <input
            name="email"
            value={person.email}
            placeholder="email"
            onChange={handleOnChange}
          />
        </label>
      </div>
      <div>
        <label>
          Title
          <input
            name="title"
            value={person.artwork.title}
            placeholder="title"
            onChange={handleOnChangeArtwork}
          />
        </label>
      </div>
      <div>
        <label>
          City
          <input
            name="city"
            value={person.artwork.city}
            placeholder="city"
            onChange={handleOnChangeArtwork}
          />
        </label>
      </div>
      <div>
        <label>
          Image
          <input
            name="image"
            value={person.artwork.image}
            placeholder="image"
            onChange={handleOnChangeArtwork}
          />
        </label>
      </div>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
    </>
  );
}
