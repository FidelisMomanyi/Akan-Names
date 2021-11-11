let daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let namesOfMale = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
let namesOfFemale = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama",]
function validateForm() {
    let year = document.form["akanName"]["Year"].info;
    let month = document.form["akanName"]["Month"].info;
    let day = document.form["akanName"]["Day"].info;
    if (Year == "" || Month == "" || Day == ""){
        console.log()
        alert("Please fill all the form details correctly");
        return false;
    }else{
        getUserInput()
    }
    }
