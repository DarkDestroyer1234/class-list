var names_array =[];

function submit(){
var name =document.getElementById("classlist").value;
names_array.push(name);
document.getElementById("viewClass").innerHTML = names_array;
}

function sorting(){
names_array.sort();
document.getElementById("viewClass").innerHTML = names_array;


}



