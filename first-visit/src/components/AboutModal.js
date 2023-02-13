import React from "react";

export const About = () =>{
  return (
    <div className="services-container">
        <p>
            this fullstack app consists of several different web technologies
            <ul>
                <li>Frontend - React</li>
                <li>Backend - Ruby</li>
                <li>Chatbot - Go/Golang</li>
            </ul>

            <h4>Why I chose this tech stack</h4>
            there are a few reasons why the above stack works well for this application's usecase
            firstly, React is component based with scalable and reusable object structures, in this application we will likely need to render the same component multiple times for different vendors in the case that
            let's say we were wanting to view the same calendar availability for different medical practices in order to select the best appointment time. react does this well without creating a lot of clutter in the source code,
            state management is somewhat of a minor issue here, the client is only making connections to the server in order to do simple read operations with the occasional write (scheduling an appointment). But even if we scale this up 
            say in the case that a medical practice needs more in depth state management.. react supports this with redux. 
            <br></br>
            <br></br>
            at the controller level we are using ruby, Ruby is a middle ground choice for the controller... other options such as python or node js or spring backends would work. Something I considered, when choosing this option
            and something I recommend from experience is to use a language and framework + library that suits the knowledge level of your source code reviewers. Since this app is medical in nature, it could 
            be audited at the source code level by someone in medicine who wants to understand the logic flow of the application, Ruby and Python are both good choices for improved readability. 
            Ruby is generally considered to be faster than Python for certain tasks, especially when it comes to processing large amounts of data or working with complex algorithms. Ruby's performance advantage is due in part to its use of Just-In-Time (JIT) compilation,
            which dynamically compiles Ruby code into machine code during runtime, improving its execution speed. Since we may be processing large arrays of calendar data for different practices, ruby is a more optimized choice.
            <br></br>
            <br></br>
            I decided to create an assistance chat bot using Golang as opposed to just using ruby here as well. I wouldn't say there is a huge advantage when using one over the other. But golang is considerably faster than Ruby or Javascript
            this could help in the event that the chatbot was connecting with 3rd party data or perhaps interacting with analytics to store data related to chat... it also helps considerably when the chat response is coming from an AI driven source.
        </p>
        
    </div>
  );
};

export default About;
