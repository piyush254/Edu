onLoad();

function onLoad() {
  documentCreatingdiv();
  contentLoading();
  whyChooseUS()
}
function documentCreatingdiv() {
  let docsdiv = document.querySelector(".documents");

  const documents = [
    { name: "10th Marksheet", type: "certificate" },
    { name: "10th Passing certificate", type: "certificate" },
    { name: "12th Marksheet", type: "certificate" },
    { name: "12th Passing certificate", type: "certificate" },
    { name: "NEET Exam Scorecard", type: "scorecard" },
    { name: "Migration certificate", type: "certificate" },
    { name: "Conduct/Character Certificate", type: "certificate" },
    { name: "Transfer certificate (TC)", type: "certificate" },
    { name: "Caste/Community Certificate", type: "certificate" },
    { name: "Domicile/Nativity certificate", type: "certificate" },
    { name: "Aadhar Card", type: "identity" },
    { name: "Passport size photos (12 copies)", type: "photo" },
  ];

  documents.forEach((doc) => {
    docsdiv.innerHTML += `<div class="document">
    <div class="round">
      <i class="fa-regular fa-circle fa-2xs" style="color: #ff0000;"></i>
    </div>
    <h6>${doc.name}</h6>
  </div>`;
  });

  let nriStudent = document.querySelector(".nriStudent");

  const nridocs = [
    { docs: "Embassy Certificate" },
    { docs: "Sponsorship Affidavit by Sponsorer" },
    { docs: "Relationship Affidavit Notarised by Tehsildar" },
    { docs: "Notarized Family Tree" },
    { docs: "Visa and Passport of Sponsorer" },
  ];

  nridocs.forEach((doc) => {
    nriStudent.innerHTML += `<div class="document">
    <div class="round">
      <i class="fa-regular fa-circle fa-2xs" style="color: #ff0000;"></i>
    </div>
    <h6>${doc.docs}</h6>
  </div>`;
  });
}

function contentLoading() {
  let content = document.querySelector(".content");

  let arr = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  arr.forEach((item) => {
    content.innerHTML += `  <div class="cardd">
    <div class="textAdd"><p>
     "Hello! Welcome! Greetings! Hi there! Hey! Good day! Howdy! Salutations! Namaste! Hola! Bonjour! Ciao!
      Aloha! Shalom! Kia ora! Guten Tag! Konnichiwa! Ni hao! Salaam! Ahlan! Merhaba! Hallo! Privet! 
      Sawasdee! Selamat! Jambo! Ola!"</p>
       </div>
       <div class="divImage">
         
       </div>
       <h4>Aman Kumar</h4>
     </div>`;
  });
}


function whyChooseUS(){
  const admissionSupport = [
    { key: "No Token, No Advance", about: "No Token, No Advance" },
    { key: "Networks in Every Medical Colleges", about: "Networks in Every Medical Colleges, so after admission support" },
    { key: "Students references in every state of India", about: "Students references in every state of India" },
    { key: "Experienced team for lowest budget management quota seats", about: "An experienced team which can get you the lowest budget management quota seats" },
    { key: "Dedicated personal counsellor with 24/7 support", about: "A dedicated personal counsellor with 24/7 support" },
    { key: "Documentation assistance for registration, Verification etc.", about: "Information of documentation needed for registration, Verification etc." },
    { key: "Good connections in almost all the medical colleges of India", about: "We have good connections in almost all the medical colleges of India. We can help you out in arranging installment payment facilities in colleges." },
    { key: "After Admission Support for any issues", about: "After Admission Support. Even if you are facing any issues at the colleges after admission. You can call us. We will help you out for sure." }


  ];
  let whyChooseUS1 = document.querySelector(".WhyChooseUS1");
  admissionSupport.forEach(admission => {
    whyChooseUS1.innerHTML += `<div class="Choosingdiv">
    <div class="round">
      <i class="fa-regular fa-circle fa-2xs" style="color: #ff0000;"></i>
    </div>
    <h6>${admission.about}</h6>    
  </div>
</div>`
  })
  
  
}