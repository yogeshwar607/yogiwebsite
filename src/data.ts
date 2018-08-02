import {
  Stage,
  Job,
  Education,
  ShowCase,
  Skill,
  SkillSet,
  State,
} from './data_types';

/********
* State *
********/

export const state = new State();

/*********
* Header *
*********/

export const myName = 'Yogeshwar';
export const profession = '';
export const street = '';
export const postalCode = '412101';
export const city = 'Pune';
export const emails: string[] = [
  'soulputs@gmail.com',
  'yogeshwar9354@gmail.com',
  'soulputs@gmail.com',
];
export const socialNetworks: { [key: string]: string } = {
  github: 'https://github.com/yogeshwar607',
  twitter: 'https://twitter.com/yyogeshwar',
  linkedin: 'https://www.linkedin.com/in/yogeshwar-tanwar-22666b47',
};


/*********
* Skills *
*********/

// AWS
// AWS / Compute

export const ec2: Skill = { level: 0.9, name: 'EC2' };
export const ecs: Skill = { level: 0.8, name: 'ECS' };
export const lambda: Skill = { level: 1.0, name: 'Lambda' };

// AWS / Data
export const dynamodb: Skill = { level: 0.8, name: 'DynamoDB' };
export const rds: Skill = { level: 1.0, name: 'DB Service' };
export const s3: Skill = { level: 1.0, name: 'S3' };

// AWS / Flow
//export const apigateway: Skill = { level: 0.9, name: 'API Gateway' };
export const r53: Skill = { level: 1.0, name: 'Route 53' };
export const sns: Skill = { level: 0.9, name: 'SNS' };

// AWS / Management
//export const cloudformation: Skill = { level: 0.9, name: 'CloudFormation' };
//export const cloudtrail: Skill = { level: 0.8, name: 'CloudTrail' };
//export const cloudwatch: Skill = { level: 1.0, name: 'CloudWatch' };
export const iam: Skill = { level: 0.9, name: 'IAM' };

// Backend
// Backend / CI
//export const circleCI: Skill = { level: 0.8, name: 'CircleCI' };
//export const jasmine: Skill = { level: 0.9, name: 'Jasmine' };
//export const jenkins: Skill = { level: 0.9, name: 'Jenkins' };
//export const jest: Skill = { level: 1.0, name: 'Jest' };
export const mocha: Skill = { level: 1.0, name: 'Mocha' };
export const truffle: Skill = { level: 1.0, name: 'Truffle' };

//export const rspec: Skill = { level: 1.0, name: 'RSpec' };
//export const travis: Skill = { level: 0.9, name: 'Travis CI' };

// Backend / Code
// export const asp: Skill = { level: 0.8, name: 'ASP.net' };
//export const coffeescript: Skill = { level: 0.9, name: 'CoffeeScript' };
//export const meteor: Skill = { level: 1.0, name: 'Meteor' };
export const nodejs: Skill = { level: 1.0, name: 'Node.js' };
//export const rails: Skill = { level: 1.0, name: 'Ruby on Rails' };
//export const ruby: Skill = { level: 1.0, name: 'Ruby' };
export const typescript: Skill = { level: 1.0, name: 'TypeScript' };
export const pinescript: Skill = { level: 1.0, name: 'Pinescript' };
export const python: Skill = { level: 1.0, name: 'Python' };
export const go: Skill = { level: 1.0, name: 'go' };


// Backend / Data
export const api: Skill = { level: 1.0, name: 'API' };
//export const apollo: Skill = { level: 1.0, name: 'Apollo GraphQL' };
export const elasticsearch: Skill = { level: 0.7, name: 'elasticsearch' };
//export const gql: Skill = { level: 1.0, name: 'GraphQL' };
//export const mariadb: Skill = { level: 0.8, name: 'MariaDB' };
//export const postgres: Skill = { level: 0.8, name: 'Postgres' };
export const mongodb: Skill = { level: 0.9, name: 'MongoDB' };
//export const mssql: Skill = { level: 0.9, name: 'Microsoft SQL' };
export const psql: Skill = { level: 1.0, name: 'PostgreSQL' };
export const redis: Skill = { level: 0.8, name: 'Redis' };

// Backend / Deploy
export const android: Skill = { level: 0.8, name: 'Android' };
export const cordova: Skill = { level: 0.9, name: 'Apache Cordova' };
export const docker: Skill = { level: 0.9, name: 'Docker' };
export const git: Skill = { level: 1.0, name: 'Git' };
export const heroku: Skill = { level: 0.9, name: 'Heroku' };
export const ios: Skill = { level: 0.9, name: 'iOS' };

// Frontend
// Frontend / Logic
export const backbone: Skill = { level: 0.7, name: 'Backbone.js' };
export const browserify: Skill = { level: 0.8, name: 'Browserify' };
export const jquery: Skill = { level: 1.0, name: 'jQuery' };
export const js: Skill = { level: 1.0, name: 'JavaScript' };
export const websockets: Skill = { level: 0.8, name: 'WebSockets' };

// Frontend / Markup
//export const haml: Skill = { level: 0.9, name: 'Haml' };
//export const handlebars: Skill = { level: 1.0, name: 'Handlebars' };
export const html: Skill = { level: 1.0, name: 'HTML' };
//export const php: Skill = { level: 0.7, name: 'PHP' };
export const markdown: Skill = { level: 0.9, name: 'Markdown' };
export const react: Skill = { level: 0.8, name: 'React' };
export const vuejs: Skill = { level: 1.0, name: 'Vue.js' };

// Frontend / Style
export const css: Skill = { level: 1.0, name: 'CSS' };
export const less: Skill = { level: 0.9, name: 'less' };
export const sass: Skill = { level: 0.9, name: 'Sass' };
export const stylus: Skill = { level: 1.0, name: 'Stylus' };
//export const svg: Skill = { level: 1.0, name: 'SVG (Animations)' };

// Frontend / Design
//export const afterEffects: Skill = { level: 0.3, name: 'After Effects' };
//export const blender: Skill = { level: 0.5, name: 'Blender' };
//export const sketch: Skill = { level: 0.8, name: 'Sketch' };
//export const ui: Skill = { level: 0.7, name: 'User Interface' };
//export const ux: Skill = { level: 0.6, name: 'User Experience' };

// Misc
//export const teamlead: Skill = { level: 0.9, name: 'Team Lead' };
//export const security: Skill = { level: 0.9, name: 'Security' };

// Study
// export const logic: Skill = { level: 0.9, name: 'Logic' };
// export const distributedSys: Skill = { level: 0.7, name: 'Distrib. Sys.' };
// export const imageProcessing: Skill = { level: 0.7, name: 'Image Proces.' };
// export const math: Skill = { level: 0.8, name: 'Math' };
// export const neuronalNetwork: Skill = { level: 0.7, name: 'Neuronal Netw.' };
// export const numeric: Skill = { level: 0.7, name: 'Numeric' };
// export const parallelExec: Skill = { level: 0.7, name: 'Parallel Exec.' };

export const skills: SkillSet[] = [
  {
    title: 'AWS',
    data: [
      {
        title: 'Compute',
        data: {  ec2, ecs, lambda },
      },
      {
        title: 'Data',
        data: {  dynamodb, rds, s3 },
      },
      {
        title: 'Flow',
        data: { r53, sns },
      },
      {
        title: 'Management',
        data: { iam },
      },
    ],
  },
  {
    title: 'Backend',
    data: [
      {
        title: 'CI',
        data: {  mocha,truffle },
      },
      {
        title: 'Code',
        data: {  nodejs, typescript , pinescript , python ,go },
      },
      {
        title: 'Data',
        data: { api,  elasticsearch,  mongodb,  psql, redis },
      },
      {
        title: 'Deploy',
        data: { android, cordova, docker, git, heroku, ios },
      },
    ],
  },
  {
    title: 'Frontend',
    data: [
      {
        title: 'Logic',
        data: { backbone, browserify, jquery, js, websockets },
      },
      {
        title: 'Markup',
        data: {   html, markdown, react, vuejs },
      },
      {
        title: 'Style',
        data: { css, less, sass },
      },
      // {
      //   title: 'Design',
      //   data: { afterEffects, blender, sketch, ui, ux },
      // },
    ],
  },
  // {
  //   title: 'Misc',
  //   data: { teamlead, security },
  // },
  // {
  //   title: 'Study',
  //   data: { logic, distributedSys, imageProcessing, math, neuronalNetwork, numeric, parallelExec },
  // },
];


/*******************
* Curriculum Vitae *
*******************/

export const curriculumVitae: (Job | Education)[] = [
  {
    company: 'shyftplan GmbH',
    description: `
      I lead shyftplans Front- and Backend Developers. I'm responsible to
      design, manage and build the Infrastructure for thousands of concurrent
      Users at Germanys best shift planning and accounting Web Application.
    `,
    startsAt: new Date('2017-07-01'),
    endsAt: undefined,
    remote: false,
    position: [
      'Head of Development',
      'Lead Engineering',
    ],
    skills: {
      lambda,
      rds,
      nodejs,
      mongodb,
      android,
      ios,
      api,
      psql,
      redis,
    },
  },

  {
    company: 'shyftplan GmbH',
    description: `
      I lead shyftplans Front- and Backend Developers. I'm responsible for
      the Web and Mobile Infrastructure for Germanys best shift planning and
      accounting Web Application.
    `,
    startsAt: new Date('2016-12-01'),
    endsAt: new Date('2017-06-30'),
    remote: false,
    position: [
      'Head of Code',
      'Head of Mobile',
    ],
    skills: {
      lambda,
      rds,
      nodejs,
      mongodb,
      android,
      ios,
      api,
      psql,
      redis,
    },
  },

  {
    company: 'shyftplan GmbH',
    description: `
      I plan and build the Mobile App and Infrastructure for Germanys best
      shift planning and accounting Web Application.
    `,
    startsAt: new Date('2014-12-01'),
    endsAt: new Date('2016-11-30'),
    remote: false,
    position: [
      'Head of Mobile',
      'Backend Developer',
    ],
    skills: {
      nodejs,
      mongodb,
      android,
      ios,
      api,
      psql,
      redis,
    },
  },

  {
    company: 'shyftplan GmbH',
    description: `
      I plan and build the Infrastructure pre and post launch for Germanys best
      shift planning and accounting Web Application.
    `,
    startsAt: new Date('2015-02-01'),
    endsAt: new Date('2015-07-01'),
    remote: false,
    position: 'Backend Developer',
    skills: {
      psql,
      redis,
      elasticsearch,
    },
  },

  {
    company: 'shyftplan GmbH',
    description: `
      I remotely plan and build the Infrastructure pre and post launch for
      Germanys best shift planning and accounting Web Application.
    `,
    startsAt: new Date('2014-12-01'),
    endsAt: new Date('2015-01-31'),
    remote: true,
    position: 'Backend Developer',
    skills: {
      psql,
      redis,
      elasticsearch,
    },
  },

  {
    company: 'Nutanix',
    description: `
      I remotely worked as Frontend Developer on the Server Admin Interface of
      Nutanix Cloud Infrastructure.
    `,
    startsAt: new Date('2014-11-01'),
    endsAt: new Date('2015-01-31'),
    remote: true,
    position: 'Frontend Developer',
    skills: {
      nodejs,
      less,
      backbone,
    },
  },

  {
    company: 'Nutanix',
    description: `
      I remotely implemented a complete redesign of Nutanix website with
      PHP and less.
    `,
    startsAt: new Date('2014-08-01'),
    endsAt: new Date('2014-10-31'),
    remote: true,
    position: 'Frontend Developer',
    skills: {
      js,
      less,
    },
  },

  {
    company: 'Volkswagen AG',
    description: `
      I researched a live video processing solution at Volkswagens destruction
      free analysis Team.
    `,
    startsAt: new Date('2014-02-01'),
    endsAt: new Date('2015-01-31'),
    remote: false,
    position: 'Developer (Research - NDA)',
    skills: {
      nodejs,
      mongodb,
    },
  },

  {
    company: 'Novotrend GmbH',
    description: `
      I designed and planned build the Infrastructure of the most common Web
      Application to manage the process for pivate job adviser. I was also
      involved in creating a CRM for customer Websites.
    `,
    startsAt: new Date('2010-04-01'),
    endsAt: new Date('2013-12-31'),
    remote: false,
    position: 'Head of Code',
    skills: {
      nodejs,
    },
  },

  {
    university: 'Philipps-Universität Marburg',
    description: `
      I studied IT with secondary subject Math. My focus was on Numeric,
      Parralel Execution, Neural Networks and functional programming languages.
    `,
    startsAt: new Date('2004'),
    endsAt: new Date('2015'),
    graduiation: 'Intermediate diploma',
    skills: {
    },
  },

  {
    company: 'Freelancer',
    description: `
      I created Websites for small and medium sized companies and worked
      remotely for enterprise customers.
    `,
    startsAt: new Date('2002'),
    endsAt: undefined,
    remote: true,
    position: 'Full Stack Developer',
    skills: {
      nodejs,
      react,
      mongodb,
      psql,
      stylus,
      less,
      sass,
    },
  },
];


/**************
* Experiments *
**************/

export const experiments: ShowCase[] = [
  {
    name: 'Button Animations',
    description: `
      I created a couple of different Buttons which are planned to be the main
      call to action buttons on a website. All buttons are previewed on dribbble
      and the code is available Open Source at CodePen.
    `,
    startsAt: new Date('2014-08-05'),
    endsAt: new Date('2017-07-02'),
    urls: [
      'https://dribbble.com/shots/3545734-Liquid-button-v2',
      'https://dribbble.com/shots/2629106-Button-Group',
      'https://dribbble.com/shots/1673204-Submit-Button',
    ],
    media: [],
    skills: {
      css,
      stylus,
      html,
      js
    },
  },

  {
    name: 'Particle Effects',
    description: `
      I experimented a lot to find a the best way to create performant three
      dimensional particle effects on a 2d canvas before WebGL was available at
      Browsers.
    `,
    startsAt: new Date('2014-08-05'),
    endsAt: new Date('2017-07-02'),
    urls: [
      'https://dribbble.com/shots/2649284-Dusty-Particle-Sphere',
    ],
    media: [],
    skills: {
      html,
      js,
    },
  },

  {
    name: 'Hamburder Icon Animations',
    description: `
      I created a couple of different hamburger menu icon animations to open
      and close a menu. All icons are planned with sketch. The base svgs are all
      hand written with basic svg path commands. The icons are previewed on
      dribbble and the code is available Open Source at CodePen.
    `,
    startsAt: new Date('2014-08-05'),
    endsAt: new Date('2017-07-02'),
    urls: [
      'https://dribbble.com/shots/3539398--version-3',
      'https://dribbble.com/shots/3529235--version-2',
      'https://dribbble.com/shots/1674602-Menu-open-back',
      'https://dribbble.com/shots/1671182--version-1',
    ],
    media: [],
    skills: {
      css,
      stylus,
      html,
      js,
    },
  },

];


/***********
* Projects *
***********/

export const projects: ShowCase[] = [
  {
    name: 'Squoint',
    description: `
      Squoint is a puzzle game which is optimized for mobile devices and touch
      gestures. The game is currently in closed beta and will be launched soon.
    `,
    startsAt: new Date('2017'),
    endsAt: undefined,
    urls: [],
    media: [],
    skills: {
      s3,
      nodejs,
      ec2,
      lambda,
      typescript,
      stylus,
      html,
      vuejs,
    },
  },


  
];


/********
* Talks *
********/

export const talks: ShowCase[] = [
  {
    name: 'Lets talk about ... API (of shyftplan)',
    description: `
      A short introduction of APIs in general and the models of shyftplan in
      specific. This Talk was a internal presentation for shyftplan.
    `,
    startsAt: new Date('2018'),
    endsAt: new Date('2018'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--api',
      'http://lets-talk-about--api.tamino-martinius.de',
    ],
    media: [],
    skills: {
      api,
      nodejs,
      html,
      stylus,
    },
  },

  {
    name: 'Lets talk about ... SQL Query Performance',
    description: `
      A small guide in writing good and performant SQL Queries which give very
      responsed even with millions of records. I also explain why/when a database
      index is useful and which one i should use.
      This Talk was a internal presentation for shyftplan.
    `,
    startsAt: new Date('2018'),
    endsAt: new Date('2018'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--sql-query-performance',
      'http://lets-talk-about--sql-query-performance.tamino-martinius.de',
    ],
    media: [],
    skills: {
      psql,
      nodejs,
      html,
      stylus,
    },
  },

  {
    name: 'Lets talk about ... GraphQL',
    description: `
      When should i use GraphlQL and what are the differences to REST and how
      does a GraphQL API look like from the Consumers and Developers perspective.
      This Talk was a internal presentation for shyftplan.
    `,
    startsAt: new Date('2017'),
    endsAt: new Date('2017'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--graphql',
      'http://lets-talk-about--graphql.tamino-martinius.de',
    ],
    media: [],
    skills: {
      nodejs,
      html,
      stylus,
    },
  },

  {
    name: 'Lets talk about ... TypeScript',
    description: `
      A quick introduction to TypeScript and its differenced to JavaScript.
      This Talk was a internal presentation for shyftplan.
    `,
    startsAt: new Date('2017'),
    endsAt: new Date('2017'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--typescript',
      'http://lets-talk-about--typescript.tamino-martinius.de',
    ],
    media: [],
    skills: {
      typescript,
      nodejs,
      html,
      stylus,
    },
  },

  {
    name: 'Lets talk about ... Template',
    description: `
      A template with example slides. Thats my base branch with which i create
      my slides for presentations.
    `,
    startsAt: new Date('2017'),
    endsAt: undefined,
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--template',
      'https://github.com/tamino-martinius/lets-talk-about--example',
    ],
    media: [],
    skills: {
      api,
      nodejs,
      html,
      stylus,
    },
  },
];


/***********
* Packages *
***********/

export const packages: ShowCase[] = [
  {
    name: 'Lets talk about ... Template',
    description: `
      A template with example slides. Thats my base branch with which i create
      my slides for presentations.
    `,
    startsAt: new Date('2017'),
    endsAt: undefined,
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--template',
      'https://github.com/tamino-martinius/lets-talk-about--example',
    ],
    media: [],
    skills: {
      api,
      nodejs,
      html,
      stylus,
    },
  },

  {
    name: 'Next Model',
    description: `
      Next Model is the evolution of Meteor Smart Record. With this package
      you are able to define Model relations and write database independend
      queries to fetch data.
    `,
    startsAt: new Date('2016'),
    endsAt: undefined,
    urls: [
      'https://github.com/tamino-martinius/node-next-model',
      'https://github.com/tamino-martinius/node-next-model-api-router',
      'https://github.com/tamino-martinius/node-next-model-knex-connector',
      'https://github.com/tamino-martinius/node-next-model-api-server-express',
      'https://github.com/tamino-martinius/node-next-model-local-storage-connector',
      'https://github.com/tamino-martinius/node-next-model-api-client-connector',
    ],
    media: [],
    skills: {
      nodejs,
      typescript,
      js,
      psql,
      api,
    },
  },

  {
    name: 'Meteor Smart Record',
    description: `
      Meteor Smart Record is a package to define Model relations and write
      MongoDB queries in a simple and object orientated way. It's a dependency
      for Meteor Smart Form which is a simple way to create forms based on models.
      This pacakge is discontinued on favor of Next Model which is a Meteor
      independent solution.
    `,
    startsAt: new Date('2015'),
    endsAt: new Date('2017'),
    urls: [
      'https://github.com/tamino-martinius/meteor-smart-record',
      'https://github.com/tamino-martinius/meteor-smart-form',
      'https://github.com/tamino-martinius/meteor-smart-form-delete-button',
    ],
    media: [],
    skills: {
      js,
      mongodb,
    },
  },

  {
    name: 'Meteor ics',
    description: `
      A iCalendar .ics export which also enabled to integrate recurring events.
    `,
    startsAt: new Date('2015'),
    endsAt: new Date('2015'),
    urls: [
      'https://github.com/tamino-martinius/meteor-ics',
    ],
    media: [],
    skills: {
      js,
    },
  },

  {
    name: 'Meteor lazy Analytics',
    description: `
      This pacakge provides a non blocking way to integrate Google Analytics
      where the credentials are dynamically fetched from the Server.
    `,
    startsAt: new Date('2015'),
    endsAt: new Date('2015'),
    urls: [
      'https://github.com/tamino-martinius/meteor-lazy-analytics',
    ],
    media: [],
    skills: {
      js,
    },
  },

  {
    name: 'Meteor Method Pagination',
    description: `
      This pacakge is a easy way to integrate pagination of data with Meteor
      Server side methods..
    `,
    startsAt: new Date('2014'),
    endsAt: new Date('2014'),
    urls: [
      'https://github.com/tamino-martinius/meteor-method-pagination',
    ],
    media: [],
    skills: {
      js,
    },
  },
];


/*******
* Misc *
*******/

export const misc: ShowCase[] = [
  {
    name: 'RVM Docker Images',
    description: `
      This repository generates a rainbow table of Ubuntu versions and Ruby
      versions. The source is available on GitHub and the prebuild images
      are available on Docker Hub.
    `,
    startsAt: new Date('2017'),
    endsAt: new Date('2018'),
    urls: [
      'https://hub.docker.com/r/taminomartinius/rvm/',
      'https://github.com/tamino-martinius/docker-rvm',
    ],
    media: [],
    skills: {
      docker,
    },
  },

  {
    name: 'Atom Spacebars language',
    description: `
      This Atom package enables syntax highlighting of Meteors Spacebars language.
      Currently not maintained because i use VS Code now as main Editor.
    `,
    startsAt: new Date('2016'),
    endsAt: new Date('2016'),
    urls: [
      'https://github.com/tamino-martinius/atom-language-spacebars',
    ],
    media: [],
    skills: {},
  },
];
