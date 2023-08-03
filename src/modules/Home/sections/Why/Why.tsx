import React from 'react'
import { motion } from 'framer-motion'
//
import { fadeLeft, motionStep } from '@config/motion'
import VideoIframe from '@components/VideoIframe/VideoIframe'


const Why = () => {
  return (
    <section id='why' className='container' >

      <motion.h1 variants={fadeLeft} {...motionStep} className='flex sm:items-center gap-2 text-lg md:text-3xl font-medium text-slate-300' >
        <span className='text-sky-400 font-mono' >00. </span>
        Why people love to work with Rodolfo?
      </motion.h1>

      <motion.div variants={fadeLeft} {...motionStep} className='cols-span-2 mt-10 max-w-[900px] rounded-2xl overflow-hidden' >
        <p>-Perspective: Honesty, Eager Developer, Creative Thinker</p>
        <p>-Soft-Skill: Time Management Skill, LeaderShip SKill</p>
        <p>-Frameworks: React, Angular, Next.js, Gatsby, Vue.js, Ember.js, Backbone.js, Knockout.js, Meteor.js, Polymer, Aurelia, Svelte, Express.js(Node.js), Ruby on Rails, Django, Laravel(PHP), Spring(Java), GoLang</p>
        <p>-Languages: JavaScript, Python, Ruby, Java, PHP</p>
        <p>-Tools: Git, AWS, Docker, Jenkins, Webpack, Gulp, Grunt, npm, Yarn, Babel, ESLint, Prettier, PostCSS, Sass/SCSS, Less, Stylus</p>
        <p>-Testing: Jest, Mocha, Selenium, TestCafe, CodeceptJS</p>
        <p>-DataBases: MySQL, PostgreSQL, MongoDB, Oracle, Redis</p>
        <p>-Web Servers: Apache HTTP Server, Nginx, Caddy, CherryPy, Tornado, Tomcat, Jetty</p>
      </motion.div>


    </section>
  )
}

export default Why