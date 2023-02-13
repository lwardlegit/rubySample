import {React, useState}from "react";
import  MyCalendar  from "./Calendar";
import AboutModal from "./AboutModal";

export const HomePage = () => {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedDateRange, setSelectedDateRange] = useState(null);
  const [availableTimes, setAvailableTimes] = useState(null)
  const [AboutThisWebsite, setAboutThisWebsite] = useState(false)
  const [Features, setFeatures] = useState(false)

  const handleSubmit = event => {
    event.preventDefault();
    setSelectedDateRange({ start: startDate, end: endDate });
    setAvailableTimes([{
      practice: "Asheville placeology",
      physician: "Dr. Makemui, Daye",
      Times: ["11:00am","12:00am","3:00pm"]
    },
    {
      practice: "BakersVille specialists",
      physician: "Dr. Len, Wave",
      Times: ["11:00am","12:00am","3:00pm"]
    },
    {
      practice: "Downtown Dermatology",
      physician: "Dr. Makemui, Daye",
      Times: ["11:00am","12:00am","3:00pm"]
    },
    {
      practice: "MayBee City Ostrichology",
      physician: "Dr. Ebbe, Flow",
      Times: ["11:00am","12:00am","3:00pm"]
    },])
  };

  const toggleInfoModal = () =>{
    setAboutThisWebsite(!AboutThisWebsite)
  }
  
  const showFeatures = () =>{
    console.log('features',Features)
    if(Features===true){
    setFeatures(false)
    }else{
      setFeatures(true)
    }
  }

  return (  
    <div className="container">
      <nav className="navbar">
        <h2>First Visit</h2>
        {
          AboutThisWebsite === true ?  <div className="info-modal">
          <p>
              this fullstack app consists of several different web technologies
              <ul>
                  <li>Frontend - React</li>
                  <li>Backend - Ruby</li>
                  <li>Chatbot - Go/Golang</li>
              </ul>
  
              <h4>Why I chose this tech stack</h4>
              <h5>React + Ruby + Golang</h5>
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
          <button className="btn" onClick={toggleInfoModal}>back</button>
          
      </div>
        :<p className="btn" onClick={toggleInfoModal}>About This Website</p>
        }
        { 
        Features === false ? <p className="btn" onMouseOver={showFeatures}>Premium Features</p>
        :
        <section className="features-body">
      <h4>Create an Account and get access to</h4> 
        <ul className="features-list">
          <li>HIPPA document management</li>
          <li>Automatic scheduling</li>
          <li>Chat with your provider</li>
        </ul>
        <p className="close-features" onMouseOver={showFeatures}>x</p>
        </section>
        }
        <div className="navbar-right">
          <p className="btn">Sign In</p>
          <p className="btn">Login</p>
        </div>
      </nav>
      <div className="flex-container">
     
        <div className="intro-Paragraph">
        <h4>How we can help</h4>
          Our Service eliminates the need to manage long wait times for providers
          and reduces the complications that come with scheduling for first time patients.
          <br></br>
          <br></br>
          We also offer queue optimization for returning patients on followup visits.
          <br></br>
          <br></br>
          Each medical provider has documentation required for specialized visits, we reach out to providers in our network to 
          authorize the release of needed medical documentation for patients looking to start treatment with a new provider

            <br></br>
            <br></br>
          in addition we recommend services based on needs we provide easy signup and details as well as recommendations
          for first time visits and ease of document transfer
        </div>
        <div className="calendar-container">
          <MyCalendar className="calendar-body" dateRange={selectedDateRange} />
          <form className="calendar-form" onSubmit={handleSubmit}>
            <div>
            <label>
              Start Date:
              <input type="date" onChange={event => setStartDate(event.target.value)} />
            </label>
            <label>
              End Date:
              <input type="date" onChange={event => setEndDate(event.target.value)} />
            </label>
            </div>
           
            <button className="form-buttons" type="submit">Find Availability</button>
          </form>
    </div>
    <div className="availability-container">
      <section className="text-section">
      <h4 className="availability-header">Availability</h4>
      {availableTimes ?  <div>
      {availableTimes.map((item, index) => (
        <div className="availability-item" key={index}>
          <div>Practice: {item.practice}</div>
          <div>Physician: {item.physician}</div>
          <div>
            <ul>
              {item.Times.map((time, i) => (
                <div className="availability-item-times">
                  <p key={i}>{time}</p>
                  <p className="btn">book</p>
                </div>
              
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div> :
      <p>Nothing available for the selected dates</p>
      }
      
      </section>
    </div>
      </div>
    
      <footer className="footer-container">
        <h3>First Visit</h3>
        <p>
          123 Main Street, Anytown USA 12345 | Phone: (123) 456-7890 | Email:
          info@dummycompany.com
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
