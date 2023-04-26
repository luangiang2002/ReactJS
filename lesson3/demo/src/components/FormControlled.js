import React, { Component } from 'react'

export default class FormControlled extends Component {
    constructor(props){
        super(props);
        this.state={
            studentName:"Giang",
            course:"CSS3",
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        alert("Xin chào " + this.state.studentName+" \n Course: " +this.state.course);
        
        console.log("Name: ",this.state.studentName);
        console.log("Course: ",this.state.course);
        let obj=this.state
        console.log(obj);
        this.props.onSubmit(obj)
    };
    
    handleChange=(event)=>{
        // this.setState({
        //     course:event.target.value
        // })
        // lấy tên điều khiển tương tác đang thay đổi
        let name=event.target.name;
        // lấy giá trị điều khiển khi thay đổi
        let value=event.target.value;
        // cập nhật lại trạng thái cho các thành phần trên form 
        this.setState({
            [name]:value
        })
    }
    render() {
        return (
            <div >
                <hr></hr>
                <h2>Control componrnt Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div >
                        Tên sinh viên:
                        <input value={this.state.studentName}
                        name="studentName"
                        // onChange={(ev)=>this.setState({studentName:ev.target.value})}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='course'>Chọn khóa học: 
                        <select value={this.state.course}
                        name="course"
                        onChange={this.handleChange}>
                            <option value={"html"}>HTML </option>
                            <option value={"css"}>CSS </option>
                            <option value="js">JS </option>
                            <option value="reactjs">RJS</option>
                        </select>
                        </label>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
