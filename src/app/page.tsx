"use client";

import React from 'react'
import Image from "next/image"
import { Star, ChevronDown, StarHalfIcon, Linkedin, Github, Facebook, PhoneForwarded, MapPin, PhoneIncoming } from 'lucide-react'


 const Home = () => {
  return (
    <>
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-9/8">
          <Image
            alt="Profile Pic"
            width={400}
            height={800}
            className="h-64 w-full rounded object-cover md:h-96 lg:h-96 lg:w-1/2"
            src="/images/profile.png"
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">Software Professional</h2>
            <h1 className="my-4 text-3xl font-semibold text-black">Dev P.D.</h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-300" />
                ))}
                 {[...Array(1)].map((_, i) => (
                  <StarHalfIcon key={i} size={16} className="text-yellow-300" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">Full Stack </span>
              </span>
            </div>
            <p className="leading-relaxed">
            A dedicated software engineer to brings innovation with history of meeting company goals utilizing consistent and organized practices. Skilled in working under pressure and adapting to new situations and challenges to best enhance the organizational brand.
            </p>
            <div className="mb-5 mt-6 flex items-center border-gray-100 pb-5 border-b-2">
              <div className="flex items-center">
                <span className="mr-3 text-sm font-semibold">Social Media</span>
                <a href="https://www.linkedin.com/in/dev-prakash-dubey/" target='_blank'><button className="flex ml-2 h-8 w-20 rounded-full border-2 border-gray-300 justify-center focus:outline-none hover:bg-gray-300"><Linkedin/></button></a>
                <a href="https://github.com/devprakashduve" target='_blank'><button className="flex ml-2 h-8 w-20 rounded-full border-2 border-gray-300 justify-center focus:outline-none hover:bg-gray-300"><Github /></button></a>
                <a href="https://www.facebook.com/princekmr30" target='_blank'><button className="flex ml-2 h-8 w-20 rounded-full border-2 border-gray-300 justify-center focus:outline-none hover:bg-gray-300"><Facebook /></button></a>
              </div>
            
            </div>
            <div className="flex items-center justify-between">
              <span className="flex item-center title-font text-gray-900"> <PhoneIncoming /> +91 9305188405</span>
              <span className="flex item-center title-font text-gray-900"> <MapPin  /> Hyderabad</span>
              

            </div>
          </div>
          <div className=' flex items-center border-t-2 border-gray-100 my-3 py-5'>
          Keyword`&apos;`s: NodeJS | ReactJS | NextJS | JAVA | MySQL | angular | PHP | Zend-Framework | CodeIgniter Framework | API Development - REST and SOAP | Software Development | Application Development | Web Technologies | Web Development | HTML5 | CSS3 | SCSS | JavaScript | jQuery | Ajax| Three.js, WebGL, Python
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home