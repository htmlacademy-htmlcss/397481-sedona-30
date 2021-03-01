(function() {

  const bookingForm = document.forms.bookingForm;
  const showFormBtn = document.getElementById('show-form');
  const adultsInput = bookingForm.querySelector('#adults-number');
  const childrensInput = bookingForm.querySelector('#childrens-number');
  const dateIn = bookingForm.querySelector('#date-in');
  const dateOut = bookingForm.querySelector('#date-out');
  document.querySelector('.map-img').classList.add('map-hide');
  document.querySelector('.map-frame').classList.remove('map-hide');
  let isStorageSupport = true;
  let adultsCount = '';
  let childrensCount = '';

  try {
    localStorage.getItem('testStorage');
  } catch (error) {
    isStorageSupport = false;
  }
  bookingForm.classList.add('booking-form-hide');
  bookingForm.addEventListener('submit', checkForm);
  showFormBtn.addEventListener('click', showForm);


  if (isStorageSupport) {
    showFormBtn.addEventListener('click', fillForm);
    bookingForm.addEventListener('submit', saveForm);
  }

  function saveForm() {
    localStorage.setItem('adultsCount', adultsInput.value);
    localStorage.setItem('childrensCount', childrensInput.value);
  }

  function showForm() {
    if (isStorageSupport && bookingForm.classList.contains('booking-form-hide')) {
      fillForm();
    }
    bookingForm.classList.toggle('booking-form-hide');
    if (isStorageSupport) {
      saveForm();
    }
  }

  function fillForm() {
    if (adultsCount = localStorage.getItem('adultsCount')) {
      adultsInput.value = adultsCount;
    }
    if (childrensCount = localStorage.getItem('childrensCount')) {
      childrensInput.value = childrensCount;
    }
  }

  function checkForm(evt) {
    let flag = false;
    const fields = bookingForm.querySelectorAll('.req');
    for (let i = 0; i < fields.length; i++) {
      if (!fields[i].value) {
        flag = true;
        fields[i].classList.add('err');
        fields[i].addEventListener('input', typeField)
      evt.preventDefault();
      }
    }
    if(flag){
      bookingForm.classList.remove('booking-form-err');
      bookingForm.offsetWidth = bookingForm.offsetWidth;
      bookingForm.classList.add('booking-form-err');
    }

  }
  function typeField(){
    this.classList.remove('err');
    this.removeEventListener('input', typeField)
  }
}());
