import { useState } from "react";
export default function Form() {
  // let [fullName, setFullName] = useState("");
  // let [userName, setUserName] = useState("");

  //for multiple inputs we done define state for each input this is all in one
  let [formData, setFormdata] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  // let handelNameChange = (event) => {
  //   setFullName(event.target.value);
  // };
  // let handelUserName = (event) => {
  //   setUserName(event.target.value);
  // };

  let handelInputChange = (event) => {
    let fieldName = event.target.name;
    let newVal = event.target.value;

    setFormdata((currData) => {
      //to access any fieldname inside any object we use this computed property value instead of using currData.fieldName in react
      currData[fieldName] = newVal;
      return { ...currData };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormdata({
      fullName: "",
      userName: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input
        placeholder="enter name"
        type="text"
        value={formData.fullName}
        onChange={handelInputChange}
        id="fullName"
        name="fullName"
      ></input>

      <br></br>
      <br></br>

      <label htmlFor="userName">UserName</label>
      <input
        placeholder="enter name"
        type="text"
        value={formData.userName}
        onChange={handelInputChange}
        id="userName"
        name="userName"
      ></input>

      <br></br>
      <br></br>

      <label htmlFor="password">PassWord</label>
      <input
        placeholder="enter password"
        type="password"
        value={formData.password}
        onChange={handelInputChange}
        id="password"
        name="password"
      ></input>

      <br></br>
      <br></br>
      
      <button>Submit</button>
    </form>
  );
}
