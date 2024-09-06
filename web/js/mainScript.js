// setTimeout(function(){alert('Hi there! You may click the image to learn more about me :)')},4000);

function bio() {
    const outputDiv = document.getElementById('typing-container');
    const txt = `Welcome to my website! I'm Shafeeq, a passionate learner and explorer with a diverse background. In the early days of my life, I developed an immense aspiration to be a polyglot. I spent more than 15 years learning the Arabic language including a short spell of nearly half a decade in Egypt, immersing myself in the culture and mastering not only classical Arabic, but also the local Egyptian slang.<nl>My journey into the tech world began in 2018, when I started learning web development sporadically. In 2022, I completed my Master's Degree in Asian Studies before embarking on a career in the tech sector. That was when I decided to give my all and pick up where I left off. Most importantly, my experiences thus far have made me realise that learning to code and understanding the syntax of different programming languages is akin to learning a language and the culture itself.<nl>Currently, I am well-versed in the essential frontend languages — namely, HTML5, CSS3 and JavaScript and working my way towards understanding various backend programming languages and databases such as, NodeJS, MongoDB, Mongoose, Python and Java. I have successfully completed a number of projects, showcasing my skills in both frontend and backend development. I am constantly exploring new technologies and learning new skills to stay ahead in the ever-evolving world of software development. I am excited to share my knowledge and experience with you through my website. Thank you for visiting!<nl>                                     <nl>Shafeeq`
    const splitted = txt.split('<nl>');
    splitted.forEach(function(){
      const p = document.createElement('p');
      outputDiv.appendChild(p);
    });
    
    const paras = outputDiv.querySelectorAll('p')
    let i = 0;
    let currentPara = 0;
    const intervalId = setInterval(function() {
      paras[currentPara].innerHTML += splitted[currentPara][i];
      i++
      if (i === splitted[currentPara].length) {
        currentPara++;
        i = 0;
        if (currentPara === splitted.length) {
          clearInterval(intervalId)
        }
      }
    }, 35);
}

const img = document.querySelector('.displayPic')
img.addEventListener('click', () => {
    bio()
}, {once:true})
