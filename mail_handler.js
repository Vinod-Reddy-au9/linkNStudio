getdj = function () {

    var dj;
    if (document.getElementById('serve').value == 0) {
      dj = "Not selected";
  
    }
    else if (document.getElementById('serve').value == 1) {
      dj = "ARTISTS";
    }
    else if (document.getElementById('serve').value == 2) {
      dj = "BRANDS";
    }
    return dj;
  }

  function setload() {
  
    document.getElementById("formm").style.display = "none";
    document.getElementById("loading").style.display = "block";

  }
  var alldone = function () {
  
  
    document.getElementById("loading").style.display = "none";
    document.getElementById("alertcustom").style.display = "block";
  
  }

  upload = function () {
    setload();
    servicem = getdj();
    filem = document.getElementById("postfile");
    var file = filem.files[0];
    var stt = Date.now().toString();
    if (file != null) {
      var uploadTask = firebase.storage().ref().child(stt).put(file);
  
     
      uploadTask.on('state_changed', function (snapshot) {
       
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
     
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
           
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            
            break;
        }
      }, function (error) {
       
      }, function () {
        
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {

          console.log(downloadURL);
          setload();
          var servicem = getdj();
          Email.send({
            
            SecureToken: "67c13158-3bf5-417d-b04d-56807f1088bb",
            To: 'rahulzcreations@gmail.com',
            From: document.getElementById("email").value,
            Subject: "Message from" + " " + document.getElementById("email").value,
            
            Body:
            " " 
            +"Name : " + document.getElementById("namebox").value.toUpperCase() + "<br>"
            + "______________________________________" + "<br>"
            + "Email : " + document.getElementById('email').value + "<br>"
            + "______________________________________" + "<br>"
            + "Services : " + servicem + "<br>"
            + "______________________________________" + "<br>"
            + "Mobile : " + document.getElementById('mobilenum').value + "<br>"
            + "______________________________________" + "<br>"
            + "Message :" + "<br>"+"<br>" + document.getElementById("message").value + "<br>",
            Attachments: [
              {
                name: document.getElementById("postfile").files[0]['name'],
                path: downloadURL
              }]
  
          }).then(
            message => alldone(),
          );
        });
      });
    }
    else {
      alert("sorry try again")
    }
  }
  window.onload = function () {
    var firebaseConfig = {
       apiKey: "AIzaSyCL1SWi9dkZeatPrtgOdiYJDMN83GTDxJM",
      authDomain: "linknstudio-56f1b.firebaseapp.com",
      databaseURL: "https://linknstudio-56f1b.firebaseio.com",
      projectId: "linknstudio-56f1b",
      storageBucket: "linknstudio-56f1b.appspot.com",
      messagingSenderId: "288901501470",
      appId: "1:288901501470:web:b1b63dfe97a8e14c43d40f",
      measurementId: "G-Y79ECHM7XV"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    document.getElementById('mailbutton').onclick = function () {
      validate();
    }
  }
  function validate() {
    if (document.getElementById('namebox').value != "" && document.getElementById("email").value != "" && document.getElementById('mobilenum').value != "") {
      aftervalidate();
    }
    else {
      alert("Please fill all required fields")
    }
  }
  function aftervalidate() {
    if (document.getElementById("postfile").value == "") {
      setload();
      servicem = getdj();
  
      Email.send({
        
        SecureToken: "67c13158-3bf5-417d-b04d-56807f1088bb",
        To: 'rahulzcreations@gmail.com',
        From: document.getElementById("email").value,
        Subject: "Message from" + " " + document.getElementById("email").value,
        // Body : 
        Body:
           " " 
          +"Name : " + document.getElementById("namebox").value.toUpperCase() + "<br>"
          + "______________________________________" + "<br>"
          + "Email : " + document.getElementById('email').value + "<br>"
          + "______________________________________" + "<br>"
          + "Services : " + servicem + "<br>"
          + "______________________________________" + "<br>"
          + "Mobile : " + document.getElementById('mobilenum').value + "<br>"
          + "______________________________________" + "<br>"
          + "Message :" + "<br>"+"<br>" + document.getElementById("message").value + "<br>"+" ",
      
      }).then(
        message => alldone(),
      );
    }
    else {
      upload();
    }
  }

  cpmz.onclick = function () {
  
    changepp = document.getElementById("changepp");
    changepp.style.display = "none";
  }
  ctrs = document.getElementById("closepost");
  ctrs.onclick = function () {
    document.getElementById("dopost").style.display = "none";
  
  }
  
  cmskn = document.getElementById("linuxpic");
  cmskn.onclick = function () {
  
    changepp = document.getElementById("changepp");
    changepp.style.display = "block";
  
  }
  
  discoraj = document.getElementById("newpost");
  discoraj.onclick = function () {
    document.getElementById("dopost").style.display = "block";
  }
  
  setasprofile = document.getElementById("setasprofile");
  setpost = document.getElementById("setpost");
  
  filem = document.getElementById("imagefile");
  //............................................................................................................................
  setasprofile.onclick = function () {
    if (filem.value != "") {
    }
  }