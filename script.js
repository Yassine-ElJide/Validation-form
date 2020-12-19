const submit = document.getElementById('submit');
const userName = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const confirmPass = document.querySelector('.confirm-password');



submit.addEventListener('click' , (e) => {
	e.preventDefault();
	checkValidation();
})


function checkValidation(){
	const usernameValue = userName.value.trim();
	const emailValue = email.value.trim(); 
	const passwordValue = password.value.trim();
	const checkValue = confirmPass.value.trim();
	if (usernameValue === '' || usernameValue.length< 5){
		errorFor(userName, 'Unvalid Username ! ')
		} else{
		successFor(userName);
		}

	if (emailValue === ''){
		errorFor(email, 'Your Email cannot be blank!')
		} else if (!isEmail(emailValue)){
			errorFor(email, 'Your Email is not valid !')
		} else{
			successFor(email);
		}

	if (passwordValue === ''){
		errorFor(password , 'Your password cannot be blank!')
		} else {
			successFor(password)
		}

	if(checkValue === ''){
		errorFor(confirmPass , 'Your password cannot be blank!')
		} else if (passwordValue !== checkValue){
		errorFor(confirmPass , 'Your passwords are differents ! ')
		} else {
			successFor(confirmPass);
		}
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


function errorFor(input,message){
	const formControl = input.parentElement;
	const errorMessage = formControl.querySelector("p");
	errorMessage.innerText = message;
	formControl.classList = 'form-control error';
}
function successFor(input){
	const formControl = input.parentElement;
	formControl.classList = 'form-control success'
}