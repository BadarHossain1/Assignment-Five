

let seatCount = 1;

let TotalSit = 32;

let smallSit = 0;

let TotalPrice = 0;

let GrandTotal = 0;

let couponDiscount = 0;





const sitCount = document.getElementById('sit-count');

const chutoCount = document.getElementById('counter-seat');

const Totalofprice = document.getElementById('total-price');

const Grandofprice = document.getElementById('grand-price');


const seatADD = document.getElementById('seat-add')
const economy = document.getElementById('Economy-add')
const pr = document.getElementById('taka-add')

function Seat(button) {

    
    if (seatCount <= 4) {
        button.style.backgroundColor = '#1DD100';
        ++seatCount;

        sitCount.innerText = --TotalSit;
        chutoCount.innerText = ++smallSit;

        TotalPrice = smallSit * 550;
        Totalofprice.innerText = TotalPrice;


        GrandTotal = smallSit * 550;
        Grandofprice.innerText = GrandTotal;

        const p = document.createElement('p');
        p.innerText = button.innerText;

        seatADD.appendChild(p);

        const eco = document.createElement('p');
        eco.innerText = 'Economy';

        economy.appendChild(eco);

        
        const pricee = document.createElement('p');
        pricee.innerText = '550';

        pr.appendChild(pricee);










    }

    else {
        alert('You Cannot Book more than 4 Tickets')
    }

}

document.getElementById('apply-btn').addEventListener('click', function () {


    const couponElement = document.getElementById("input-field");
    const couponValue = couponElement.value;
    const couponCode = couponValue.split(" ").join("").toUpperCase();

    if(couponCode === "NEW15"){
       couponDiscount = TotalPrice*0.15;
        GrandTotal = TotalPrice-couponDiscount;
        Grandofprice.innerText = GrandTotal;

    }
    else if(couponCode==="COUPLE20"){
        couponDiscount = TotalPrice*0.20;
        GrandTotal = TotalPrice-couponDiscount;
        Grandofprice.innerText = GrandTotal;
    }
    else{
        alert('Not a Valid Coupon Code');
    }




});


function scrollToSection() {
    document.getElementById('paribahan-section').scrollIntoView({ behavior: 'auto'});
}

const namaya = document.getElementById('Name')
const number = document.getElementById('number')
const email = document.getElementById('email')
const myButton = document.getElementById('NEXT-BUTTON')


namaya.addEventListener('input', checkInputs);
number.addEventListener('input', checkInputs);
email.addEventListener('input', checkInputs);

function checkInputs() {
   
    if (namaya.value && number.value && email.value) {

        myButton.disabled = false;
    } else {

        myButton.disabled = true;
    }
}

