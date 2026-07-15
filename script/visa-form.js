import {API} from "./config.js"
export const visa_form =() =>{

    const visaForm = document.getElementById('visaForm');
    const full_name = document.getElementById('full-name');
    const Email = document.getElementById('email');
    const phone_number = document.getElementById('phone-number');
    const Country = document.getElementById('country');
    const Visa_type = document.getElementById('visa-type');
    const Date = document.getElementById('date');
    const Qualification = document.getElementById('Qualification');
    const Passport_Status = document.getElementById('Passport-Status');
    const Travel_History = document.getElementById('Travel-History');
    const BTNProfile = document.getElementById('BTNProfile');
    const LoadeR = document.getElementById('LoadeR');

    if(visaForm)
    visaForm.addEventListener('submit', async (e) =>{
        e.preventDefault();
        const name = full_name.value.trim();
        const email = Email.value.trim();
        const Phone_number = phone_number.value.trim();
        const country = Country.value.trim();
        const visa_type = Visa_type.value.trim();
        const date = Date.value.trim();
        const qualification = Qualification.value.trim();
        const passport_status = Passport_Status.value.trim();
        const travel_history = Travel_History.value.trim();
    

        if(!name || !email || !Phone_number || !country || !visa_type || !date || !qualification || !passport_status || !travel_history){
            alert('Fill out the field')
            return
        }

        if(Phone_number.length < 11){
            alert('Phone number must be at least 11 character ')
            return
        }

        const payLoad = {
            name,
            email,
            Phone_number,
            country,
            visa_type,
            date,
            qualification,
            passport_status,
            travel_history
        }

        try{
            LoadeR.style.display ="flex";
            const res = await fetch (`${API}visa-form`,{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify(payLoad)
            });
            const data = await res.json();

            if(!res.ok){
                alert(data.message);
                return
            }

            if(res.ok){
                alert(data.message);
                visaForm.reset();
            }



        }catch(err){
            console.log(err.message)
        }finally{
            LoadeR.style.display ="none";
        }
    })
}   