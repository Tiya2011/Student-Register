var student_list=[];
function submit()
{
    var name_1=document.getElementById("student_1").value;
    var name_2=document.getElementById("student_2").value;
    var name_3=document.getElementById("student_3").value;
    var name_4=document.getElementById("student_4").value;
    var name_5=document.getElementById("student_5").value;

    student_list.push(name_1);
    student_list.push(name_2);
    student_list.push(name_3);
    student_list.push(name_4);
    student_list.push(name_5);
    console.log(student_list);
    document.getElementById("list_of_students").innerHTML=student_list;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting()
{
    student_list.sort();
    console.log(student_list);
    document.getElementById("list_of_students").innerHTML=student_list;
}
