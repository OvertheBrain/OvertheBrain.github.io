module.exports = {
  pathPrefix: '',
  siteUrl: 'https://overthebrain.github.io',
  siteTitle: 'Brian Han',
  siteDescription: 'Personal Website of Brian Han',
  author: 'Brian Han',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://rolwinreevan.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    // contact: 'contact',
    // resume: 'resume',
    tag: 'tags',
    portfolio: 'portfolio',
  },
  social: {
    github: 'https://github.com/OvertheBrain',
    twitter: 'https://twitter.com/One2Multiple',
    bilibili: 'https://space.bilibili.com/12827642?spm_id_from=333.1007.0.0',
    linkedin: 'https://www.linkedin.com/in/brian-han-6aba95281/',
  },
  education: [
    {
      date: 'Sept. 2023 - Mar. 2025 (incoming)',
      icon: 'university',
      title: 'Master of Science in Electrical Engineering',
      location: 'University of Washington, Seattle, WA',
    },
    {
      date: 'Sept. 2019 - June 2023',
      icon: 'university',
      title: 'B.Eng. in Software Engineering',
      location: 'Shanghai Jiao Tong University, Shanghai, China',
    },
    {
      date: 'Sept. 2016 - July 2019',
      icon: 'school',
      title: 'High School',
      location: 'Shanghai Cao Yang No.2 High School, China',
    },
  ],

  aboutMe: [
    '👋 Hello/你好/こんにちは, welcomed visitor! This is Brian Han. You can call me Brian or Han Yiduo in Chinese.',
    '🏙️ I was born in New York City, United States and I have earned my bachelor\'s degree in Software Engineering from SJTU in China.',
    '🎓 Now, I\'m going to University of Washington for my master\'s degree in Electrical and Computer Engineering.',
    '💻 During my undergraduate years, I have gained knowledge about system/software engineering/ML/CG/Web/etc. Before, I was doing software development internship in Digital ART Lab of SJTU, covering human-computer interaction, front-end development and visualization.',
    '👨‍🎓 I also worked as TA for a major course in the lab, responsible for developing the back-end server of the student lab platform for the course\'s projects, and applied this to my undergraduate thesis.',
    '😃 My hobbies are ACG, idol projects and writing comments on related fields and I hope to create wonderful things that combine coding and hobbies.',
  ],

  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  tags: {
    javascript: {
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    typescript: {
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    reactjs: {
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    gatsby: {
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    html: {
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    css: {
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    python: {
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
    test: {
      name: 'test',
      description: 'First personal blog for test.',
      color: 'blueBright',
    },
    introduction: {
      name: 'introduction',
      description: 'Introduction of this website and author',
      color: '#f31d5c',
    },
  },
};
