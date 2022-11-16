import React from "react";

function Form(){
    const [formData, setFormData]= React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        joinNewsLetter: true //checkbox
    })
    
     function handleChange(event){
        const {name, value, type, checked} = event.target
            setFormData(prevFormData => {
                return{
                    ...prevFormData,
                    [name]: type === "checkbox" ? checked : value
                }
            })
      }

      function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
      }

      return(
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                />
                <br>
                </br>

                <input 
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                />
                <br>
                </br>

                <input 
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                />
                <br>
                </br>

                <div>
                    <input 
                        type="checkbox"
                        id="joinNewsLetter"
                        name="joinNewsLetter"
                        checked={formData.joinNewsLetter}
                        onChange={handleChange}

                    />
                    <label htmlFor="joinNewsLetter">I want to join the newsletter?</label>
                </div>
                    <button className="form--submit">Sign Up</button>

            </form>
        </div>
      )
}

export default Form;