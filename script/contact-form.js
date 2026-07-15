export const contactForm = () =>{
    const contact_form = document.getElementById('contact_form');
    const Name = document.getElementById('name');
    const Email = document.getElementById('email')
    const Destination = document.getElementById('destination')
    const Travel_date = document.getElementById('travel_date');
    const Message = document.getElementById('message');
    const Phone_number = document.getElementById('phone_number');
    const submitBTN = document.querySelector('BTN-Submit');
    const loader = document.getElementById('LoadeR');

if(contact_form)
    contact_form.addEventListener('submit',async (e) =>{
        e.preventDefault();

        const name = Name.value.trim();
        const email = Email.value.trim();
        const destination = Destination.value.trim();
        const travel_data = Travel_date.value.trim();
        const message = Message.value.trim();
        const phone_number = Phone_number.value.trim();

        if(!name || !email || !destination || !travel_data || !message || !phone_number){
            alert('Please fill the out field')
            return
        }

        if(phone_number.length < 11 ){
            alert('Invalid phone number')
        }

        try{

            loader.style.display ="flex";
            const res = await fetch ("/",{
                method: "POST",
                headers:{"Content-Type":"Application/json"},
                body: JSON.stringify({name, email,destination, travel_data,message,phone_number})
            });

            const response = await res.json();

            if(!res.ok){
                alert(response.message)
                return
            }

            if(res.ok){
                alert(response.message);
            }

            contact_form.reset();
        }catch(err){
            console.log(err.message)
        }finally{
            loader.style.display ="none";
        }

    })
};
