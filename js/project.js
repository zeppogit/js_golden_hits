
//  ARRAY OF JAVASCRIPT OBJECTS 

const hits = [
    {
    month: 'January',
    label_img: 'raindrops.jpg',
    title: 'Raindrops Keep Falling on My Head',
    artist: 'B.J. Thomas',
    recording: 'raindrops.mp3'
    },
    {
    month: 'February',
    label_img: 'thankyou.jpg',
    title: 'Thank You',
    artist: 'Sly and The Family Stone',
    recording: 'thankyou.mp3'
    },
    {
    month: 'March',
    label_img: 'bridge.jpg',
    title: 'Bridge Over Troubled Waters',
    artist: 'Simon and Garfunkel',
    recording: 'bridge.mp3'
    },
    {
    month: 'April',
    label_img: 'letitbe.jpg',
    title: 'Let It Be',
    artist: 'The Beatles',
    recording: 'letitbe.mp3'
    },
    {
    month: 'May',
    label_img: 'american.jpg',
    title: 'American Woman',
    artist: 'The Guess Who',
    recording: 'american.mp3'
    },
    {
    month: 'June',
    label_img: 'longandwinding.jpg',
    title: 'The Long And Winding Road',
    artist: 'The Beatles',
    recording: 'longandwinding.mp3'
    },
    {
    month: 'July',
    label_img: 'mamatoldme.jpg',
    title: 'Mama Told Me (Not To Come)',
    artist: 'Three Dog Night',
    recording: 'mamatoldme.mp3'
    },
    {
    month: 'August',
    label_img: 'closetoyou.jpg',
    title: 'Close To You',
    artist: 'The Carpenters',
    recording: 'closetoyou.mp3'
    },
    {
    month: 'September',
    label_img: 'war.jpg',
    title: 'War',
    artist: 'Edwin Starr',
    recording: 'war.mp3'
    },
    {month: 'October',
    label_img: 'i_bethere.jpg',
    title: "I'll Be There",
    artist: 'The Jackson 5',
    recording: 'i_bethere.mp3'
    },
    {
    month: 'November',
    label_img: 'thinkiloveyou.jpg',
    title: 'I Think I Love You',
    artist: 'The Partridge Family',
    recording: 'thinkiloveyou.mp3'
    },
    {
    month: 'December',
    label_img: 'tearsofaclown.jpg',
    title: 'Tears of A Clown',
    artist: 'Smokey Robinson & The Miracles',
    recording: 'tearsofaclown.mp3'
    }                                                                                                                
];

// FOR LOOP TO INSERT HTML INTO MAIN CONTENT USING JAVASCRIPT OBJECT DATA

const calendar = document.querySelector('#flex1'); 

let js_html = '';

for (let i = 0; i < 12; i++ ) {
    let hit = hits[i];
    js_html += `
   
    <div id="${hit.month.toLowerCase()}" class="flex-item">
        <h2>${hit.month}</h2>
        <div>
          <img src="img/${hit.label_img}" alt="vinyl 45rpm label">
        </div>
         <p>${hit.title}</p>
         <p>by ${hit.artist}</p>
        <div class="play1">
            <audio controls class="play2">
                <source src="mp3/${hit.recording}" type="audio/mp3">
            </audio> 
        </div>
    </div> 
 `; 
}

calendar.innerHTML = js_html;


//Newsletter sign up

const emailInput = document.getElementById("email");

let emailList = new Set();

//   Validating email address

function isValidEmail(email) {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);  
     //alternate:  ^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
}
     
//EVENTS

function showOrHideTip(show, element) {
    // show element when show is true, hide when false
    if (show) {
      element.style.display = "foot";
    } else {
      element.style.display = "none";
    }
  }
  
  function createListener(validator) {
    return e => {
      const text = e.target.value;
      const valid = validator(text);
      const showTip = text !== "" && !valid;
      const tooltip = e.target.nextElementSibling;
      showOrHideTip(showTip, tooltip);
    };
  }
  
//listener
emailInput.addEventListener("input", createListener(isValidEmail));


emailInput.addEventListener('submit', (event) => {
           emailList.add(event.target.value);
   });
   
// TEST INSERT HTML FROM JSON

