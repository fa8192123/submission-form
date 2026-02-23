function validator(e) {
     e.preventDefault();
     if (document.getElementById("imageInput").value == "") {
          document.getElementById("fileErr").innerHTML = "<b style='color: yellow;'>Please enter your picture</b style='color: yellow;'>"
     }
     else {
          document.getElementById("fileErr").innerHTML = "";
     }
     if (document.getElementById("name").value == "" || !(/^[A-Za-z ]+$/.test(document.getElementById("name").value))) {
          document.getElementById("nameErr").innerHTML = "<b style='color: yellow;'>Please enter a valid name</b style='color: yellow;'>";
     }
     else {
          document.getElementById("nameErr").innerHTML = "";
     }
     if (document.getElementById("Email").value == "") {
          document.getElementById("emailErr").innerHTML = "<b style='color: yellow;'>Please enter your email</b style='color: yellow;'>"
     }
     else {
          document.getElementById("emailErr").innerHTML = "";
     }
     if (document.getElementById("organization").value == "") {
          document.getElementById("organizationErr").innerHTML = "<b style='color: yellow;'>Please enter your organization</b style='color: yellow;'>"
     }
     else {
          document.getElementById("organizationErr").innerHTML = "";
     }
     if (document.getElementById("birth").value == "") {
          document.getElementById("birthErr").innerHTML = "<b style='color: yellow;'>Please enter your date of birth</b style='color: yellow;'>"
     }
     else {
          document.getElementById("birthErr").innerHTML = "";
     }
     if (document.getElementById("number").value == "") {
          document.getElementById("numberErr").innerHTML = "<b style='color: yellow;'>Please enter your phone number</b style='color: yellow;'>"
     }
     else if (document.getElementById("number").value.length > 11 || document.getElementById("number").value.length < 11) {
          document.getElementById("numberErr").innerHTML = "<b style='color: yellow;'>Please enter valid phone number</b style='color: yellow;'>"
     }
     else {
          document.getElementById("numberErr").innerHTML = "";
     }
     if (document.getElementById("cnic").value == "") {
          document.getElementById("cnicErr").innerHTML = "<b style='color: yellow;'>Please enter your CNIC number</b style='color: yellow;'>"
     }
     else if (document.getElementById("cnic").value.length > 13 || document.getElementById("cnic").value.length < 13) {
          document.getElementById("cnicErr").innerHTML = "<b style='color: yellow;'>Please enter valid CNIC number</b style='color: yellow;'>"
     }
     else {
          document.getElementById("cnicErr").innerHTML = "";
     }
     let selection = document.getElementById("category").value;
     if (selection == "") {
          document.getElementById("categoryErr").innerHTML = "<b style='color: yellow;'>Please select a Country</b style='color: yellow;'>"
     }
     else {
          document.getElementById("categoryErr").innerHTML = "";
     }
}
