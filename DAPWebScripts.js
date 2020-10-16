var settings = {
  "url": "https://sheets.googleapis.com/v4/spreadsheets/1gy11q_35MO6sjUhifpXdVah-PeQx0p390iMHF9GNiDs/values/Destination!B2:B13?key=AIzaSyAd7R-JfZ3mMBVPELIw0FhGdetdJBhMXiA",
  "method": "GET",
  "dataType" : 'JSON',
  "timeout": 0,
};

function runAPI() {
  $.ajax(settings).done(function (response) {
    var obj = JSON.stringify(response);
    alert(obj);
  });
}
