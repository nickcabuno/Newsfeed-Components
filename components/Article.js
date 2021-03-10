// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  }
];


/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>*/
  const articles = document.querySelector('.articles')

  function articleMaker(article){

    const articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    const articleTitle = document.createElement('h2');
    articleTitle.textContent = article.title;

    const date = document.createElement('p');
    date.classList.add('date');
    date.textContent = article.date;

    const p1 = document.createElement('p');
    p1.textContent = article.firstParagraph;

    const p2 = document.createElement('p');
    p2.textContent = article.secondParagraph;

    const p3 = document.createElement('p');
    p3.textContent = article.thirdParagraph;

    const button = document.createElement('span');
    button.classList.add('expandButton');
    button.textContent = '+';

    articleDiv.appendChild(articleTitle);
    articleDiv.appendChild(date);
    articleDiv.appendChild(p1);
    articleDiv.appendChild(p2);
    articleDiv.appendChild(p3);
    articleDiv.appendChild(button);
    



 /* Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.*/

  button.addEventListener("click", function() {
    articleDiv.classList.toggle('article-open');
  });


  /*Step 3: Don't forget to return something from your function!*/

    return articleDiv
}

 /* Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).*/

  const articleElements = data.map(articleObj => {
    const article = articleMaker(articleObj)
    return article
  })
  articleElements.forEach(article => {
    articles.appendChild(article)
  })
  

 /* Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/

data.push(
  {
    title: 'Copypasta',
    date: 'feb, 10, 2021',
    firstParagraph: `As a former SR-71 pilot, and a professional keynote speaker, the question I'm most often asked is "How fast would that SR-71 fly?" I can be assured of hearing that question several times at any event I attend. It's an interesting question, given the aircraft's proclivity for speed, but there really isn't one number to give, as the jet would always give you a little more speed if you wanted it to. It was common to see 35 miles a minute. Because we flew a programmed Mach number on most missions, and never wanted to harm the plane in any way, we never let it run out to any limits of temperature or speed. Thus, each SR-71 pilot had his own individual “high” speed that he saw at some point on some mission. I saw mine over Libya when Khadafy fired two missiles my way, and max power was in order. Let’s just say that the plane truly loved speed and effortlessly took us to Mach numbers we hadn’t previously seen. So it was with great surprise, when at the end of one of my presentations, someone asked, “what was the slowest you ever flew the Blackbird?” This was a first. After giving it some thought, I was reminded of a story that I had never shared before, and relayed the following. I was flying the SR-71 out of RAF Mildenhall, England , with my back-seater, Walt Watson; we were returning from a mission over Europe and the Iron Curtain when we received a radio transmission from home base. As we scooted across Denmark in three minutes, we learned that a small RAF base in the English countryside had requested an SR-71 fly-past. The air cadet commander there was a former Blackbird pilot, and thought it would be a motivating moment for the young lads to see the mighty SR-71 perform a low approach. No problem, we were happy to do it. After a quick aerial refueling over the North Sea , we proceeded to find the small airfield. Walter had a myriad of sophisticated navigation equipment in the back seat, and began to vector me toward the field. Descending to subsonic speeds, we found ourselves over a densely wooded area in a slight haze. Like most former WWII British airfields, the one we were looking for had a small tower and little surrounding infrastructure. Walter told me we were close and that I should be able to see the field, but I saw nothing. Nothing but trees as far as I could see in the haze. We got a little lower, and I pulled the throttles back from 325 knots we were at. With the gear up, anything under 275 was just uncomfortable. Walt said we were practically over the field—yet; there was nothing in my windscreen. I banked the jet and started a gentle circling maneuver in hopes of picking up anything that looked like a field. Meanwhile, below, the cadet commander had taken the cadets up on the catwalk of the tower in order to get a prime view of the fly-past. It was a quiet, still day with no wind and partial gray overcast. Walter continued to give me indications that the field should be below us but in the overcast and haze, I couldn't see it.`,
    
    secondParagraph: `The longer we continued to peer out the window and circle, the slower we got. With our power back, the awaiting cadets heard nothing. I must have had good instructors in my flying career, as something told me I better cross-check the gauges. As I noticed the airspeed indicator slide below 160 knots, my heart stopped and my adrenalin-filled left hand pushed two throttles full forward. At this point we weren't really flying, but were falling in a slight bank. Just at the moment that both afterburners lit with a thunderous roar of flame (and what a joyous feeling that was) the aircraft fell into full view of the shocked observers on the tower. Shattering the still quiet of that morning, they now had 107 feet of fire-breathing titanium in their face as the plane leveled and accelerated, in full burner, on the tower side of the infield, closer than expected, maintaining what could only be described as some sort of ultimate knife-edge pass. Quickly reaching the field boundary, we proceeded back to Mildenhall without incident. We didn't say a word for those next 14 minutes. After landing, our commander greeted us, and we were both certain he was reaching for our wings. Instead, he heartily shook our hands and said the commander had told him it was the greatest SR-71 fly-past he had ever seen, especially how we had surprised them with such a precise maneuver that could only be described as breathtaking. He said that some of the cadet’s hats were blown off and the sight of the plan form of the plane in full afterburner dropping right in front of them was unbelievable. Walt and I both understood the concept of “breathtaking” very well that morning, and sheepishly replied that they were just excited to see our low approach. As we retired to the equipment room to change from space suits to flight suits, we just sat there-we hadn't spoken a word since “the pass.” `,

    thirdParagraph: `Finally, Walter looked at me and said, “One hundred fifty-six knots. What did you see?” Trying to find my voice, I stammered, “One hundred fifty-two.” We sat in silence for a moment. Then Walt said, “Don’t ever do that to me again!” And I never did. A year later, Walter and I were having lunch in the Mildenhall Officer’s club, and overheard an officer talking to some cadets about an SR-71 fly-past that he had seen one day. Of course, by now the story included kids falling off the tower and screaming as the heat of the jet singed their eyebrows. Noticing our HABU patches, as we stood there with lunch trays in our hands, he asked us to verify to the cadets that such a thing had occurred. Walt just shook his head and said, “It was probably just a routine low approach; they're pretty impressive in that plane.” Impressive indeed. Little did I realize after relaying this experience to my audience that day that it would become one of the most popular and most requested stories. It’s ironic that people are interested in how slow the world’s fastest jet can fly. Regardless of your speed, however, it’s always a good idea to keep that cross-check up…and keep your Mach up, too.`,
  }
    );


    
  const lastArticle = articleMaker(data[data.length - 1])
  
  articles.appendChild(lastArticle)
  