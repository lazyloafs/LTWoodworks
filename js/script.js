$(document).ready(function () {
    $('submit').click(function (event) {
     event.preventdefault()
     console.log('Clicked Button')

     var email =$('.email').val()
     var subject =$('.subject').val()
     var message =$('.message').val()

     if(email.length > 5 && email.includes'@') && email.includes('.')) {
     statusElm.append('<div>EEmail is valid</div>')
      } else {
        statusElm.append('<div>Email is not valid</div>')
    }

    if(subject.length >2)
    })
})