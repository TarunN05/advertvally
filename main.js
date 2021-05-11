const burger = document.getElementsByClassName("burger")[0];
const nav = document.getElementsByClassName("nav-links")[0];
const mailColor = document.getElementById("mail-btn");


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

					// successfulSent()


	        if(message=='OK'){
                mailColor.classList.toggle("success");
				mailColor.innerHTML = "Mail Sent successful";
			}
			if(message != 'OK') {
				mailColor.classList.toggle('error');
				mailColor.innerHTML = "Mail can't Sent";
			}

					// console.log (message);
					// if(message=='OK'){
					// alert('Your mail has been send. Thank you for connecting.');
					// }
					// else{
					// 	console.error (message);
					// 	alert('There is error at sending message. ')
						
					// }

				}
			);



		}



const submitBtn = document.querySelector('.submit-btn');
const inputs = document.querySelectorAll(".input");


submitBtn.addEventListener("click" ,()=>{
	setTimeout(()=>{

		inputs.forEach(input => input.value = '');
	}, 2000);
});


// G-sap animation
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to(".text", {y: "0%", duration:1, stagger: 0.25});
tl.to(".slider", {y: "-100%" , duration: 1.5, delay:0.5});
tl.to(".intro", {y:"-100%", duration:1}, "-=1");



	

