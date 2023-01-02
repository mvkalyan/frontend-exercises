let chkAllowSubscriptions = document.getElementById('chkAllowSubscriptions');
chkAllowSubscriptions.addEventListener('click', (event) => {
if (chkAllowSubscriptions.checked)
{
    document.getElementById('subsdetblock').style.display = "block";
    document.getElementById('subsdetblock').style.backgroundColor="pink";
}
else
    document.getElementById('subsdetblock').style.display = "none";
})

let feedbacks = [];  //feedback Array
window.submitFeedback = ()=> {
    let formData = document.getElementById('feedbackForm')
    let feedback = Object.fromEntries(new FormData(formData))
    let result = submitData(feedback);
    return result
}
//function called when submit button is clided
const submitData = (feedback) => {
    //errors object captures all the validation errors
    let errors = {
        userNameError: validateUserName(feedback.username),
        emailError: validateEmail(feedback.email),
        contactNoError: validateContactNo(feedback.contactNo),
        productError: validateProduct(feedback.product),
        commentsError: validateComments(feedback.comments),
        purchaseDateError: validatePurchaseDate(feedback.purchaseDate)
    }
    //filter out empty error messages
    let errorMessages = Object.values(errors).filter(e => e !== '');
    //if no errors, push the feedback to feedbacks array
    if (errorMessages.length === 0) {
        feedbacks.push(feedback);
        return true
    }
    else {
        //display validation summary with error messages
        displayValidationSummary(errorMessages);
        //display error messages alongside the input fields
        displayIndividualErrorMessages(errors)
        return false;
    }
    
}
//function to display validation summary with error messages provided
function displayValidationSummary(errorMessages) {
    let list = '';
    errorMessages.map(e => `<li>${e}</li>`).forEach(item => {
        list += item;
    });
    document.getElementsByTagName('ul')[0].innerHTML = list;
}
//function to display error messages alongside the input fields
function displayIndividualErrorMessages(errorMessages)
{
    document.getElementById('userNameError').innerText = errorMessages.userNameError;
    document.getElementById('emailError').innerText = errorMessages.emailError;
    document.getElementById('contactNoError').innerText = errorMessages.contactNoError;
    document.getElementById('productError').innerText = errorMessages.productError;
    document.getElementById('commentsError').innerText = errorMessages.commentsError;
    document.getElementById('purchaseDateError').innerText = errorMessages.purchaseDateError;
}
//function to validate username
const validateUserName = (userName) => {
    if (userName === '' || userName === undefined || userName === null)
        return "Username cannot be left blank";
    else
        return "";
}
//function to validate email
const validateEmail = (email) => {
    let emailError = '';
    let validRegex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
    if (email === '' || email === undefined || email === null)
        emailError += "Email cannot be left blank";
    else if (!email.match(validRegex))
        emailError += 'Invalid Email';
    return emailError;
}
//function to validate contact no
const validateContactNo = (contactNo) => {
    let contactNoError = '';
    //to validate following patterns of contact nos
    //0999999999, 099-999-999, (099)-999-9999, (099)9999999, 099 999 9999, 099 999-9999, (099) 999-9999, 099.999.9999
    let validRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (contactNo === '' || contactNo === undefined || contactNo === null)
        contactNoError += "ContactNo cannot be left blank";
    else if (!contactNo.match(validRegex))
        contactNoError += 'Invalid ContactNo';
    return contactNoError;
}
//function to validate product
const validateProduct = (product) => {
    if (product === '' || product === undefined || product === null)
        return "Product cannot be left blank"
    else
        return "";
}
//function to validate comments
const validateComments = (comments) => {
    let commentsError = '';
    if (comments === '' || comments === undefined || comments === null)
        commentsError += "Comments cannot be left blank";
    else if (comments.length > 70)
        commentsError = 'Comments should contain maximum of 70 characters';
    return commentsError;
}
//function to validate purchase-date
const validatePurchaseDate = (purchaseDate) => {
    let purchaseDateError = '';
    if (purchaseDate === '' || purchaseDate === undefined || purchaseDate === null)
        purchaseDateError = "Purchase Date cannot be left blank";
    return purchaseDateError;
}