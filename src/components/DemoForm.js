import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            select:'',
            textArea:'',
            radio:'',
            checkbox:''



        }
    }
    
    handleUserChange = event => {
        this.setState({
            username: event.target.value,


        })
    }
    handleSelectChange = event => {
        this.setState({
            select: event.target.value,


        })
    }
    handleTextareaChange = event => {
        this.setState({
            textArea: event.target.value,


        })
    }
    handleRadioChange = event => {
        this.setState({
            radio: event.target.checked,


        })
    }
    handleCheckboxChange = event => {
        this.setState({
            checkbox: event.target.checked,


        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.username)
        console.log(this.state.select)
        console.log(this.state.textArea)
        console.log(this.state.radio)
        console.log(this.state.checkbox)
     document.getElementById("details").innerHTML=`Status : Username : ${this.state.username} , Select : ${this.state.select} , TextArea : ${this.state.textArea} , Radio : ${this.state.radio} , Checkbox : ${this.state.checkbox}`
    
    }

    render() {
        return (
            
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={this.state.username} onChange={this.handleUserChange} />
                    <label htmlFor="select">select an option</label>
                    <select name="pets" id="pet-select" value={this.state.select} onChange={this.handleSelectChange}>
                       <option value="">--Please choose an option--</option>
                       <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                         </select>
                         <label htmlFor="textArea">write a story</label>
                         <textarea id="story" name="story"
                            rows="5" cols="33" value={this.state.textArea} onChange={this.handleTextareaChange}>
                         </textarea>
                         <label htmlFor="radio">click me</label>
                         <input type="radio" value={this.state.radio} onChange={this.handleRadioChange}/>
                         <label htmlFor="checkbox">Check</label>
                         <input type="checkbox" value={this.state.checkbox} onChange={this.handleCheckboxChange}/>
                    {/* textarea, select, radio, checkbox */}
                    {/* React Final Form */}
             
                </div>
                <button type="submit">Submit</button>
                <h1 id="details" >hello!</h1>
            </form>
        )
    }
}

export default DemoForm
