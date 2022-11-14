import React from "react";

function Form(){
    const [formData, setFormData]= React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        joinNewsLetter: true //checkbox
    })
    
     function handleSubmit(event){
    
      }

      return(
        <div className="form-container">
            <from className="form" onSubmit={handleSubmit}>
                <input 
                    value={formData.email}
                    type="email"
                    name="email"
                />
                <br>
                </br>

                <input 
                    type={formData.password}
                    name="password"
                />
                <br>
                </br>

                <input 
                    value={formData.confirmPassword}
                    name="confirmPassword"
                />
                <br>
                </br>

                <div>
                    <input 
                        type="checkbox"
                        id="okayToEmail"
                        name="joinNewsLetter"
                    />
                    <label htmlFor="okayToEmail">Do you want to join the news letter?</label>
                </div>
                    <button className="form--submit">Sign Up</button>

            </from>
        </div>
      )
}

export default Form;