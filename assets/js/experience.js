AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "IT Strategic/Business Partner",
    cardImage: "assets/images/experience-page/BNI.jpg",
    place: "PT Bank Negara Indonesia(Persero) Tbk",
    time: "(December 2021 - Present)",
    desp: "<li>Part of Information Technology Strategy And Architecture (STI) Division From BNI TECHSHIP Program.</li> <li>Create Business Design Document.</li><li>Support IT Business Analyst And Project Manager.</li>",
  },
  {
    title: "Back End Developer",
    cardImage: "assets/images/experience-page/BNI.jpg",
    place: "PT Bank Negara Indonesia(Persero) Tbk",
    time: "(June, 2021 - December 2021)",
    desp: "<li>Part of Information Technology Strategy And Architecture (STI) Division From BNI TECHSHIP Program.</li> <li>Using Tools ASP.NET Entity Framework Core 5.0 as Web API Develop.</li>",
  },
  {
    title: "Information Technology Support",
    cardImage: "assets/images/experience-page/POLTEK.jpg",
    place: "Harapan Bersama Polytechnic",
    time: "(November,2018 - November, 2020)",
    desp: "<li>Troubleshooting Hardware/Software, Network Administration, Web/Desktop Programming.</li><li>Management Control, Student And Lecturer Services.</li>",
  },
  {
    title: "Information Technology Director",
    cardImage: "assets/images/experience-page/Healme.png",
    place: "Healme.id",
    time: "(September, 2021 - October)",
    desp:"<li>Create a Web and It's Support For Mental Health Campaigns.</li><li>Recruiter Volunteer.</li>",
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
    title: "Polytechnic Karate Club",
    cardImage: "assets/images/experience-page/INKAI.png",
    description:
      "2018-2019</br><p><b>Member</b></p>.",
  },
  {
    title: "Scout Movement",
    cardImage: "assets/images/experience-page/PRAMUKA.png",
    description:
      "2014-2017</br><p><b>Rover Scout</b></p>.",
  },
  {
    title: "MPK SMA Negeri 1 Slawi",
    cardImage: "assets/images/experience-page/MPK.png",
    description:
      "2015-2016</br><p><b>Administrator</b></p>.",
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
    title: "Best Graduated In Associate's Computer Engineering Degree",
    subtitle: "2021 | Harapan Bersama Polytechnic",
    image: "assets/images/experience-page/Wisuda.jpg",
    desp: "Maxima Cumlaude Predicate GPA 4.00.",
  },
  {
    title: "Best Student Award for 5th Semester of Computer Engineering Study Program",
    subtitle: "2021 | Harapan Bersama Polytechnic",
    image: "assets/images/experience-page/Semester5.jpg",
    desp: "GPA 4,00/4,00.",
  },
  {
    title: "3rd Place Most Outstanding Student Award",
    subtitle: "2020 | Harapan Bersama Polytechnic",
    image: "assets/images/experience-page/Mapres.jpg",
    desp: "3rd Place From 10 Participant All Study Program.",
  },
  {
    title: "Best Student Award for 4th Semester of Computer Engineering Study Program",
    subtitle: "2020 | Harapan Bersama Polytechnic",
    image: "assets/images/experience-page/Semester4.jpg",
    desp: "GPA 4,00/4,00.",
  }
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
