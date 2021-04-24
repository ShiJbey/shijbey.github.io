const projects = [
  {
    title: 'Infiniforge',
    description: `
    I started this project in 2016 as an effort to learn more
    about procedural content generation and computer graphics. The
    then-upcoming release of No Man's Sky and my interest in
    blacksmithing inspired me to pursue this. My goal was to
    submit it to the r/proceduralgeneration
    subreddit challenge linked below. Since then, I have
    continuously tinkered with this project in my free time.
    Infiniforge is a NodeJs server that exports 3D meshes (using
    ThreeJs) as glTF JSON via a REST API. After exporting the
    models, they can then be imported into Unity or any other
    software that supports the glTF format.
    `,
    image: 'assets/infiniforge.png',
    image_alt: 'sword screenshot',
    links: [
      {
        icon: 'fab fa-reddit',
        text: 'August 2016 Reddit PCG Challenge',
        url:
          'https://www.reddit.com/r/proceduralgeneration/comments/4wubjy/monthly_challenge_9_august_2016_procedural_weapons/',
      },
      {
        icon: 'fab fa-github',
        text: 'View on GitHub',
        url: 'https://github.com/ShiJbey/Infiniforge',
      },
      {
        icon: 'fas fa-play',
        text: 'Play a Demo',
        url: 'infiniforge.html',
      },
    ],
  },
  {
    title: 'Magpie',
    description: `
    This was the final project for my Fall 2018 15-466: Computer Game
    Programming course. I worked on a team with three other students
    where my primary role was to write the code which imported our 3D
    assets, built the level, and instanced characters/animations. In
    the game, you play a Magpie bird who is stealing items from a
    museum. How many items can you steal before you're caught by
    security?
    `,
    image: 'assets/magpie.jpg',
    image_alt: 'Magpie poster',
    links: [
      {
        icon: 'fas fa-download',
        text: 'Download the Game',
        url: 'https://github.com/ShiJbey/Magpie/releases/tag/0.2.0',
      },
      {
        icon: 'fab fa-github',
        text: 'View on GitHub',
        url: 'https://github.com/ShiJbey/Magpie',
      },
    ],
  },
  {
    title: 'Raid AI',
    description: `
    Inspired by my enjoyment of raids in games like Destiny, I
    started working on this project during my free time. The goal
    is to train AI agents to work as a team to defeat a boss
    character in an MMORPG-style Raid battle. This project is my
    first exploration into cooperative multiagent machine
    learning (MARL). There are two components to this project that
    interest me the most. The first is teaching the team of agents
    to cooperate based on their role on the team (RPG class). The
    second is teaching the large boss character to attack enemies
    and efficiently defend themselves from multiple attackers. I
    think raids are ideal environments for teaching intelligent
    agents cooperation and role-playing skills. I see MMORPGs
    taking advantage of a system like this to produce better
    companion AI. Currently, this project is very much a work
    in progress as I am still designing the environment. If this
    project proves successful, I would like to expand the
    results to a published game. I am not working on this at the
    moment. One day I'll revisit and finish.
    `,
    image: 'assets/raid-ai.png',
    image_alt: 'Raid AI screenshot',
    links: [
      {
        icon: 'fab fa-github',
        text: 'View on GitHub',
        url: 'https://github.com/ShiJbey/RaidAI',
      },
    ],
  },
  {
    title: 'Auditory P300 Event-Related Potentials for Virtual Reality',
    description: `
    This was my masters research project. The goal was to explore
    the use of an auditory P300 BCI paradigm for enabling users to
    select objects in virtual reality. What I ended with was an
    EEG-hardware agnostic Unity project that could be configured
    to run different P300 paradigms in virtual reality. The while
    running the unity scene EEG data is streamed from the headset
    and written out to files to be processed. For example, one can
    take recorded EEG data using a machine learning classifier to
    make predictions as to what object the user wants to select.
    Pictured is the virtual apartment environment with three objects
    used during testing.
    `,
    image: 'assets/vr-screenshot.png',
    image_alt: 'VR screenshot',
    links: [
      {
        icon: 'fas fa-file-pdf',
        text: 'View Masters Thesis',
        url: 'assets/publications/Event_Related_Potentials_for_Virtual_Reality_Interactions.pdf',
      },
      {
        icon: 'fab fa-github',
        text: 'View on GitHub',
        url: 'https://github.com/ShiJbey/AudioERP',
      },
    ],
  },
  {
    title: 'ML Agent Boxing',
    description: `
    I threw this project together over the course of a week as an entry
    in Unity's first challenge for their new 'Ml-Agents' machine learning
    workflow. I had tossed around the idea of using machine learning to
    train AI agents in fighting games, but I had never gotten around to
    it until then. The agents learn via Reinforcement Learning and are
    given a simple policy that positively rewards landed punches on the
    opponent, and negatively awards taking damage. Other behaviors such
    as successful blocking, and advancing on the opponent are rewarded
    as well.
    `,
    image: 'assets/ml-boxing.gif',
    image_alt: 'boxing gif',
    links: [
      // {
      //   icon: 'fas fa-play',
      //   text: 'Play Demo!',
      //   url: 'ml-boxing.html',
      // },
      {
        icon: 'fab fa-github',
        text: 'View on GitHub',
        url: 'https://github.com/ShiJbey/Ml-Agent-Boxing',
      },
    ],
  },
  {
    title: 'Plants vs. Zombies Clone',
    description: `
    This was the first class project from my Fall 2013 "CISC108:
    Intro to Computer Science I" course.  All groups were asked
    to produce a clone of the popular 'Plants vs. Zombies' game.
    This project was both a lesson in game development as well
    as a lesson in handling group dynamics. The game is written
    in Dr.Racket.
    `,
    image: 'assets/pvz-screenshot.png',
    image_alt: 'pvz screenshot',
    links: [
      {
        icon: 'fab fa-github',
        text: 'View on GitHub',
        url: 'https://github.com/ShiJbey/Plants-vs-Zombies-Racket',
      },
    ],
  },
  {
    title: 'Battleship Clone',
    description: `
    This game clone was the final group project in my Fall 2013
    "CISC108: Intro to Computer Science I" course. Out of the
    possible games to create, my group chose to go with Battleship.
    The game was written using Racket and allows one player to play
    against an AI. Core lessons learned during this project included
    coordinating another student and programming GUIs in Racket.
    `,
    image: 'assets/battleship-screenshot.png',
    image_alt: 'battleship screenshot',
    links: [
      {
        icon: 'fab fa-github',
        text: 'View on GitHub',
        url: 'http://github.com/ShiJbey/Battleship-Game-Racket',
      },
    ],
  },
];

export default projects;
