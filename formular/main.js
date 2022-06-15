const date=document.getElementById("datum");
const vek=document.getElementById("vek");
const email=document.getElementById("e-mail");

const displayTools= (meno)=>{
    const tooltips=document.getElementsByClassName("email-tool");
    for(let i=0;i<tooltips.length;i++){
        tooltips[i].style.display="none";
    }
    if(meno!=="") {
        document.getElementById(`${meno}`).style.display = "block";
    }

}

const validaciaDatumu= ()=>{
    const now=new Date();
    const dateold= new Date(date.value);
    const ynew = now.getFullYear();
    const mnew = now.getMonth();
    const dnew = now.getDate();
    const yold = dateold.getFullYear();
    const mold = dateold.getMonth();
    const dold = dateold.getDate();
    let diff = ynew - yold;

    if(mold > mnew) diff--;
    else
    {
        if(mold === mnew)
        {
            if(dold > dnew) diff--;
        }
    }
    if (parseInt(vek.value,10) === diff){
        vek.style.borderColor="green";
        vek.style.borderWidth="3px";
        document.getElementById("toolvek").style.display="none";
        return true;
    }
    else{
        vek.style.borderColor="red";
        vek.style.borderWidth="3px";
        document.getElementById("toolvek").style.display="block";
        return false;
    }
};

const validateEmail=()=>{
    const correct=email.value;
    const index=correct.lastIndexOf("@");
    const emailLength=correct.substring(correct.lastIndexOf(".")).length-1;

    if((correct.includes("@"))) {
        if((correct.substring(index).includes("."))) {
            if (( emailLength>= 2) && (emailLength<=4) && (correct.substring(index, correct.lastIndexOf(".")).length-1>=1)) {
                displayTools("");
                email.style.borderColor = "green";
                email.style.borderWidth="3px";
                return true;
            }
            else{
                displayTools("dlzka-domeny");
                email.style.borderColor="red";
                email.style.borderWidth="3px";
                return false;
            }
            if(correct.substring(0,correct.indexOf("@")).length>=3){
                displayTools("");
                email.style.borderColor = "green";
                email.style.borderWidth="3px";
                return true;
            }
            else{
                displayTools("dlzka-mena");
                email.style.borderColor= "red";
                email.style.borderWidth="3px";
                return false;
            }
        }
        else{
            displayTools("bodka");
            email.style.borderColor="red";
            email.style.borderWidth="3px";
            return false;
        }
    }
    else{
        displayTools("zavinac");
        email.style.borderColor="red";
        email.style.borderWidth="3px";
        return false;
    }
}
const checkedFunction=()=>{
    if(document.getElementById("ine").checked===true){
        document.getElementById("inetool").style.display="block";
    }
    else{
        document.getElementById("inetool").style.display="none";
    }
}

const radioFunction=()=>{
    if(document.getElementById("domov").checked===true){
        document.getElementById("divAdresa").style.display="block";
    }
    else{
        document.getElementById("divAdresa").style.display="none";
    }
}

const deleteFromList=(allList)=>{
    for(let i=0;i<allList.length;i++){
        for(let j=0;j<allList[i].length;j++){
            allList[i][j].hidden=true;
        }
    }
}
const validateList1=()=>{
    const listForItem1=document.getElementsByClassName("polozky1");
    const listForItem2=document.getElementsByClassName("polozky2");
    const listForItem3=document.getElementsByClassName("polozky3");
    const allList=[listForItem1,listForItem2, listForItem3];
    document.getElementById("list2").value=document.getElementById("dvalue2");
    document.getElementById("list3").value=document.getElementById("dvalue3");
    deleteFromList(allList);
    if(document.getElementById("list1").value==="AMG"){
        for(let i=0;i<listForItem1.length;i++){
            listForItem1[i].hidden=false;

        }
        return true;
    }
    else if(document.getElementById("list1").value==="Maybach"){
        for(let i=0;i<listForItem2.length;i++){
            listForItem2[i].hidden=false;
        }
        return true;
    }
    else if(document.getElementById("list1").value==="Mercedes-eq") {
        for(let i=0;i<listForItem3.length;i++){
            listForItem3[i].hidden=false;
        }
        return true;
    }
    return false;
}

const hiddenList=(list)=>{
    for(let i=0;i<list.length;i++){
        list[i].hidden=false;
    }
}
const validateList2=()=>{
    const listForItem4=document.getElementsByClassName("polozky4");
    const listForItem5=document.getElementsByClassName("polozky5");
    const listForItem6=document.getElementsByClassName("polozky6");
    const listForItem7=document.getElementsByClassName("polozky7");
    const listForItem8=document.getElementsByClassName("polozky8");
    const listForItem9=document.getElementsByClassName("polozky9");
    const listForItem10=document.getElementsByClassName("polozky10");

    const allList=[listForItem4,listForItem5, listForItem6,listForItem7,listForItem8,listForItem9,listForItem10];

    document.getElementById("list3").value=document.getElementById("dvalue3");
    deleteFromList(allList);
    const valueOfList=document.getElementById("list2").value;

    if(valueOfList==="Hatchback"){
        hiddenList(listForItem4);
        return true;
    }
    else if(valueOfList==="Kupé"){
        hiddenList(listForItem5);
        return true;
    }
    else if(valueOfList==="SUV"){
        hiddenList(listForItem6);
        return true;
    }
    else if(valueOfList==="Maybach-Sedan"){
        hiddenList(listForItem7);
        return true;
    }
    else if(valueOfList==="Maybach-SUV"){
        hiddenList(listForItem8);
        return true;
    }
    else if(valueOfList==="Eq-Sedan"){
        hiddenList(listForItem9);
        return true;
    }
    else if(valueOfList==="dodavka"){
        hiddenList(listForItem10);
        return true;
    }
    return false;
}
const submitFunction=()=>{
    if(validateEmail() && validaciaDatumu()){
        return true;
    }
    return false;
}





