import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ContactMini = ({ htitle, container, container2 }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect if `dark` class is present on <html>
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkDarkMode(); // Initial check

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const color = isDarkMode ? "e5e7eb" : "282C33";
  
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: `https://img.icons8.com/?size=100&id=447&format=png&color=${color}`,
      url: "https://www.linkedin.com/in/nashnc/",
      hoverColor: "hover:bg-blue-600"
    },
    {
      name: "GitHub", 
      icon: `https://img.icons8.com/?size=100&id=12598&format=png&color=${color}`,
      url: "https://github.com/nashnc",
      hoverColor: "hover:bg-gray-700"
    },
    {
      name: "Gmail",
      icon: `https://img.icons8.com/?size=100&id=QqtDTGEho4jP&format=png&color=${color}`,
      url: "mailto:suhasmartha@gmail.com",
      hoverColor: "hover:bg-red-600"
    }
  ];

  const contact = [
    {
      app: "Telegram",
      uid: "@nashnc11",
      logo: `https://img.icons8.com/?size=100&id=TCnKnYZFoOzM&format=png&color=${color}`,
      link: "https://t.me/nashnc11",
    },
    {
      app: "Discord",
      uid: "nashnc11",
      logo: `https://img.icons8.com/?size=100&id=25627&format=png&color=${color}`,
      link: "https://discord.com/users/nashnc11",
    },
    {
      app: "mail",
      uid: "nash.nc@gmail",
      logo: `https://img.icons8.com/?size=100&id=QqtDTGEho4jP&format=png&color=${color}`,
      link: "mailto:suhasmartha@gmail.com",
    },
  ];

  return (
    <>
      <div>
        <div className="mx-auto px-10">
          <motion.p
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="py-5 text-lg"
          >
            I'm looking forward to being a part of your team! Let me help you
            develop your ideas into an internet reality.
          </motion.p>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-6 py-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-300 bg-white transition-all duration-300 hover:scale-110 hover:border-transparent hover:shadow-lg dark:border-gray-600 dark:bg-gray-800 ${social.hoverColor}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="h-8 w-8 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
                
                {/* Tooltip */}
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 transform rounded-lg bg-gray-900 px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-gray-100 dark:text-gray-900">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Resume Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center py-6"
          >
            <motion.button
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-lhilit-1 to-lhilit-2 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl dark:from-dhilit-1 dark:to-dhilit-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Replace with your actual resume file path
                const link = document.createElement('a');
                link.href = '/resume.pdf'; // Add your resume file to public folder
                link.download = 'Suhas_Martha_Resume.pdf';
                link.click();
              }}
            >
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-lhilit-2 to-lhilit-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-dhilit-2 dark:to-dhilit-1"></div>
              
              {/* Button content */}
              <div className="relative flex items-center gap-3">
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="transition-all duration-300 group-hover:tracking-wider">
                  Download Resume
                </span>
              </div>

              {/* Ripple effect */}
              <div className="absolute inset-0 -z-10 rounded-full bg-white opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-20"></div>
            </motion.button>
          </motion.div>

          {/* Original contact table */}
          <table className="border-2ndary-2 table-auto p-3">
            <tbody className="">
              <div className="rounded-lg border-2 hover:rounded-xl">
                {contact.map((entry, index) => (
                  <tr key={index}>
                    <td className="p-3">
                      <div className="h-7 w-7 flex-shrink-0">
                        <img
                          className="fill-primary h-full w-full object-contain"
                          src={entry.logo}
                          alt={entry.app}
                        />
                      </div>
                    </td>
                    <td>&nbsp;{entry.app} </td>
                    <td className="hover:text-lhilit-1 hover:dark:text-dhilit-1 p-3 hover:animate-bounce hover:text-2xl">
                      <a href={entry.link} target="_blank" rel="">
                        {entry.uid}
                      </a>
                    </td>
                  </tr>
                ))}
              </div>
            </tbody>
          </table>
        </div>
        {htitle !== "contact" && (
          <div className="contactmebutton relative pt-10 text-right">
            <div className="border-lhilit-1 dark:border-dhilit-1 group relative inline-block border-2 text-sm font-medium">
              <a href="/contact#contact" className="size-4">
                <span className="line dark:bg-primary bg-2ndry-1 size-3"></span>
                <div className="dark:bg-primary px-3 py-3">Other...</div>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactMini;