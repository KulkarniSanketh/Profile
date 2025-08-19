import React from 'react'
import './contact.css'
import contactmodel from '../assets/contactmodel.webp'


function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    // Replace 'YOUR_ACCESS_KEY_HERE' with your actual Web3Forms access key
    formData.append("access_key", "be2b2366-ba03-4def-b914-74ac7e054d27");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset(); // Reset the form after successful submission
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Failed to submit form. Please try again.");
    }
  };


  return (
    <div className='contact'>
    <br />
    <h1 className='text-info'>Contact me</h1>
    <div className="container">
    <br />
      <div className="row">
        <div className="col-lg-6 left">
          <img src={contactmodel} alt="" id='contactmodel-img'/>
        </div>
        <div className="col-lg-6 right">
        <br />
          <h5>Get in Touch</h5>
          
          <form onSubmit={onSubmit}>
          <input type="hidden" name="access_key" value="be2b2366-ba03-4def-b914-74ac7e054d27"/>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" required/>
            </div>
            <br />
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="_replyto" required/>
            </div>
            <br />
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="3" name="message" required></textarea>
            </div>
            <br />
            <button type="submit" className="btn btn-primary">Send</button>
            <div className="mt-3">
                  <span className="text-light">{result}</span>
                </div>
          </form>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Contact