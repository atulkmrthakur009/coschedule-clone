var localnm;
window.onload = () => {
    if(localStorage.getItem("Task")!==null){
    let ss = localStorage.getItem("Task");
    
    ss_obj = JSON.parse(ss);
    console.log(ss_obj);
    let x = document.getElementById("upcomings");
    ss_obj.forEach(element => {
        let div = document.createElement("div");
        x.append(div);
    });
   
    
    
}
    let data = localStorage.getItem('Users')
    data = JSON.parse(data)
    console.log(data)
    localnm = data[0].name;
    console.log(localnm)
    let n = document.getElementById('username')
    n.textContent = localnm
    n.style.marginLeft = "10px"
    n.style.fontWeight = '700'
    let funs = document.getElementById('funs')
    funs.addEventListener('click', showdatas)
}

showdatas = () => {
    document.getElementById('showData').innerHTML = ""
    document.getElementById('choose').innerText = ""
    // document.getElementById('pone').innerHTML = ""
    // document.getElementById('ptwo').innerHTML = ""
    // document.getElementById('pthree').innerHTML = ""
  
    document.getElementById('notify').innerHTML = ""
    document.getElementById('recent').innerHTML = ""
    document.getElementById('fav').innerHTML = ""
  
    let datas = document.getElementById('showData')
    let n = document.getElementById('username').textContent
    let login = document.getElementById('login')
    login.innerText = n
    login.style.color = "#2A4564"

    let hide = document.getElementById('assigned')
    let task = document.getElementById('task')
    task.style.display = "block"
    hide.style.display = "block"
    let dd = document.getElementById('dropDown')
    dd.style.display = "block"

    let padd = document.getElementById('datas')
    padd.style.padding = "0px"
    let choose = document.getElementById('choose')
    let b = document.createElement('p')
    b.innerText = "Edit Task"
    choose.append(b)
    b.style.marginLeft = "10px"
    let p = document.createElement('input');
    p.id ="p";
    p.style.width= "80%";
    p.style.border = "none"
    p.style.height = "50px"
    p.placeholder = "Task name..."
    datas.append(p);
   
}
// function showDate(){
//     let p = document.createElement("input");
//     p.type ="date";
//     p.style.width= "80%";
//     p.style.border = "none"
//     p.style.height = "200px"
//     let par = document.getElementById("ii");
//     par.append(p);

// }
var tasks = [];
if(localStorage.getItem("Task")===null){
localStorage.setItem("Task",JSON.stringify(tasks));
}
function schedule(e){
    e.preventDefault();
    let f = document.getElementById("upcomings");
    let d = document.getElementById("p").value;
    let div = document.createElement("div");
    div.append(d)
    f.append(div);
    var obj ={
        Task:d
    };
    // obj_json = JSON.stringify(obj);
    // tasks.push(obj_json);
    tasks.push(obj);
    tasks_json = JSON.stringify(tasks)
    localStorage.setItem("Task",tasks_json);
    
}
showMeNotification =() => {
    event.preventDefault()
    let hide = document.getElementById('assigned')
    hide.style.display = "none"
    let task = document.getElementById('task')
    task.style.display = "none"
    let not = document.getElementById('notify')
    let rec = document.getElementById('recent')
    let fav = document.getElementById('fav')
    not.style.display = "block"
    fav.style.display = "none"
    rec.style.display = "none"
}
showMeRecents =() => {
    event.preventDefault()
    let rec = document.getElementById('recent')
    let not = document.getElementById('notify')
    let fav = document.getElementById('fav')
    let hide = document.getElementById('assigned')
    let task = document.getElementById('task')
    task.style.display = "none"
    hide.style.display = "none"

    rec.style.display = "block"
    not.style.display = "none"
    fav.style.display = "none"
}
showMeFav =() => {
    event.preventDefault()
    let hide = document.getElementById('assigned')
    hide.style.display = "none"
    let task = document.getElementById('task')
    task.style.display = "none"
    let fav = document.getElementById('fav')
    let rec = document.getElementById('recent')
    let not = document.getElementById('notify')
    fav.style.display = "block"
    not.style.display = "none"
    rec.style.display = "none"
}
showUser = () => {
    let pops = document.getElementById('pops')
    pops.style.display = "block"
}
hideUser = () => {
    let pops = document.getElementById('pops')
    pops.style.display = "none"
}