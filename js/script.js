(function(){
  var form = document.forms.bookingForm;
  var showFormBtn = document.getElementById('show-form');
  form.classList.add('booking-form-hide');
  showFormBtn.addEventListener('click', function(){
    form.classList.toggle('booking-form-hide');
  });
}());

