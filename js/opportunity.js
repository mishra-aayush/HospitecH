function handleSubmitOpp(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  var jsonObj = {};
  var value = data.get('oppname');
  jsonObj['Opportunity Name'] = value;
  value = data.get('amount');
  jsonObj['Amount'] = value;
  value = data.get('contactass');
  jsonObj['Contact Associated'] = value;
  value = data.get('stage');
  jsonObj['Stage'] = value;
  value = data.get('closedate');
  jsonObj['Close Date'] = value;
  jsonObj['Account Phone'] = value;
  value = data.get('accemail');
  jsonObj['Account Email'] = value;
  console.log(jsonObj);
};

const opportunityform = document.querySelector('#opportunityform');
opportunityform.addEventListener('submit', handleSubmitOpp);