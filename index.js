    

function onclickHandling(target){
    const productPrice = parseFloat(target.childNodes[3].childNodes[5].childNodes[0].innerText);
    const productName = target.childNodes[3].childNodes[3].innerText;
    const previousTotalPrice = parseFloat(document.getElementById("tPrice").innerText);
    const purchaseBtn = document.getElementById('btn-make');
    const applyBtn = document.getElementById('btn-apply');
    let presentTotalPrice = previousTotalPrice + productPrice;
    document.getElementById('tPrice').innerText = presentTotalPrice;

    setValue(productName);

    if (presentTotalPrice > 0){
         purchaseBtn.removeAttribute('disabled');
    }
    
    else{
        purchaseBtn.setAttribute('disabled',true);
        }

    if (presentTotalPrice > 200){
         applyBtn.removeAttribute('disabled');
       }
       
    else{
         applyBtn.setAttribute('disabled',true);
           }
}
 
 
 function setValue(name){
   const container = document.getElementById("inputContainer");
   const count = container.childElementCount;
   const p = document.createElement('p');
   p.innerHTML = `${count+1}. ${name}`
   container.appendChild(p);
 }

  function apply(){
   
   const couponSpace = document.getElementById('coupon-field').value;
   coupon = couponSpace.trim();
   let discount = parseFloat(document.getElementById("discount").innerText);
   let total = parseFloat(document.getElementById("total").innerText);
   const previousTotalPrice = parseFloat(document.getElementById("tPrice").innerText);
   if(coupon == "SELL200"){
       
       discount = previousTotalPrice * 0.2;
       document.getElementById('discount').innerText = discount.toFixed(3);
       total = previousTotalPrice - discount;
       document.getElementById('total').innerText = total.toFixed(3);
   }
 }

  function goHome(){
    
    document.getElementById('discount').innerText = '00';
    document.getElementById('tPrice').innerText = '00';
    document.getElementById('total').innerText = '00';
    const container = document.getElementById('inputContainer');
    while (container.firstChild)
    container.removeChild(container.firstChild);
    document.getElementById('coupon-field').value = ' ';
    
 }