console.log("the js file is linked");
const userName1 = document.getElementById("userName");
userName1.value="";


let userName0 = "";

userName1.addEventListener("keydown", function (event) {
  
    if (event.key === "Enter") {
      userName0 = userName1.value; 
      sessionStorage.setItem("userNameStorage", userName0);
      console.log("Username saved:", userName0);
    }
});

