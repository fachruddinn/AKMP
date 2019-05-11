function is_username_valid(username) {
	return(/^[a-z]{8}$/.test(username));
}

function is_email_valid(email) {
	return(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
}

console.log(is_username_valid('Ruddin'));
console.log(is_username_valid('ruddin'));
console.log(is_username_valid('ruddinna'));
console.log(is_email_valid('rud@gmai.com'));
console.log(is_email_valid('rudd@gmail.com'));