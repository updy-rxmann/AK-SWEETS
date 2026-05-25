const form =
document.getElementById("contactForm");

const successMessage =
document.getElementById("successMessage");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    const formData = new FormData(form);

    const object = Object.fromEntries(formData);

    const json = JSON.stringify(object);

    try{

        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },

                body: json
            }
        );

        const result = await response.json();

        if(result.success){

            successMessage.innerHTML =
            "Message Sent Successfully!";

            successMessage.style.color =
            "green";

            form.reset();

        }else{

            successMessage.innerHTML =
            "Failed to send message.";

        }

    }catch(error){

        successMessage.innerHTML =
        "Something went wrong.";

    }

});