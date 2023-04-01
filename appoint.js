const tableBox = document.querySelector('.tableBox')
let formData = [];

function handleData(e) {
  var name = document.sample.name.value;
  var email = document.sample.email.value;
  var purposeofappointment = document.sample.subject.value;
  var mobnumber = document.sample.number.value;
  var department = document.sample.department.value;
  var date = document.sample.date.value;
  var time = document.sample.time.value;

  let obj = {
    name: name,
    email: email,
    purposeofappointment: purposeofappointment,
    mobnumber: mobnumber,
    department: department,
    date: date,
    time: time
  }



  //set to local storage
  if (localStorage.getItem("note") === null) {
    const noteArray = [];
    noteArray.push(obj)
    localStorage.setItem("note", JSON.stringify(noteArray))
  } else {
    let noteArray = JSON.parse(localStorage.getItem("note"));
    noteArray.push(obj)
    localStorage.setItem("note", JSON.stringify(noteArray))
  }


  alert("appointment created successfully")
}




function fetchData() {

  const data = JSON.parse(localStorage.getItem("note")) || [];
  let str = "";
  data?.map((i, index) => {
    str += `
      <tr>
      <th scope="row">${index + 1}</th>
      <td>${i.name}</td>
      <td>${i.email}</td>
      <td>${i.purposeofappointment}</td>
      <td>${i.mobnumber}</td>
      <td>${i.department}</td>
      <td>${i.date}</td>
      <td>${i.time}</td>
      <td  >
      <button class="btn btn-danger" onclick="deleteData(${index})">Delete</button>
      </td>
   
    </tr>
      `
  })

  tableBox.innerHTML = str;

}




window.addEventListener("DOMContentLoaded", () => {
  fetchData();
})

function deleteData(id) {
  console.log(id);
  const data = JSON.parse(localStorage.getItem("note"));
  const filterData = data?.filter((d, index) => id !== index);
  localStorage.setItem("note", JSON.stringify(filterData));
  fetchData();

}

