import React from 'react'
import './App.css'
import Home from './Components/Home/Home'
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './Components/About/About';
import Benefits from './Components/Benifit/Benifits';
import JobsandRoles from './Components/JobsAndRoles/JobsandRoles';
import Form from './Components/Form/Form';
import Footer from './Components/Footer/Footer';

const App = () => {
  const benefitsData = [
  {
    image: "/Assets/Benifits.png",
    title: "Blended Delivery",
    description:
      "Electrical and Electronics courses blend online learning with hands-on in-person classes for convenience and engagement. This course is designed to provide students with a comprehensive understanding of electrical and electronics engineering concepts and applications.",
  },
  {
    image: "/Assets/Benifits.png",
    title: "Practical Experience",
    description:
      "Gain hands-on experience with state-of-the-art equipment and software used in the industry. Learn to design, build, and test electrical circuits and systems. Work on real-world projects to develop your skills and knowledge.",
  },
  {
    image: "/Assets/Benifits.png",
    title: "Industry Connections",
    description:
      "Network with industry professionals and potential employers through guest lectures and internships. Get insights into the latest trends and technologies in electrical and electronics engineering. Gain valuable industry experience to kickstart your career.",
  },
  {
    image: "/Assets/Benifits.png",
    title: "Career Support",
    description:
      "Get help with resume writing, interview preparation, and job placement to launch your career in electrical and electronics. Access career resources and job opportunities to find the right job for you. Get personalized guidance from industry experts to achieve your career goals.",
  },
  {
    image: "/Assets/Benifits.png",
    title: "Flexible Schedule",
    description:
      "Choose from full-time, part-time, and weekend classes to fit your schedule. Study at your own pace and learn at your convenience. Get access to online resources and support to help you succeed in your studies. Learn from industry experts and experienced faculty to gain valuable insights and knowledge.",
  },
  {
    image: "/Assets/Benifits.png",
    title: "Certification",
    description:
      "Earn a certificate upon completion of the course to showcase your skills to employers. Get recognized for your achievements and stand out in the job market. Build a strong portfolio of projects and work samples to demonstrate your expertise in electrical and electronics engineering.",
  },
];
  return (
    <div className='main'>
      <Home />
      <About />
      <Benefits benefits={benefitsData} />
      <JobsandRoles />
      <Form />
      <Footer />
    </div>
  )
}

export default App