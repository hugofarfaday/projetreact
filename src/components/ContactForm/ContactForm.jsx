import React, { Component } from 'react';

class ContactForm extends Component {

    render() {
        
        const handleFormSubmit = (evt) => {
            evt.preventDefault();
            const form = evt.target;
            const formData = new FormData(form);
            const jsonData = Object.fromEntries(formData.entries());
            // const jsonData2 = Object.fromEntries(new FormData(evt.target));
            console.log(jsonData);
          };

        return (
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        );
    }
}

export default ContactForm;