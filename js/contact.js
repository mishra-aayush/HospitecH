function handleSubmitContact(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  var jsonObj = {};
  var value = data.get('salutation');
  jsonObj['Salutation'] = value;
  value = data.get('fname');
  jsonObj['First Name'] = value;
  value = data.get('lname');
  jsonObj['Last Name'] = value;
  value = data.get('designation');
  jsonObj['Designation'] = value;
  value = data.get('hospitalname');
  jsonObj['Hospital Name'] = value;
  value = data.get('influence');
  jsonObj['Influence'] = value;
  value = data.get('conphone');
  jsonObj['Contact Phone'] = value;
  value = data.get('conemail');
  jsonObj['Contact Email'] = value;
  console.log(jsonObj);
};

const contactform = document.querySelector('#contactform');
contactform.addEventListener('submit', handleSubmitContact);