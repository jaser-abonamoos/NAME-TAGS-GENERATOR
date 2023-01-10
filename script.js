// function del(){
//     let delFath=document.getElementsByClassName("fathDiv");
//     delFath.remove();
// }
document.getElementById('generateName').onclick=function(){
    /*   استدعاء الاسم اللي في الدخل ووضعه في متغير*/
    let myName=document.getElementById("name").value;
    /*انشاء مصفوفة اختيار  اللون العشوائي ووضعه في متغير */
    let hexArray=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let colorParts=[];
    for(let i=0;i<6;i++){
        colorParts.push(hexArray[Math.floor(Math.random()*hexArray.length)]);
    }
    let finalColor=`#${colorParts.join("")}`;//اللون النهائي finalColor #
    /*انشاء ديف رئيسي عند الضغط  */
    let newDiv=document.createElement('div');
    newDiv.className="fathDiv";
    newDiv.style.backgroundColor=finalColor;
    /* انشاء ديف الترحيب والنص*/
    let welcome=document.createElement('div');
    welcome.className="welcome";
    welcome.innerHTML="<h3>HELLO</h3><br><h6>My Name is</h6>";
    /* */
    let h2=document.createElement('h2');
    h2.innerText=myName;
    /*انشاء زر حذف  */
let delBtn=document.createElement('button');
delBtn.innerText="Delete";
delBtn.className="delete";
delBtn.addEventListener('click',function(){
    let divToDelete=this.parentNode;
    divToDelete.remove();
});
    
    
    /* */
    newDiv.append(welcome);
    newDiv.append(h2);
    newDiv.append(delBtn);
    let contain=document.getElementsByClassName('contain')[0];
    contain.append(newDiv);
}

// document.getElementsByClassName('delete').onclick=function(){

// }
// delBtn.onclick=function(){
//     let deleTe=document.getElementsByClassName('contain');
//     deleTe.removeChild(delBtn.firstElementChild);
// }
/*********************** */
/*حذف البطاقة  */
// function removeElement(contain){
//     element.parentNode.removeElement();
//     element.parentNode.removechild()
// }
// document.getElementsByClassName("delete").onclick=function(){
//     let deleTe=document.children[0].children[1].children[0].children[2];
//     deleTe.removeChild(deleTe.children[0].children[1].children[0].children[2]);
// }

/*دالة لحذف كل البطاقات التي تم عملها (حذف الكل) */
document.getElementById('deleteAll').onclick=function(){
    //اجلب العنصر الذي اسمه كونتين واحذفه (يحذفه وما بداخله)
    let delcontain=document.getElementsByClassName('contain')[0];
    delcontain.remove();
    //انشاء ديف باسم كلاس الكونتين اللي حذفناه حتى يأتي مكانه
    let addContain=document.createElement('div');
    addContain.className="contain";
    //اضافة الكونتين الذي  أنشأناه في الكونتينرز الأب
    let containers=document.getElementsByClassName("containers")[0];
    containers.append(addContain);
}

