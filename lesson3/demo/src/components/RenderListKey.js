import React from 'react'

export default function RenderListKey() {
    const number = [11, 23, 43, 21];
    const ElementNumber = number.map((num) => {
        return <span>{num * num} ;</span>
    })
    // tạo mảng đối tượng
    const Students = [
        { id: "100", name: "Quốc Dân", age: 20 },
        { id: "200", name: "Dân Lập", age: 12 },
        { id: "300", name: "Tiến Dương", age: 29 }
    ];
    // tạo danh sách
    const ElementStudent = Students.map((item, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                    <button>xem</button>
                    <button>sửa</button>
                    <button>xóa</button>

            </tr>
        )
    })
    return (
        <div>
            <hr></hr>
            <h2>Render dữ liệu từ mảng, đối tượng</h2>
            <div>
                {ElementNumber}
            </div>
            <table border={"1px"} align='center'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>MÃ sinh viên</th>
                        <th>Họ tên</th>
                        <th>Tuổi</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                  {ElementStudent}
                </tbody>
            </table>
        </div>
    )
}
