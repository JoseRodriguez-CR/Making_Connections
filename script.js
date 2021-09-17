console.log("page loaded...");


//Changing name
function changeName(event){
    let name = document.querySelector('.name');
    name.innerText = "Amy Harris";
}

let change = document.querySelector('.edit');
change.addEventListener("click", changeName);


//Removing user from request list
function deleteElement( event ) {  
    let entireElement = event.target.closest ('.card-list-item');
    entireElement.remove();
}

let acceptButton1 = document.querySelector('#icon1');
acceptButton1.addEventListener("click", deleteElement);

let acceptButton2 = document.querySelector('#icon2');
acceptButton2.addEventListener("click", deleteElement);

let acceptButton3 = document.querySelector('#icon3');
acceptButton3.addEventListener("click", deleteElement);

let acceptButton4 = document.querySelector('#icon4');
acceptButton4.addEventListener("click", deleteElement);


//Request accepted decrease counter
function decreaseRequest( event ) {  
    let num = document.querySelector('#r1');
    console.log(num.innerText);  
    requests = Number(num.innerText);
    console.log(requests);
    num.innerText = requests -1;
}

let acceptBtn1 = document.querySelector('#icon1');
acceptButton1.addEventListener("click", decreaseRequest);

let acceptBtn2 = document.querySelector('#icon2');
acceptButton2.addEventListener("click", decreaseRequest);

let acceptBtn3 = document.querySelector('#icon3');
acceptButton3.addEventListener("click", decreaseRequest);

let acceptBtn4 = document.querySelector('#icon4');
acceptButton4.addEventListener("click", decreaseRequest);


//Request accepted increases connections
function increaseConnections( event ) {  
    let num = document.querySelector('#c1');
    console.log(num.innerText);  
    requests = Number(num.innerText);
    console.log(requests);
    num.innerText = requests +1;
}

acceptButton1.addEventListener("click", increaseConnections);

acceptButton3.addEventListener("click", increaseConnections);

