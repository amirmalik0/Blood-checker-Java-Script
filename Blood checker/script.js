function checkBlood() {
    const name = document.getElementById("name").value;
    const fatherName = document.getElementById("father_name").value;
    const gender = document.getElementById("gender").value;
    const bloodGroup = document.getElementById("blood_group").value;
    const resultDiv = document.getElementById("result");

    let resulttxt = [];

    switch (bloodGroup) {
        case "A+":
            resulttxt = ["A+", "A-", "O+", "O-"];
            break;
        case "A-":
            resulttxt = ["A-", "O-"];
            break;
        case "B+":
            cresulttxt= ["B+", "B-", "O+", "O-"];
            break;
        case "B-":
            resulttxt = ["B-", "O-"];
            break;
        case "AB+":
            resulttxt = ["AB+", "AB-", "A+", "A-", "B+", "B-", "O+", "O-"];
            break;
        case "AB-":
            resulttxt = ["AB-", "A-", "B-", "O-"];
            break;
        case "O+":
            cresulttxt= ["O+", "O-"];
            break;
        case "O-":
            resulttxt = ["O-"];
            break;
    }

    resultDiv.innerHTML = `
        <h2>Blood Check Results</h2>
        <p> Name: ${name}</p>
        <p>Father's Name: ${fatherName}</p>
        <p>Gender: ${gender}</p>
        <p>Blood Group: ${bloodGroup}</p>
        <p>Compatible Blood Groups: ${resulttxt.join(", ")}</p> `;
}