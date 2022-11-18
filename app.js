const search =()=>{
   const searchvalue = document.getElementById('productSearch').value.toUpperCase();
   const itemsList = document.getElementById("item-list")
   const productItem = document.querySelectorAll(".item")
   const itemName= document.getElementsByClassName('productName')



 for (let i=0; i< itemName.length; i++){
    let productvalue = productItem[i].getElementsByClassName('productName')[0];

    if (productvalue){
       let textvalue = productvalue.innerText;
    
        if (textvalue.toUpperCase().indexOf(searchvalue) > -1){
            productItem[i].style.display = '';


        }else {
            productItem[i].style.display = 'none';

        }
    }
 }
}


    
