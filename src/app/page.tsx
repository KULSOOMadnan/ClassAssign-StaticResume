

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <main className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-2xl transition-shadow hover:shadow-xl">
        {/* Header Section */}
        <header className="flex flex-col items-center mb-12">
          <img src="/resume.jpg" alt="Profile" className="w-32 h-32 rounded-full object-cover mb-4 shadow-md" />
          <h1 className="text-5xl font-bold text-amber-950 mb-2">Kulsoom Adnan</h1>
          <p className="text-lg text-gray-600 italic">Web Developer</p>
        </header>

        {/* Main Resume Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Profile & Contact */}
          <aside className="space-y-10">
            {/* Profile Section */}
            <section>
              <h2 className="text-2xl font-semibold text-amber-700 border-b-2 border-amber-300 pb-2">Profile</h2>
              <p className="text-gray-700 mt-3 leading-relaxed">
                I am a passionate web developer skilled in modern frontend technologies, including , React, and Tailwind CSS. My focus is on building responsive, user-friendly web applications that enhance the user experience through clean and efficient code.
              </p>
            </section>

            {/* Contact Section */}
            <section>
              <h2 className="text-2xl font-semibold text-amber-700 border-b-2 border-amber-300 pb-2">Contact</h2>
              <ul className="text-gray-700 mt-3 space-y-1">
                <li><strong>Email:</strong> kulsoom@example.com</li>
                <li><strong>LinkedIn:</strong> linkedin.com/in/kulsoom</li>
              </ul>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-2xl font-semibold text-amber-700 border-b-2 border-amber-300 pb-2">Skills</h2>
              <ul className="text-gray-700 grid grid-cols-2 gap-2 mt-3">
                <li className="bg-gray-100 p-2 rounded hover:bg-blue-50 transition-colors">HTML</li>
                <li className="bg-gray-100 p-2 rounded hover:bg-blue-50 transition-colors">CSS</li>
                <li className="bg-gray-100 p-2 rounded hover:bg-blue-50 transition-colors">Bootstrap 5</li>
                <li className="bg-gray-100 p-2 rounded hover:bg-blue-50 transition-colors">Next.js</li>
                <li className="bg-gray-100 p-2 rounded hover:bg-blue-50 transition-colors">Tailwind CSS</li>
                <li className="bg-gray-100 p-2 rounded hover:bg-blue-50 transition-colors">React</li>
                <li className="bg-gray-100 p-2 rounded hover:bg-blue-50 transition-colors">JavaScript</li>
                <li className="bg-gray-100 p-2 rounded hover:bg-blue-50 transition-colors">TypeScript</li>
                <li className="bg-gray-100 p-2 rounded hover:bg-blue-50 transition-colors">Git & GitHub</li>
              </ul>
            </section>
          </aside>

          {/* Right Column: Education & Experience */}
          <div className="space-y-10">
            {/* Education Section */}
            <section>
              <h2 className="text-2xl font-semibold text-amber-700 border-b-2 border-amber-300 pb-2">Education</h2>
              <p className="text-gray-700 mt-3">
                Completed My Intermediate <br />
                Learning IT cource from GIAIC
              </p>
            </section>

            {/* Experience Section */}
            <section>
              <h2 className="text-2xl font-semibold text-amber-700 border-b-2 border-amber-300 pb-2">Experience</h2>
              <ul className="text-gray-700 space-y-4 mt-3">
                <li className="hover:bg-blue-50 p-3 rounded transition-colors">
                  <strong> Portfolio Website</strong><br />
                  Developed a fully responsive personal portfolio website using  and Tailwind CSS. Integrated animations to enhance user engagement.
                </li>
                <li className="hover:bg-blue-50 p-3 rounded transition-colors">
                  <strong>Food Delivery App</strong><br />
                  Built a food delivery app using . Designed an intuitive user interface and implemented persistent cart data using localStorage.
                </li>
                <li className="hover:bg-blue-50 p-3 rounded transition-colors">
                  <strong>Resume Builder</strong><br />
                  Created a dynamic resume builder application with form validation and PDF export functionality using  and Tailwind CSS.
                </li>
                <li className="hover:bg-blue-50 p-3 rounded transition-colors">
                  <strong>Dynamic Blog Platform</strong><br />
                  Developed a blog platform using . Implemented features like content organization and a user-friendly comment section.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
