const form = document.querySelector('form');
/*whenever the form is submit, it submit with two type: post or get types,whenever click on submit its value goes to the server or url but here we don't want that so we have to stop that. To stop that we have a method = preventDefault() */

form.addEventListener('submit', function(event){
    event.preventDefault()
    //to get a value of height we simplly added .value in the end , note that we always get the values in string form so to convert that into Integer, use pareInt.
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = "Please give a valid value"
    }
    else if(weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = "Please give a valid value"
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        if(bmi < 18.6){
            result.innerHTML = `<span>${bmi}</span> <br>Sadly you are under Weight`
        }
        else if (bmi >= 18.6 && bmi <= 24.9){
            result.innerHTML = `<span>${bmi}</span> <br> you are a Healthy person`
        }
        else {
            result.innerHTML = `<span>${bmi}</span> <br> Sadly you are OverWeight`
        }
        
    }


   
})