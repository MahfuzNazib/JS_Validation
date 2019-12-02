function formValidation()
{
	//Flag Variable
	var NAME = null;
	var EMAIL = null;
	var USERNAME = null;
	var GENDER = null;
	var PASSWORD = null;
	var CONPASS = null;
	var DAY = null;
	var MONTH = null;
	var YEAR = null;


	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var username = document.getElementById('userName').value;
	var password = document.getElementById('password').value;
	var confirmPassword = document.getElementById('confirmPassword').value;
	var gender = document.getElementsByName('gender');
	var day = document.getElementById('day').value;
	var month = document.getElementById('month').value;
	var year = document.getElementById('year').value;

	var regexName = /^[a-zA-Z]/;
	var isValidName = regexName.test(name);

	var regexEmail = /[a-z]?[0-9]+@+[a-z]+.com|.org|.edu/;
	var isValidEmail = regexEmail.test(email);

	//Name Validation
	if(name == "")
	{
		document.getElementById('nameMessage').innerHTML = "Empty Name";
		NAME = "Error";
	}
	else
	{
		if(name.length >= 2)
		{
			if(isValidName)
			{
				document.getElementById('nameMessage').innerHTML = "Valid Name";
			}
			else
			{
				document.getElementById('nameMessage').innerHTML = "Name start with letter";
				NAME = "Error";
			}
		}
		else
		{
			document.getElementById('nameMessage').innerHTML = "Name Must be More Than 2 char";
			NAME = "Error";
		}
	}


	//Email Validation
	if(email == "")
	{
		document.getElementById('emailMessage').innerHTML = "Empty Email Address";
		EMAIL = "Error";
	}
	else
	{
		if(isValidEmail)
		{
			document.getElementById('emailMessage').innerHTML = "Valid Email";
		}
		else
		{
			document.getElementById('emailMessage').innerHTML = "Invalid email Format";
			EMAIL = "Error";
		}
	}

	//Username validation

	if(username == "")
	{
		document.getElementById('usernameMessage').innerHTML = "Empty Username";
		USERNAME = "Error";
	}
	
	if(password == "")
	{
		document.getElementById('passwordMessage').innerHTML = "Empty Password";
		PASSWORD = "Error";
	}
	else
	{
		if(password.length >= 8)
		{
			document.getElementById('passwordMessage').innerHTML = "Password Accepted";
			if(confirmPassword != password)
			{
				document.getElementById('confirmPasswordMessage').innerHTML = "Password doesn't Matched";
				CONPASS = "Error";
			}
			else
			{
				document.getElementById('confirmPasswordMessage').innerHTML = "Password Matched";
			}
		}
		else
		{
			document.getElementById('passwordMessage').innerHTML = "Password Must be greater or Equal 8 char" ;
			PASSWORD = "Error";
		}
	}

	//Gender Checked

	if(gender[0].checked)
	{
		document.getElementById('genderMessage').innerHTML = "You Select Male";
	}
	else if(gender[1].checked)
	{
		document.getElementById('genderMessage').innerHTML = "You Select Female";
	}
	else if(gender[2].checked)
	{
		document.getElementById('genderMessage').innerHTML = "You Select Other";
	}
	else
	{
		document.getElementById('genderMessage').innerHTML = "Please Select Your Gender";
		GENDER = "Error";
	}


	//Date Validation

	if(day == "")
	{
		document.getElementById('dateMessage').innerHTML = "Empty Day";
		DAY = "Error";
	}
	else
	{
		if(day >=1 && day <=31)
		{
			if(month == "")
			{
				document.getElementById('dateMessage').innerHTML = "Empty Month";
				MONTH = "Error";
			}
			else
			{
				if(month >=1 && month <=12)
				{
					if(year == "")
					{
						document.getElementById('dateMessage').innerHTML = "Empty Year";
						MONTH = "Error";
					}
					else
					{
						if(year >=1900 && year <=2019)
						{
							document.getElementById('dateMessage').innerHTML = "Date Accepted";
						}
						else
						{
							alert('Invalid Year');
							YEAR = "Error";
						}
					}
				}
				else
				{
					alert('Invalid Month');
					MONTH = "Error";
				}
			}
		}
		else
		{
			alert("Range of Day is:1-31");
			DAY = "Error";
		}
	}

	if(NAME == null && EMAIL == null && USERNAME == null && PASSWORD == null && CONPASS == null && GENDER ==null && DAY == null && MONTH == null && YEAR == null)
	{
		var xhttp = new XMLHttpRequest();
		xhttp.open("POST","abc.php",true);
		xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhttp.send("name = "+name+"& email = "+email+"&username = "+username+"&password = "+password+"&gender = "+gender);

		xhttp.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200)
			{
				document.getElementById('phpData').innerHTML = this.responseText;
			}
		};
	}
}