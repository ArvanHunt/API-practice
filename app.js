//Fetch API   ----- Application programming interface

//the Fetch API providesan interface for fetching (sending / recieving) resources.

// The fetch() method is used to fetch a resource (data).

// syntax : let promise = fetch(url)

//------------- AJAX
                    // * AJAX is a asynchronous js and xml   (OLD FORMAT)

//----------------- **** JSON ****
        // javascript object notation
            //also called as AJAJ - Asynchronous Javascript And Json

//----------------- **** json() method ****
        //returns a second promise that resolves with the result of parsing the response body text as json 
        // * "input is json and output is js object"

        //**** parse meaning (converting into something)

let url = "https://cat-fact.herokuapp.com/facts";
let factPara = document.querySelector("#fact");
let btn = document.querySelector("#btn");

const getCat = async () => {        //asynchronous arrow function
    console.log("getting fact")         
    let response = await fetch(url);    //fetch API to make a network request to the specified URL. 
                                        //await keyword pauses the execution of the function until the fetch request is complete and 
                                        //a response is received.
    console.log(response);
    let data = await response.json();       //converts the response format to json object
                                            //await pauses the execution until the conversion is complete
                                            // and data is stored in data

    factPara.innerText = data[0].text;      
    
}
btn.addEventListener("click",getCat);

//_----------------**** HTTP response status code ****

        //  ( 100 - 199 )   =   informational responses
        //  ( 200 - 299 )   =   successful responses
        //  ( 300 - 399 )   =   redirection message
        //  ( 400 - 499 )   =   client error response
        //  ( 500 - 599 )   =   server error response


