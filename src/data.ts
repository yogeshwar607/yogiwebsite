import {
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
export const profession = 'Developer';
export const street = '';
export const postalCode = '412101';
export const city = 'Mumbai';
export const emails: string[] = [
  'yogeshwar9354@gmail.com',
];
export const socialNetworks: {
  [key: string]: string
} = {
  github: 'https://github.com/yogeshwar607',
  twitter: 'https://twitter.com/yyogeshwar',
  linkedin: 'https://www.linkedin.com/in/yogeshwar-tanwar-22666b47',
  medium:'https://medium.com/@yogeshwar9354',
  tradingview:'https://www.tradingview.com/u/YogeshwarTanwar/'
};


/*********
 * Skills *
 *********/

// AWS
// AWS / Compute

export const ec2: Skill = {
  level: 0.7,
  name: 'EC2'
};
export const ecs: Skill = {
  level: 0.6,
  name: 'ECS'
};
export const lambda: Skill = {
  level: 0.6,
  name: 'Lambda'
};
export const fargate: Skill = {
  level: 0.7,
  name: 'fargate'
};
// AWS / Data
export const dynamodb: Skill = {
  level: 0.5,
  name: 'DynamoDB'
};
export const rds: Skill = {
  level: 0.7,
  name: 'DB Service'
};
export const s3: Skill = {
  level: 0.7,
  name: 'S3'
};

// AWS / Flow
//export const apigateway: Skill = { level: 0.0.9, name: 'API Gateway' };
export const r53: Skill = {
  level: 0.7,
  name: 'Route 53'
};
export const sns: Skill = {
  level: 0.6,
  name: 'SNS'
};

// AWS / Management
//export const cloudformation: Skill = { level: 0.0.9, name: 'CloudFormation' };
//export const cloudtrail: Skill = { level: 0.0.8, name: 'CloudTrail' };
//export const cloudwatch: Skill = { level: 1.0, name: 'CloudWatch' };
export const iam: Skill = {
  level: 0.6,
  name: 'IAM'
};

// Backend
// Backend / CI
//export const circleCI: Skill = { level: 0.0.8, name: 'CircleCI' };
//export const jasmine: Skill = { level: 0.0.9, name: 'Jasmine' };
//export const jenkins: Skill = { level: 0.0.9, name: 'Jenkins' };
//export const jest: Skill = { level: 1.0, name: 'Jest' };
export const mocha: Skill = {
  level: 1.0,
  name: 'Mocha'
};
export const truffle: Skill = {
  level: 1.0,
  name: 'Truffle'
};

//export const rspec: Skill = { level: 1.0, name: 'RSpec' };
//export const travis: Skill = { level: 0.0.9, name: 'Travis CI' };

// Backend / Code
// export const asp: Skill = { level: 0.0.8, name: 'ASP.net' };
//export const coffeescript: Skill = { level: 0.0.9, name: 'CoffeeScript' };
//export const meteor: Skill = { level: 1.0, name: 'Meteor' };
export const nodejs: Skill = {
  level: 0.7,
  name: 'Node.js'
};
//export const rails: Skill = { level: 1.0, name: 'Ruby on Rails' };
//export const ruby: Skill = { level: 1.0, name: 'Ruby' };
export const typescript: Skill = {
  level: 0.4,
  name: 'TypeScript'
};
export const pinescript: Skill = {
  level: 0.4,
  name: 'Pinescript'
};
export const python: Skill = {
  level: 0.4,
  name: 'Python'
};
export const go: Skill = {
  level: 0.4,
  name: 'go'
};


// Backend / Data
export const api: Skill = {
  level: 0.8,
  name: 'API'
};
//export const apollo: Skill = { level: 1.0, name: 'Apollo GraphQL' };
export const elasticsearch: Skill = {
  level: 0.6,
  name: 'elasticsearch'
};
export const kibana: Skill = {
  level: 0.6,
  name: 'kibana'
};
//export const gql: Skill = { level: 1.0, name: 'GraphQL' };
//export const mariadb: Skill = { level: 0.0.8, name: 'MariaDB' };
//export const postgres: Skill = { level: 0.0.8, name: 'Postgres' };
export const mongodb: Skill = {
  level: 0.7,
  name: 'MongoDB'
};
//export const mssql: Skill = { level: 0.0.9, name: 'Microsoft SQL' };
export const psql: Skill = {
  level: 0.6,
  name: 'PostgreSQL'
};
export const redis: Skill = {
  level: 0.5,
  name: 'Redis'
};

// Backend / Deploy
export const android: Skill = {
  level: 0.5,
  name: 'Android'
};
export const cordova: Skill = {
  level: 0.7,
  name: 'Apache Cordova'
};
export const docker: Skill = {
  level: 0.5,
  name: 'Docker'
};
export const git: Skill = {
  level: 0.9,
  name: 'Git'
};
export const heroku: Skill = {
  level: 0.8,
  name: 'Heroku'
};
export const ios: Skill = {
  level: 0.5,
  name: 'iOS'
};
export const meteor: Skill = {
  level: 0.8,
  name: 'Meteor'
}
export const ionic: Skill = {
  level: 0.7,
  name: 'Ionic'
}
// Frontend
// Frontend / Logic
export const backbone: Skill = {
  level: 0.5,
  name: 'Backbone.js'
};
export const browserify: Skill = {
  level: 0.5,
  name: 'Browserify'
};
export const jquery: Skill = {
  level: 0.7,
  name: 'jQuery'
};
export const js: Skill = {
  level: 0.7,
  name: 'JavaScript'
};
export const websockets: Skill = {
  level: 0.6,
  name: 'WebSockets'
};

// Frontend / Markup
//export const haml: Skill = { level: 0.0.9, name: 'Haml' };
//export const handlebars: Skill = { level: 1.0, name: 'Handlebars' };
export const html: Skill = {
  level: 0.7,
  name: 'HTML'
};
//export const php: Skill = { level: 0.0.0.7, name: 'PHP' };
export const markdown: Skill = {
  level: 0.6,
  name: 'Markdown'
};
export const react: Skill = {
  level: 0.5,
  name: 'React'
};
export const vuejs: Skill = {
  level: 0.5,
  name: 'Vue.js'
};

// Frontend / Style
export const css: Skill = {
  level: 0.5,
  name: 'CSS'
};
export const less: Skill = {
  level: 0.5,
  name: 'less'
};
export const sass: Skill = {
  level: 0.5,
  name: 'Sass'
};
export const stylus: Skill = {
  level: 0.5,
  name: 'Stylus'
};
//export const svg: Skill = { level: 1.0, name: 'SVG (Animations)' };

// Frontend / Design
//export const afterEffects: Skill = { level: 0.3, name: 'After Effects' };
//export const blender: Skill = { level: 0.0.5, name: 'Blender' };
//export const sketch: Skill = { level: 0.0.8, name: 'Sketch' };
//export const ui: Skill = { level: 0.0.0.7, name: 'User Interface' };
//export const ux: Skill = { level: 0.0.6, name: 'User Experience' };

// Misc
//export const teamlead: Skill = { level: 0.0.9, name: 'Team Lead' };
//export const security: Skill = { level: 0.0.9, name: 'Security' };

// Study
// export const logic: Skill = { level: 0.0.9, name: 'Logic' };
// export const distributedSys: Skill = { level: 0.0.7,,, name: 'Distrib. Sys.' };
// export const imageProcessing: Skill = { level: 0.0.7,,, name: 'Image Proces.' };
// export const math: Skill = { level: 0.0.8, name: 'Math' };
// export const neuronalNetwork: Skill = { level: 0.0.7,,, name: 'Neuronal Netw.' };
// export const numeric: Skill = { level: 0.0.7,,, name: 'Numeric' };
// export const parallelExec: Skill = { level: 0.0.7,,, name: 'Parallel Exec.' };

// Blockchain skills
export const solidity: Skill = {
  level: 0.6,
  name: 'Solidity',
};
export const web3: Skill = {
  level: 0.6,
  name: 'Web3.js',
};
export const remix: Skill = {
  level: 0.6,
  name: 'Remix'
};
export const infura: Skill = {
  level: 0.6,
  name: 'infura'
};
export const ipfs: Skill = {
  level: 0.6,
  name: 'ipfs'
};





export const skills: SkillSet[] = [
  
  {
    title: 'Backend',
    data: [{
        title: 'Code',
        data: {
          nodejs,
          meteor,
          typescript,
          pinescript,
          python,
          go
        },
      },
      {
        title: 'Data',
        data: {
          api,
          elasticsearch,
          kibana,
          mongodb,
          psql,
          redis
        },
      },
      {
        title: 'Deploy',
        data: {
          meteor,
          ionic,
          android,
          cordova,
          docker,
          git,
          heroku,
          ios
        },
      },
      {
        title: 'CI',
        data: {
          mocha,
          truffle,
        },
      },
    ],
  },
  {
    title: 'AWS',
    data: [
    {
        title: 'Compute',
        data: {
          ec2,
          ecs,
          lambda,
          fargate
        }
      },
      {
        title: 'Data',
        data: {
          dynamodb,
          rds,
          s3
        },
      },
      {
        title: 'Flow',
        data: {
          r53,
          sns
        },
      },
      {
        title: 'Management',
        data: {
          iam
        },
      },
    ],
  },
  {
    title: 'Frontend',
    data: [{
        title: 'Logic',
        data: {
          backbone,
          browserify,
          jquery,
          js,
          websockets
        },
      },
      {
        title: 'Markup',
        data: {
          html,
          markdown,
          react,
          vuejs
        },
      },
      {
        title: 'Style',
        data: {
          css,
          less,
          sass
        },
      }],
  },{
    title:'Blockchain',
    data:{
      solidity,
      web3,
      ipfs,
      remix,
      truffle,
      infura,
    },
  }];


/*******************
 * Curriculum Vitae *
 *******************/

export const curriculumVitae: (Job | Education)[] = [
  {
    company: 'frontiermicroscopy.com',
    description: `Responsible for maintaining and building feautures around meteor app and integrating this app with native desktop app`,
    startsAt: new Date('2018-09-30'),
    endsAt: undefined,
    remote: true,
    position: [
      'JS consultants/developer',
      'Product Developer',
    ],
    skills: {
      meteor,
      lambda,
      rds,
      fargate,
      nodejs,
      mongodb,
      api,
      psql,
      redis,
      elasticsearch,
    },
  },
  {
    company: 'xwapp',
    description: `Responsible for designing and developing Cross border Remittance platform.
    System includes below core modules - 
    KYC Engine: Automates KYC for various corridors for fast customer on boarding, integrated with
      Jumio for Document/FaceMatch verification and Trulioo for  verification.
    Compliance Engine: Built multi level compliance check triggers integrated in database level,
      integrated with Worldcheck for global watchlist compliance check.
    Processing Engine: Integrated RabbitMQ and Redis for faster and sequential processing of payments 
      even under distributed environment across multiple payment gateways.
    Distributed Logging: Used ELK stack for log aggregation and faster searching of logs.
    `,
    startsAt: new Date('2017-07-01'),
    endsAt: new Date('2018-10-01'),
    remote: true,
    position: [
      'Growth Hacker',
      'Lead Engineering',
    ],
    skills: {
      lambda,
      rds,
      nodejs,
      mongodb,
      api,
      psql,
      redis,
      elasticsearch,
    },
  },

  {
    company: 'instarem.com',
    description: `
    Gained Financial Technology Domain knowledge. Was very great experience developing
      core banking system and cross border remittance application.
    Designed and Developed Payment Processor visioned for interconnecting Asia Pacific and Europe,
      Australia, USA. It has successfully processed payouts of $500 Million (till Oct 2017).
    Designed and Developed different Payment Gateways microservices for countries like Singapore,
      Hong Kong,Malaysia, Australia, USA, India, Vietnam, Thailand.
    Developed Compliance Engine, Validation Engine, AML Engine ,Notification services
      which has reduced the manual intervention in the Organisation.
    Actively Involved in developing core Banking system from scratch and Migration of existing
      application from monolithic architecture to Microservices architecture.
    Architected and designed Instasave which is mobile based wallet application.
    `,
    startsAt: new Date('2016-07-18'),
    endsAt: new Date('2017-09-10'),
    remote: false,
    position: [
      'Fullstack Dev',
    ],
    skills: {
      lambda,
      rds,
      nodejs,
      mongodb,
      meteor,
      api,
      psql,
      redis,
      ionic,
    },
  },

  {
    company: 'mastaan.com',
    description: `
      I plan and build analytics platform using elasticsearch and kibana.
      Major task were to properly sync Mongodb and Elasticsearch and create reports using kibana over this.
    `,
    startsAt: new Date('2018-06-30'),
    endsAt: new Date('2018-12-15'),
    remote: true,
    position: 'Freelance Data Analyst',
    skills: {
      elasticsearch,
      kibana,
      mongodb
    },
  },
  {
    company: 'Cybage Software',
    description: `
    Worked on various mobile applications ranging from e-commerce to hospitality domain.
      some of the clients are Rakuten , American college of cardiology.
    Got industry experience in iOS , Android , ionic and hybrid mobile technologies.
    Involved in various Skill development and Leadership training program.
    `,
    startsAt: new Date('2015-02-10'),
    endsAt: new Date('2016-07-17'),
    remote: false,
    position: [
      'Software Developer'
    ],
    skills: {
      ionic,
      cordova,
      android,
      ios,
    },
  },


];


/**************
 * Experiments *
 **************/

// export const experiments: ShowCase[] = [{
//     name: 'Button Animations',
//     description: `
//       I created a couple of different Buttons which are planned to be the main
//       call to action buttons on a website. All buttons are previewed on dribbble
//       and the code is available Open Source at CodePen.
//     `,
//     startsAt: new Date('2014-08-05'),
//     endsAt: new Date('2017-07-02'),
//     urls: [
//       'https://dribbble.com/shots/3545734-Liquid-button-v2',
//       'https://dribbble.com/shots/2629106-Button-Group',
//       'https://dribbble.com/shots/1673204-Submit-Button',
//     ],
//     media: [],
//     skills: {
//       css,
//       stylus,
//       html,
//       js
//     },
//   },

//   {
//     name: 'Particle Effects',
//     description: `
//       I experimented a lot to find a the best way to create performant three
//       dimensional particle effects on a 2d canvas before WebGL was available at
//       Browsers.
//     `,
//     startsAt: new Date('2014-08-05'),
//     endsAt: new Date('2017-07-02'),
//     urls: [
//       'https://dribbble.com/shots/2649284-Dusty-Particle-Sphere',
//     ],
//     media: [],
//     skills: {
//       html,
//       js,
//     },
//   },

//   {
//     name: 'Hamburder Icon Animations',
//     description: `
//       I created a couple of different hamburger menu icon animations to open
//       and close a menu. All icons are planned with sketch. The base svgs are all
//       hand written with basic svg path commands. The icons are previewed on
//       dribbble and the code is available Open Source at CodePen.
//     `,
//     startsAt: new Date('2014-08-05'),
//     endsAt: new Date('2017-07-02'),
//     urls: [
//       'https://dribbble.com/shots/3539398--version-3',
//       'https://dribbble.com/shots/3529235--version-2',
//       'https://dribbble.com/shots/1674602-Menu-open-back',
//       'https://dribbble.com/shots/1671182--version-1',
//     ],
//     media: [],
//     skills: {
//       css,
//       stylus,
//       html,
//       js,
//     },
//   },

// ];


/***********
 * Projects *
 ***********/

export const projects: ShowCase[] = [
  {
    name: 'Docauth DApp',
    startsAt: undefined,
    endsAt: undefined,
    description: `
    Document Authorization on the Ethereum Blockchain
    `,
    urls: [
      'https://docauth.soulputs.com/',
      'https://github.com/yogeshwar607/authdoc'
    ],
    media: [],
    skills: {
      solidity,
      nodejs,
      web3,
      truffle,
      remix,
      infura,
      ipfs,
    },
  },
  {
    name: 'Bounty Swap',
    startsAt: undefined,
    endsAt: undefined,
    description: `
    Token exchange  on  Ethereum Blockchain
    `,
    urls: [
      'https://blockswap-46c8d.firebaseapp.com/trade',
    ],
    media: [],
    skills: {
      solidity,
      nodejs,
      web3,
      truffle,
      remix,
      infura,
      ipfs,
    },
  },
  {
    name: 'ICO DApp',
    startsAt: undefined,
    endsAt: undefined,
    description: `
    Built under 36hrs EY hackathon using solidity/MEAN stack and deployed on Azure private Ethereum
    cloud with number of mining nodes equal to number of participating agents.
    `,
    urls: [
     'https://github.com/yogeshwar607/coin_creator_app'
    ],
    media: [],
    skills: {
      solidity,
      nodejs,
      web3,
      truffle,
      remix,
      infura,
      ipfs,
    },
  },
  {
    name: 'Arbitrage Bot',
    startsAt: undefined,
    endsAt: undefined,
    description: `
    Cryptocurrency arbitrage bot which checks and detects arbitrage opportunities, and place orders
    when a profit can be made. `,
    urls: [
     'https://github.com/yogeshwar607/arbitrage-bot'
    ],
    media: [],
    skills: {
      python,
      nodejs,
    },
  },
];


/********
 * Talks *
 ********/

// export const talks: ShowCase[] = [{
//     name: 'Lets talk about ... API (of shyftplan)',
//     description: `
//       A short introduction of APIs in general and the models of shyftplan in
//       specific. This Talk was a internal presentation for shyftplan.
//     `,
//     startsAt: new Date('2018'),
//     endsAt: new Date('2018'),
//     urls: [
//       'https://github.com/tamino-martinius/lets-talk-about--api',
//       'http://lets-talk-about--api.tamino-martinius.de',
//     ],
//     media: [],
//     skills: {
//       api,
//       nodejs,
//       html,
//       stylus,
//     },
//   },

//   {
//     name: 'Lets talk about ... SQL Query Performance',
//     description: `
//       A small guide in writing good and performant SQL Queries which give very
//       responsed even with millions of records. I also explain why/when a database
//       index is useful and which one i should use.
//       This Talk was a internal presentation for shyftplan.
//     `,
//     startsAt: new Date('2018'),
//     endsAt: new Date('2018'),
//     urls: [
//       'https://github.com/tamino-martinius/lets-talk-about--sql-query-performance',
//       'http://lets-talk-about--sql-query-performance.tamino-martinius.de',
//     ],
//     media: [],
//     skills: {
//       psql,
//       nodejs,
//       html,
//       stylus,
//     },
//   },

//   {
//     name: 'Lets talk about ... GraphQL',
//     description: `
//       When should i use GraphlQL and what are the differences to REST and how
//       does a GraphQL API look like from the Consumers and Developers perspective.
//       This Talk was a internal presentation for shyftplan.
//     `,
//     startsAt: new Date('2017'),
//     endsAt: new Date('2017'),
//     urls: [
//       'https://github.com/tamino-martinius/lets-talk-about--graphql',
//       'http://lets-talk-about--graphql.tamino-martinius.de',
//     ],
//     media: [],
//     skills: {
//       nodejs,
//       html,
//       stylus,
//     },
//   },

//   {
//     name: 'Lets talk about ... TypeScript',
//     description: `
//       A quick introduction to TypeScript and its differenced to JavaScript.
//       This Talk was a internal presentation for shyftplan.
//     `,
//     startsAt: new Date('2017'),
//     endsAt: new Date('2017'),
//     urls: [
//       'https://github.com/tamino-martinius/lets-talk-about--typescript',
//       'http://lets-talk-about--typescript.tamino-martinius.de',
//     ],
//     media: [],
//     skills: {
//       typescript,
//       nodejs,
//       html,
//       stylus,
//     },
//   },

//   {
//     name: 'Lets talk about ... Template',
//     description: `
//       A template with example slides. Thats my base branch with which i create
//       my slides for presentations.
//     `,
//     startsAt: new Date('2017'),
//     endsAt: undefined,
//     urls: [
//       'https://github.com/tamino-martinius/lets-talk-about--template',
//       'https://github.com/tamino-martinius/lets-talk-about--example',
//     ],
//     media: [],
//     skills: {
//       api,
//       nodejs,
//       html,
//       stylus,
//     },
//   },
// ];


// /***********
//  * Packages *
//  ***********/

// export const packages: ShowCase[] = [{
//     name: 'Lets talk about ... Template',
//     description: `
//       A template with example slides. Thats my base branch with which i create
//       my slides for presentations.
//     `,
//     startsAt: new Date('2017'),
//     endsAt: undefined,
//     urls: [
//       'https://github.com/tamino-martinius/lets-talk-about--template',
//       'https://github.com/tamino-martinius/lets-talk-about--example',
//     ],
//     media: [],
//     skills: {
//       api,
//       nodejs,
//       html,
//       stylus,
//     },
//   },

//   {
//     name: 'Next Model',
//     description: `
//       Next Model is the evolution of Meteor Smart Record. With this package
//       you are able to define Model relations and write database independend
//       queries to fetch data.
//     `,
//     startsAt: new Date('2016'),
//     endsAt: undefined,
//     urls: [
//       'https://github.com/tamino-martinius/node-next-model',
//       'https://github.com/tamino-martinius/node-next-model-api-router',
//       'https://github.com/tamino-martinius/node-next-model-knex-connector',
//       'https://github.com/tamino-martinius/node-next-model-api-server-express',
//       'https://github.com/tamino-martinius/node-next-model-local-storage-connector',
//       'https://github.com/tamino-martinius/node-next-model-api-client-connector',
//     ],
//     media: [],
//     skills: {
//       nodejs,
//       typescript,
//       js,
//       psql,
//       api,
//     },
//   },

//   {
//     name: 'Meteor Smart Record',
//     description: `
//       Meteor Smart Record is a package to define Model relations and write
//       MongoDB queries in a simple and object orientated way. It's a dependency
//       for Meteor Smart Form which is a simple way to create forms based on models.
//       This pacakge is discontinued on favor of Next Model which is a Meteor
//       independent solution.
//     `,
//     startsAt: new Date('2015'),
//     endsAt: new Date('2017'),
//     urls: [
//       'https://github.com/tamino-martinius/meteor-smart-record',
//       'https://github.com/tamino-martinius/meteor-smart-form',
//       'https://github.com/tamino-martinius/meteor-smart-form-delete-button',
//     ],
//     media: [],
//     skills: {
//       js,
//       mongodb,
//     },
//   },

//   {
//     name: 'Meteor ics',
//     description: `
//       A iCalendar .ics export which also enabled to integrate recurring events.
//     `,
//     startsAt: new Date('2015'),
//     endsAt: new Date('2015'),
//     urls: [
//       'https://github.com/tamino-martinius/meteor-ics',
//     ],
//     media: [],
//     skills: {
//       js,
//     },
//   },

//   {
//     name: 'Meteor lazy Analytics',
//     description: `
//       This pacakge provides a non blocking way to integrate Google Analytics
//       where the credentials are dynamically fetched from the Server.
//     `,
//     startsAt: new Date('2015'),
//     endsAt: new Date('2015'),
//     urls: [
//       'https://github.com/tamino-martinius/meteor-lazy-analytics',
//     ],
//     media: [],
//     skills: {
//       js,
//     },
//   },

//   {
//     name: 'Meteor Method Pagination',
//     description: `
//       This pacakge is a easy way to integrate pagination of data with Meteor
//       Server side methods..
//     `,
//     startsAt: new Date('2014'),
//     endsAt: new Date('2014'),
//     urls: [
//       'https://github.com/tamino-martinius/meteor-method-pagination',
//     ],
//     media: [],
//     skills: {
//       js,
//     },
//   },
// ];


// /*******
//  * Misc *
//  *******/

//  export const misc: ShowCase[] = [{
//     name: 'RVM Docker Images',
//     description: `
//       This repository generates a rainbow table of Ubuntu versions and Ruby
//       versions. The source is available on GitHub and the prebuild images
//       are available on Docker Hub.
//     `,
//     startsAt: new Date('2017'),
//     endsAt: new Date('2018'),
//     urls: [
//       'https://hub.docker.com/r/taminomartinius/rvm/',
//       'https://github.com/tamino-martinius/docker-rvm',
//     ],
//     media: [],
//     skills: {
//       docker,
//     },
//   },

//   {
//     name: 'Atom Spacebars language',
//     description: `
//       This Atom package enables syntax highlighting of Meteors Spacebars language.
//       Currently not maintained because i use VS Code now as main Editor.
//     `,
//     startsAt: new Date('2016'),
//     endsAt: new Date('2016'),
//     urls: [
//       'https://github.com/tamino-martinius/atom-language-spacebars',
//     ],
//     media: [],
//     skills: {},
//   },
// ];