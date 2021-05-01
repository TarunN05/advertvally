const burger = document.getElementsByClassName("burger")[0];
const nav = document.getElementsByClassName("nav-links")[0];

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toogle");
});



    function sendmail(){
    
			var name = $('#name').val();
			var email = $('#email').val();
			var phone = $('#phone').val();
      var message = $('#message').val();

			// var body = $('#body').val();

			var Body='Name: '+name+'<br>Email: '+email+'<br>Phone: '+phone+'<br>Message: '+message;
			//console.log(name, phone, email, message);

			Email.send({
        SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
				To: 'adsvally@gmail.com',
				From: "10xgrowthbusiness@gmail.com",
				Subject: "New message on contact from "+name,
				Body: Body
			}).then(
				message =>{
					//console.log (message);
					if(message=='OK'){
					alert('Your mail has been send. Thank you for connecting.');
					}
					else{
						console.error (message);
						alert('There is error at sending message. ')
						
					}

				}
			);



		}
