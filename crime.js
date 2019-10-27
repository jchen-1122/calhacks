var getJSON = function(url, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    
    xhr.onload = function() {
    
        var status = xhr.status;
        
        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    
    xhr.send();
};

var allOffenses = [];

getJSON('https://data.cityofberkeley.info/resource/k2nh-s5h5.json',  function(err, data) {
    
    if (err != null) {
        console.error(err);
    } else {
    
        for (var i = 0; i < data.length; i++) {
          if (allOffenses.includes('<li>' + data[i].offense + '</li>')) {
            continue;
          } else {
            allOffenses.push('<li>' + data[i].offense + '</li>');
          }
        }

        var test = document.getElementById('test');

        test.innerHTML = test.innerHTML + allOffenses;
    }
});