function handleSubmitAccount(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  var jsonObj = {};
  var value = data.get('accnum');
  jsonObj['Account Name'] = value;
  value = data.get('liscnum');
  jsonObj['License Number'] = value;
  value = data.get('hospitaltype');
  jsonObj['Hospital Type'] = value;
  value = data.get('accphone');
  jsonObj['Account Phone'] = value;
  value = data.get('accemail');
  jsonObj['Account Email'] = value;
  console.log(jsonObj);
};

const accountform = document.querySelector('#accountform');
accountform.addEventListener('submit', handleSubmitAccount);