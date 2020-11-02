/* Add your JavaScript to this file */

//"use strict";

window.onload = function()
{
    let form = document.getElementsByTagName('form').item(0);

    form.onsubmit = function(){
        return submitEmail(form);
    }

    function submitEmail(data)
    {
        let email = data.email.value;
        console.log(email);

        let msg = document.querySelector('.message');

        if(email)
        {
            msg.innerHTML = "Thank you! Your email address " + email + " as been added to our mailing list!";
        }
        else
        {
            msg.innerHTML = "Please enter a valid email address.";
        }
        
        form.reset();
        return false;
    }
}