import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";
import Logo from '../../Assets/logo.png'

const footerData = {
  slogan: "Your one-stop solution for innovation and learning.",
  aboutus: [
    { title: "Our Story", url: "#" },
    { title: "Team", url: "#" },
  ],
  academics: [
    { title: "Programs", url: "#" },
    { title: "Admissions", url: "#" },
  ],
  innovation: [
    { title: "Research", url: "#" },
    { title: "Projects", url: "#" },
  ],
  otherLink: [
    { title: "Careers", url: "#" },
    { title: "Contact Us", url: "#" },
  ],
  contactInfo: { email: "info@example.com" },
  address: "123 Innovation Street\nCity, State, 12345",
  socialLinks: [
    { platform: "Facebook", url: "#" },
    { platform: "Twitter", url: "#" },
    { platform: "LinkedIn", url: "#" },
    { platform: "Instagram", url: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
        <div className="flex">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-8">
          <img src={Logo} alt="Logo" className="w-40 h-20 mb-4" />
          <p className="text-sm">Skilling to Empower</p>
        </div>
        <div className="flex flex-col ml-10">
        <div>"Empowering individuals with the skills to thrive in a changing world. </div>
        <div>UNIVOC Skilling to Empower bridges talent and opportunity, driving innovation and growth for a brighter future."
        </div>
        </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries({
            About: footerData.aboutus,
            Academics: footerData.academics,
            Innovation: footerData.innovation,
            "Other Links": footerData.otherLink,
          }).map(([title, links], index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((item, i) => (
                  <li key={i}>
                    <a href={item.url} className="hover:text-blue-400">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          <div className="text-gray-400 text-center lg:text-left space-y-4">
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>{footerData.contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <address className="not-italic whitespace-pre-wrap">
                {footerData.address}
              </address>
            </div>
          </div>

          <div className="flex space-x-4">
            {footerData.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-2xl hover:text-blue-400 transition"
              >
                {link.platform === "Facebook" && <Facebook size={40} />}
                {link.platform === "Twitter" && <Twitter size={40} />}
                {link.platform === "LinkedIn" && <Linkedin size={40} />}
                {link.platform === "Instagram" && <Instagram size={40} />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;