

const token ='7299581823:AAFY7Ndby8M2TJ_tJ8a9GVqNzLHeLydCe_M';
const chat_id = 908705055
const API_URL  = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=<message>`

let btn_otpr = document.querySelector('#btn_otpr');


function sendMessage(){
    const user = {

        name:document.querySelector('#user_name').value,
        number:document.querySelector('#user_number').value,
        message:document.querySelector('#user_msg').value

    }

    let message = `Name: ${user.name} Number: ${user.number} Message: ${user.message}`
    let url = API_URL.replace('<message>',message);

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })

    .catch(err => console.log('Произошла ошибка:', err));
}


btn_otpr.addEventListener('click', sendMessage);