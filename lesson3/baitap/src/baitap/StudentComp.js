import React, { Component } from 'react'

export default class StudentComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
                { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
                { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" }
            ],
        }
    }
    handleChange = () => {
        let check = !this.state.sex;
        this.setState({
            sex: check,
        })

    }
    render() {
       
        const ElementStudent = this.state.students.map((item, index) => {
            let gender = this.state.sex ? "Nam" : "Nữ"
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.studentId}</td>
                    <td>{item.studentName}</td>
                    <td>{item.age}</td>
                    <td>{item.sex}
                        <input type='checkbox' id="gt"
                            onChange={this.handleChange}
                            
                        ></input>
                        <label htmlFor=''>{gender}</label>
                    </td>
                    <td>{item.birthDate}</td>
                    <td>{item.birthPlace}</td>
                    <td>{item.address}</td>
                    <td>
                        <button>xem</button>
                        <button>sửa</button>
                        <button>xóa</button>
                    </td>

                </tr>
            )
        })

        return (
            <div>
                <h2>Danh dách bảng sinh viên</h2>
                <table border={"1px"} align='center' cellPadding={"5px"} cellSpacing={"5px"}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã sinh viên</th>
                            <th>Họ tên</th>
                            <th>Tuổi</th>
                            <th>Giới tính</th>
                            <th>Ngày sinh</th>
                            <th>birthPlace</th>
                            <th>address</th>
                            <th>chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ElementStudent}
                    </tbody>
                </table>
            </div>
        )
    }
}
