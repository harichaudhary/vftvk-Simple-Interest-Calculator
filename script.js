// function updates te rate
function updateRate() 
{
    // get rate from rate range
    var rateval = document.getElementById("rate").value;
    // set rate in rate_val span
    document.getElementById("rate_val").innerText=rateval;
}

// function computes the interest and display the results
function compute()
{
    // get the principal from textbox
    var principal = document.getElementById("principal").value;
    
    // if principal is 0 or negative
    if(principal <= 0){
        // display the message to user
        alert('Enter a positive number');
        // focus on the principal textbox
        document.getElementById("principal").focus();
        // return from the function
        return;
    }
    // get rate, years
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // calculate the simple interest
    var interest = principal * years * rate /100;

    // find put he future year
    var year = new Date().getFullYear() + parseInt(years);

    // get the result element refernce
    var result = document.getElementById("result");

    // add result by setting innerHTML property
    result.innerHTML = 'If you deposit <span class="number">' + principal + '</span>,\<br\>';
    result.innerHTML += 'at an interest rate of <span class="number">' + rate + '%</span>.\<br\>';
    result.innerHTML += 'You will receive an amount of <span class="number">' + interest + '</span>,\<br\>';
    result.innerHTML += 'in the year <span class="number">' + year + '</span>\<br\>';
}