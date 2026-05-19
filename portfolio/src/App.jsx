import profilePic from "./assets/madihaa.png";
function App() {
  return (
<div className="bg-black min-h-screen text-white overflow-hidden relative">
  {/* Background Glow Effects */}

<div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full blur-[120px] opacity-20"></div>

<div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-600 rounded-full blur-[120px] opacity-20"></div>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4">
      <h1 className="text-lg font-normal tracking-wide text-purple-400"> 
            Madiha Musfira
        </h1>
<ul className="hidden md:flex gap-8 text-gray-300">

  <li>
    <a href="#home" className="hover:text-purple-400 transition">
      Home
    </a>
  </li>

  <li>
    <a href="#about" className="hover:text-purple-400 transition">
      About
    </a>
  </li>

  <li>
    <a href="#skills" className="hover:text-purple-400 transition">
      Skills
    </a>
  </li>

  <li>
    <a href="#projects" className="hover:text-purple-400 transition">
      Projects
    </a>
  </li>

  <li>
    <a href="#contact" className="hover:text-purple-400 transition">
      Contact
    </a>
  </li>

</ul>
      </nav>

      {/* Hero Section */}
<section id="home" className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20">
        {/* Left Content */}
        <div className="max-w-xl z-10">

        <p className="text-purple-400 mb-4 text-lg">
              Tech Enthusiast & Problem Solver
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-purple-500">Madiha</span>
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            Exploring software development, data analysis, and modern technologies to build efficient, scalable, and user-focused solutions.         
             </p>
             

          <div className="flex flex-wrap gap-4">

    <a
  href="#projects"
  className="bg-purple-600 hover:scale-105 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg shadow-purple-500/30"
>
  View Work
</a>

<a
  href="#contact"
  className="border border-purple-500 hover:scale-105 hover:bg-purple-500/20 px-6 py-3 rounded-xl font-semibold transition duration-300"
>
  Contact Me
</a>

 <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white/10 border border-white/10 hover:border-purple-500 hover:bg-purple-500/20 px-6 py-3 rounded-xl font-semibold transition duration-300"
>
  Download Resume
</a>

</div>

        </div>

        {/* Right Side Glow */}
<div className="relative mt-16 md:mt-0">

  <div className="w-72 h-72 md:w-96 md:h-96 bg-purple-600 rounded-full blur-3xl opacity-30 absolute"></div>

  <img
    src={profilePic}
    alt="profile"
className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl border border-purple-500/30 hover:scale-105 transition duration-500 shadow-2xl shadow-purple-500/20"  />

</div>
      </section>
{/* About Section */}

<section id="about" className="px-8 md:px-20 py-24 relative z-10">
  <div className="mb-12">

    <h2 className="text-4xl font-bold mb-4">
      About <span className="text-purple-500">Me</span>
    </h2>

    <div className="w-24 h-1 bg-purple-500 rounded-full"></div>

  </div>

  <div className="grid md:grid-cols-2 gap-12 items-center">

    {/* Left Side */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg">
      <p className="text-gray-300 leading-8 text-lg">
  I'm Passionate about software development, AI/ML, and data analytics with experience in building intelligent applications, scalable web solutions, and automation tools that solve real-world problems.
</p>

<p className="text-gray-400 leading-8 text-lg mt-6">
  With hands-on experience in 
  <span className="text-purple-400 font-semibold"> MERN Stack</span>, 
  <span className="text-purple-400 font-semibold"> Python</span>, 
  <span className="text-purple-400 font-semibold"> Machine Learning</span>, and 
  <span className="text-purple-400 font-semibold"> Data Visualization</span>, 
  I continuously explore modern technologies to improve my problem-solving skills and create impactful digital experiences.
</p>
    </div>

    {/* Right Side Stats */}
    <div className="grid grid-cols-2 gap-6">

      <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6">
        <h3 className="text-4xl font-bold text-purple-400 mb-2">4+</h3>
        <p className="text-gray-300">Projects</p>
      </div>

      <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6">
        <h3 className="text-4xl font-bold text-purple-400 mb-2">15+</h3>
        <p className="text-gray-300">Technologies</p>
      </div>

      <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6">
        <h3 className="text-4xl font-bold text-purple-400 mb-2">10.0</h3>
        <p className="text-gray-300">Current GPA</p>
      </div>

      <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6">
        <h3 className="text-4xl font-bold text-purple-400 mb-2">∞</h3>
        <p className="text-gray-300">Learning Mindset</p>
      </div>

    </div>

  </div>

</section>
{/* Skills Section */}
<section id="skills" className="px-8 md:px-20 py-24 relative z-10">
  {/* Heading */}
  <div className="mb-14">

    <h2 className="text-4xl font-bold mb-4">
      Technical <span className="text-purple-500">Skills</span>
    </h2>

    <div className="w-28 h-1 bg-purple-500 rounded-full"></div>

  </div>

  {/* Skills Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    {[
      "Python",
      "Java",
      "C++",
      "C",
      "MERN Stack",
      "React",
      "Tailwind CSS",
      "HTML","CSS","JavaScript",
      "SQL / MySQL",
      "Scikit-learn",
      "Git & GitHub",
    ].map((skill, index) => (

      <div
        key={index}
className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-lg hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-md hover:shadow-purple-500/20 transition duration-300"      >

        <h3 className="text-sm md:text-base font-medium text-gray-200">
          {skill}
        </h3>
      </div>
    ))}

  </div>
</section>
{/* Projects Section */}

<section id="projects" className="px-8 md:px-20 py-24 relative z-10">
  {/* Heading */}
  <div className="mb-14">

    <h2 className="text-4xl font-bold mb-4">
      Featured <span className="text-purple-500">Projects</span>
    </h2>

    <div className="w-28 h-1 bg-purple-500 rounded-full"></div>

  </div>

  {/* Project Cards */}
  <div className="grid md:grid-cols-2 gap-8">

    {/* Project 1 */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:border-purple-500/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 transition duration-300">

      <h3 className="text-2xl font-semibold mb-4 text-purple-400">
        SCAMGUARD_AI
      </h3>

      <p className="text-gray-300 leading-7 mb-6">
        AI-powered fake job detection platform built using MERN Stack and Machine Learning to identify fraudulent job postings with fraud scoring, confidence metrics, and smart recommendations.
      </p>

      <div className="flex flex-wrap gap-3">

        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
          MERN
        </span>

        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
          Machine Learning
        </span>

        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
          NLP
        </span>

      </div>
      <div className="flex gap-4 mt-6">

  <a
    href="https://github.com/MadihaMusfira431/fake-job-detection.git"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition duration-300"
  >
    GitHub
  </a>
</div>

    </div>
    {/* Project 2 */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:border-purple-500/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 transition duration-300">

      <h3 className="text-2xl font-semibold mb-4 text-purple-400">
        AI Resume Screening Tool
      </h3>

      <p className="text-gray-300 leading-7 mb-6">
        Intelligent resume analyzer using Python and Machine Learning for keyword extraction, candidate scoring, and automated resume ranking.
      </p>

      <div className="flex flex-wrap gap-3">

        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
          Python
        </span>

        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
          Streamlit
        </span>

        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
          ML
        </span>

      </div>
<div className="flex gap-4 mt-6">

  <a
    href="https://github.com/MadihaMusfira431/Ai-Resume-Screaning.git"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition duration-300"
  >
    GitHub
  </a>
</div>
    </div>

    {/* Project 3 */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:border-purple-500/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 transition duration-300">

      <h3 className="text-2xl font-semibold mb-4 text-purple-400">
        AI Chatbot
      </h3>

      <p className="text-gray-300 leading-7 mb-6">
        Interactive chatbot developed with Python and Streamlit capable of handling academic and FAQ-based queries with real-time responses.
      </p>

      <div className="flex flex-wrap gap-3">

        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
          Python
        </span>

        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
          Streamlit
        </span>

        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
          AI
        </span>
      </div>
<div className="flex gap-4 mt-6">

  <a
    href="https://github.com/MadihaMusfira431/AI-Chatbot.git
"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition duration-300"
  >
    GitHub
  </a>
</div>
    </div>

    {/* Project 4 */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:border-purple-500/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 transition duration-300">

      <h3 className="text-2xl font-semibold mb-4 text-purple-400">
        Aesthetic Calculator Web App
      </h3>

      <p className="text-gray-300 leading-7 mb-6">
        Responsive and visually appealing calculator web application designed with modern UI concepts and deployed on Netlify.
      </p>

      <div className="flex flex-wrap gap-3">

        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
          HTML
        </span>

        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
          CSS
        </span>

        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
          JavaScript
        </span>

      </div>
      <div className="flex gap-4 mt-6">

  <a
    href="https://github.com/MadihaMusfira431/MyAesthetiCalculator.git"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition duration-300"
  >
    GitHub
  </a>

  <a
    href="https://aestheticalculator.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-purple-500 hover:bg-purple-500/20 px-4 py-2 rounded-lg text-sm font-medium transition duration-300"
  >
    Live Demo
  </a>

</div>
        </div>

  </div>

</section>
{/* Contact Section */}

<section id="contact" className="px-8 md:px-20 py-24 relative z-10">
  {/* Heading */}
  <div className="mb-14">

    <h2 className="text-4xl font-bold mb-4">
      Contact <span className="text-purple-500">Me</span>
    </h2>

    <div className="w-24 h-1 bg-purple-500 rounded-full"></div>

  </div>

  {/* Contact Box */}
  <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg">

    <h3 className="text-3xl font-semibold mb-6 text-white">
      Let's Connect 
    </h3>

    <p className="text-gray-400 text-lg leading-8 mb-10 max-w-2xl">
      Open to opportunities in software development, AI/ML, web development, and data analytics. Feel free to connect for collaborations, internships, or exciting tech opportunities.
    </p>

    {/* Contact Info */}
    <div className="grid md:grid-cols-3 gap-6">

      {/* Email */}
      <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6">

        <h4 className="text-xl font-semibold text-purple-300 mb-2">
          Email
        </h4>

        <p className="text-gray-300 break-words">
          madihamusfira143@gmail.com
        </p>

      </div>
      {/* LinkedIn */}
      <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6">

        <h4 className="text-xl font-semibold text-purple-300 mb-2">
          LinkedIn
        </h4>

        <a
          href="https://linkedin.com/in/madiha-musfira"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-purple-400 transition"
        >
          linkedin.com/in/madiha-musfira
        </a>

      </div>

    </div>

  </div>

</section>
    </div>
  )
}

export default App