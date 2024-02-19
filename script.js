

let seatCount = 1;

let TotalSit = 16;

let smallSit = 0;

let TotalPrice = 0;

let GrandTotal = 0;

let couponDiscount = 0;



const sitCount = document.getElementById('sit-count');

const chutoCount = document.getElementById('counter-seat');

const Totalofprice = document.getElementById('total-price');

const Grandofprice = document.getElementById('grand-price');




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




