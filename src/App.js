// import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import axios from "axios";
import { Form } from "react-bootstrap"
<link rel="stylesheet" href="form.css" ></link>



// <!-- Latest compiled andinified  -->



function App() {

  const [userFeedback, setUserFeedback] = useState("");
  // const [result, setResult] = useState([]);
  // let result;

  let positive;

  let negative;
  const [like, setlike] = useState("1")
  const [resultpositive, setResultpositive] = useState([]);
  const [resultnegative, setResultnegative] = useState([]);
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

            console.log(res.data);

            // setResult(res.data)
            setResultpositive(res.data)
            setResultnegative()
            // result = res.data;

            positive = res.data.positive;
            negative = res.data.negative;

            // positive = result.filter(x => x.feedback == "yes");
            // negative = result.filter(x => x.feedback == "no");

            document.getElementById("123").innerHTML = `POSITIVE FEEDBACKS = ${positive.length} `;

            document.getElementById("44").innerHTML = `NEGATIVE FEEDBACKS = ${negative.length} `;


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
    e.preventDefault();
    api();

  };


  return (

    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h1>Feedback</h1>
        <p>
          Please provide your feedback below:
        </p>
        <Form role="form" method="post" id="reused_form">
          <div class="row">
            <div class="col-sm-12 form-group">
              <label>How do you rate your overall experience?</label>
              <p>
              <br/>
                <label class="radio-inline">
                  <input type="radio" name="experience" id="radio_experience" value="bad" />
                  {/* <i class="fa fa-frown-o fa-2x" aria-hidden="true"></i> Bad */}
                </label> &nbsp;

                <label class="radio-inline">
                  <input type="radio" name="experience" id="radio_experience" value="average" />
                  {/* <i class="fa fa-meh-o fa-2x" aria-hidden="true"></i> Just OK */}
                </label> &nbsp;

                <label class="radio-inline">
                  <input type="radio" name="experience" id="radio_experience" value="good" />
                  {/* <i class="fa fa-smile-o fa-2x" aria-hidden="true"></i> Good */}
                </label>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 form-group">
              <label for="comments">
                Comments:</label>
              <textarea class="form-control" type="textarea" id="comments"
                placeholder="" name="comments" maxlength="6000" rows="7"></textarea>
            </div>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-sm-6 form-group">
              <label for="name">
                Your Name:</label>
              <input type="text" class="form-control" id="name" name="name" required />
            </div>
            <div class="col-sm-6 form-group">
              <label for="email">
                Email:</label>
              <input type="email" class="form-control" id="email" name="email" required />
            </div>
          </div>

          <br /><br />

          <div class="row">
            <div class="col-sm-12 form-group">
              <button type="submit" class="btn btn-lg btn-warning pull-right" >
                <i class="fa fa-send-o " aria-hidden="true"></i> Send →</button>
            </div>
          </div>

        </Form>
        <div id="success_message" style={{ width: "100%", height: "100%", display: "none" }} >
          <h3>Posted your feedback successfully!</h3>
        </div>
        <div id="error_message"
          style={{ width: "100%", height: "100%", display: "none" }}>
          <h3>Error</h3>
          Sorry there was an error sending your form.

        </div>
      </div>
    </div>
  );

}




export default App;
