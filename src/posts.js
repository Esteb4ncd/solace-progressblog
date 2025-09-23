const posts = [
    {
      id: 1,
      header: "Test Post",
      date: "2025-09-13",
      author: "Sarah Wang",
      description: `This? I love Duloc, first of all. Very clean. -What are you doing here? -Really, it's
rude enough being alive, when no one wants you. But showing up uninvited to a wedding... -Fiona! I
need to talk to you. -Oh, now you wanna talk? Well it's a little late for that. So if you'll excuse me.
-But you can't marry him! -And why not? Because, because he's just marrying you so he can be
king. -Outrageous! Fiona, don't listen to him. -He's not your true love. -What do you know about
true love? -Well, I ...I'm in... Oh, this is precious. The Ogre has fallen in love with the princess.
Laugh. Shrek. Is this true? Who cares. It's preposterious. Fiona, my love, we gonna kiss away for
our happily ever after. Now kiss me! By night one way, by day another. I wanted to show you before.
Well. That explains a lot. Oh. It's disgusting. Guards, guards. I order you to get them out of my sight.
-Now! Get them! Get them, both! -No! This marriage is minding, and that makes me king. See? See?
-Shrek! -No. -Don't just stand there, you dogs. -Get out of my way. No! Shrek! -And as for you my
wife. -Fiona! I'll have you locked back in that tower for the rest of your days! I will have order. I will
have potential. I will have... All right, nobody move! I got a dragon here and I'm not afraid to use it.
I'm a donkey on the edge! Celebrity marriages. They never last, do they? Go ahead Shrek. -Fiona?
-Yes, Shrek? I love you. Really? Really, really. I love you too. A time for true love's first kiss... Fiona?
Fiona? Are you all right? Yes. But I don't understand. I'm supposed to be beautiful. But you are
beautiful. I was hoping this would be a happy ending. God bless us, everyone.
Send this
to your
friend `,
      image: process.env.PUBLIC_URL + "/post-images/catTest.png"
    },
    {
        id: 2,
        header: "Test Post",
        date: "2025-09-13",
        description: `This is a description for post 1 Once upon a time there was a lovely princess. But she had an enchantment upon her of a fearful
  sort, which could only be broken by Love's first kiss. She was locked away in a castle guarded by a
  terrible fire breathing dragon. Many brave knights had attempted to free her from this dreadful
  prison, but none prevailed. She waited in the dragon's keep in the highest room of the tallest tower
  for her true love and true love's first kiss. Like that's ever going to happen. What a loony. Shrek
  Beware Stay out I think he's in here. All right. Lets get it! Hold on. Do you know what that thing can
  do to you? Yeah. He'll groan into your bones for his brains. Well actually that would be a giant. Now
  Ogres, huh, they are much worse. They'll make a soup from your freshly peeled skin. They'll chew
  your livers, squeeze the jelly from your eyes. Actually, it's quite good on toast. Back, back beast,
  back! I warned you! Right. This is the part, where you run away. Yeah! And stay out. Wanted.
  Fairytale creatures. Right, this one is full. Take it away. Give me that. Your fine days are over. -25
  pieces of silver for the witch. Next. -Come on. Sit down there! And be quiet! This cage is so small.
  You wouldn't turn me in. I'll never be stubborn again. I can change. Please, give me another chance.
  Oh, shut up! Next. What do we got? This little wooden puppet. I'm not a puppet, I'm a real boy. Five
  shillings for the possessed toy. Take it away. No! Please, don't let them do it! Next. What do you
  got? Well, I've got a talking donkey! Right. Well that's good for ten schillings, if you can prove it. Oh,
  go ahead fella. Well? He's just a li..., just a little nervous. He's really quite a chatterbox. You
  boneheaded donkey! That's it. I have heard enough. Guards! No, no, he talks, he does! I can talk. I
  love to talk. I've talked to... Get her out of my sight! -No, no, I swear! Hey, I can fly. -He can fly! -He
  can fly! He can talk! -That's right, fool! Now I'm a flying, talking donkey! You might have seen house
  fly, maybe even a superfly. But I bet you ain't never seen a donkey fly! Seize him! Get him! This way!
  Hurry! You there. Ogre. -I. By the order of lord Farquaad. I am authorized to place you both under
  arrest. And transport you to designated resettlement facility. Oh really? You and what army? Can I
  say something to you? Listen, you were really, really something, back there. Incredible. Are you
  talking to... ...me? Yes, I was talking to you. Can I just tell you that you were really great back there
  with those guards. They thought that was all over there. And then you showed up and BAM. There
  was tripping on over themselves like babes in the woods. That really made me feel good to see that.
  Oh, that's great. Really. Man, it's good to be free. Now, why don't you go celebrate your freedom
  with your own friends? But I... I don't have any friends. And I'm not going out there by myself. Hey
  wait a minute. I have a great idea... I'll stick with you. You and me in green fighting machine.
  Together we'll scare the spin if anybody crosses us. Oh, a, that was really scary. Maybe you don't
  mine me saying. If that don't work, your breath will certainly do the job done, 'cause... you
  definitively need some tic-tac or something, 'cause your breath stinks! Man you've ??? my note!
  Just like the time... ...and then I ate some rotten berries. Man I had some strong gases leaking out of
  my but that day. Why are you following me? I'll tell you why. 'Cause I'm all alone, there is no one
  here, beside me. My problems have all gone. There's no one to derive me. But you got to have
  free ... -ave you locked back in that tower for the rest of your days! I will have order. I will
  have potential. I will have... All right, nobody move! I got a dragon here and I'm not afraid to use it.
  I'm a donkey on the edge! Celebrity marriages. They never last, do they? Go ahead Shrek. -Fiona?
  -Yes, Shrek? I love you. Really? Really, really. I love you too. A time for true love's first kiss... Fiona?
  Fiona? Are you all right? Yes. But I don't understand. I'm supposed to be beautiful. But you are
  beautiful. I was hoping this would be a happy ending. God bless us, everyone.
  Send this
  to your
  friend `,
        image: process.env.PUBLIC_URL + "/post-images/catTest.png"
      },{
      id: 3,
      header: "Week 2 Update: Logos, Features, and Mentor Wisdom",
      date: "2025-09-16",
      author: "Esteban Cruz D",
      description:`<h2>Introduction</h2>
<p>
  Week 2 was all about identity and direction for Solace — from logos and
  features to research prep and our first steps in development.
</p>

<h2>Branding & Features</h2>
<p>
  Our ideation crew (Rosie, Rachel, Angel, Matt) sketched out feature concepts,
  while Matt and Rachel drafted early logos. After some lively debate, we voted
  on two favorites and locked in a color palette that feels calm yet energizing.
</p>

<h2>Research Prep</h2>
<p>
  Sarah led the charge on survey and interview planning, setting us up to gather
  real user insights in the next sprint.
</p>

<h2>Development Progress</h2>
<p>
  On the dev side, Zinna researched APIs, while Esteban set up the repo and Expo
  environment to get the project rolling.
</p>

<h2>Mentor Check-Ins</h2>
<p><strong>Daemon:</strong> Talked target audience, features, and branding feedback.</p>
<p>
  <strong>Henry:</strong> Revisited our team charter, explored AI integration, and
  mapped first development steps.
</p>

<h2>Looking Ahead</h2>
<p>
  Rosie and Rachel started work on a project poster, and as a team we laid out
  our next sprint, with a focus on user research, refining designs, and building
  on our dev setup.
</p>

<h2>Wrap-Up</h2>
<p>
  Week 2 gave us clarity — a visual identity, sharper features, and our first dev
  foundations. With momentum building, Week 3 is where we start putting Solace
  to the test.
</p>

<p>From the trenches,<br /><br /><br />— Esteban &amp; The Solace Team</p>
`,
      image: process.env.PUBLIC_URL + "/post-images/week2image.png"}
  ];
  
  export default posts;
  