AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Administrasi",
    cardImage: "assets/images/experience-page/dinsos.png",
    place: "Dinas Sosial Kota Tegal",
    time: "(Oktober 2020 - Present)",
    desp: "<li>manage files, create reports, archive settings.</li> <li>inputting DTKS data for the city of Tegal.</li><li>Providing services to all those who need social services.</li>",
  },
  {
    title: "UI Designer",
    cardImage: "assets/images/experience-page/skilvul.png",
    place: "PT Impactbyte Teknologi Edukasi",
    time: "(September 2021 - Oktober 2021)",
    desp: "<li>Has the task of determining the appearance of the application or website</li> <li>design an attractive appearance both in terms of shape, color, and writing.</li> <li>And also set the layout, color scheme, shape of the buttons that can be clicked along with the type and size of the text.</li>",
  },
  {
    title: "UX Designer",
    cardImage: "assets/images/experience-page/skilvul.png",
    place: "PT Impactbyte Teknologi Edukasi",
    time: "(Oktober 2021 - Desember 2021)",
    desp: "<li>determine how easily an application and/or site can operate.</li><li>tasked with creating applications or sites that are easy to use by users, and look cool, nice, but simple.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Paskibra",
    cardImage: "assets/images/experience-page/paskibra.png",
    description:
      "2012-2013</br><p><b>Member</b></p>.",
  },
  {
    title: "Rohis",
    cardImage: "assets/images/experience-page/rohis.jpg",
    description:
      "2015-2018</br><p><b>Member Hadroh</b></p>.",
  },
  {
    title: "Hima Prodi",
    cardImage: "assets/images/experience-page/hima.png",
    description:
      "2018-2019</br><p><b>Member</b></p>.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Magang Kampus Merdeka PT Impactbyte Teknologi Edukasi",
    subtitle: "2021 | Harapan Bersama Polytechnic",
    image: "assets/images/experience-page/magang.jpg",
    desp: "GPA 3,37/4,00.",
  },
  {
    title: "",
    subtitle: "",
    image: "",
    desp: "",
  },
  {
    title: "",
    subtitle: "",
    image: "",
    desp: "",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>  
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
