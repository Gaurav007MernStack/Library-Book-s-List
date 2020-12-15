var employeeList=[];
function add(val){
    if(val!=""){
        if(employeeList.includes(val)){
            alert("Name Already Exist..")
            document.getElementById("input").value="";
        }else{
            employeeList.push(val);
            document.getElementById("input").value="";
            console.log(employeeList);
            updateUI();
        } 
    }else{
        alert("Pls Enter Some Name....")
    }
}
function remove(val){
    if(employeeList.includes(val)){
        var del=employeeList.indexOf(val);
        employeeList.splice(del,1);
        document.getElementById("input").value="";
        console.log(employeeList)
        updateUI();
    }else{
        alert("Name not Exist")
        document.getElementById("input").value="";
    }
}
function updateUI(){
    let list = document.querySelector('#ListOfEmployess');
    list.innerHTML = "";
    console.log(list);
    for(let i=0;i<employeeList.length;i++){
        let li = document.createElement("li");   //<li></li>
        li.textContent = employeeList[i];   // <li>aaa</li>
        list.append(li);
    }
}