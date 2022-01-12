// import logo from './logo.svg';
import React, { useState, useContext } from "react";
import './App.css';
import axios from "axios";
import { Form, Button } from "react-bootstrap"


// <!-- Latest compiled andinified  -->



function App() {

  const [userFeedback, setUserFeedback] = useState("");
  // const [result, setResult] = useState([]);
  let result;

  let positive;

  let negative;

  // const [result, setResult] = useState([]);
  // let positive;
  // let negative;

  function api() {


    axios
      .post("https://kinderland-apis.herokuapp.com/get-user-feedback", {
        feedback: userFeedback,
      })
      .then((response) => {
        // console.log(response.data);
        //CALLING SECOND API AFTER THE SUCCESS OF FIRST API //AS YOU WERE ASKING
        axios
          .get('https://kinderland-apis.herokuapp.com/get-result')

          .then((res) => {

            // console.log(res.data);


            result = res.data;

            positive = res.data.positive;
            negative = res.data.negative;

            // positive = result.filter(x => x.feedback == "yes");
            // negative = result.filter(x => x.feedback == "no");

            document.getElementById("1").innerHTML = `POSITIVE FEEDBACKS = ${positive.length} `;

            document.getElementById("0").innerHTML = `NEGATIVE FEEDBACKS = ${negative.length} `;


            //  console.log(positive);

            //  console.log(negative);

            // negative = response.data.negative;

          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        // setdone(false);
        console.log(error.response.data.message);
        console.log(error);
      });

  }

  const HandleSubmit = (e) => {
    // e.preventDefault();
    api();

  };


  return (
    <div className="App">

      <h1 >do you like the XYZ product</h1>

      {/* <select class="Form-select" aria-label="Default select example">
        <option value="1">YES</option>
        <option value="0">NO</option>

      </select> */}


      <Form onSubmit={HandleSubmit}>
        <div className="for_input text-white my-5">
          {/* <Form.Label>
            USER FEEDBACK
            <span className="fw-bolder" style={{ color: "white" }}>
              *
            </span>{" "}
          </Form.Label> */}
                    <br></br>

          <Form.Control
            // type="email"
            placeholder="feedback"
            //SETTING VALUE FOR EMAIL IN RECAT HOOK STATE AS MENTION ABOVE
            onChange={(e) => setUserFeedback(e.target.value)}
            required
          />
          <br></br>
          <br></br>

          <Button
            type="submit"
            className="primary"
          // onClick={() => {
          //   navigate("/StepOne");
          // }}
          >
            SUBMIT
          </Button>

        </div>
      </Form>

      <span id="1" class= "pos" >

      </span>

      <br></br>
      <br></br>
      <br></br>

      <span id="0" class= "neg" >

      </span>

      <br></br>
      <br></br>

    </div>
  );
}

export default App;
