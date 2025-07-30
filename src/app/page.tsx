export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center min-h-screen px-6 py-20 bg-[#fffdf8]">
      
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Krish 👋</h1>
      <p className="text-xl max-w-xl mb-6">
        I build clean and modern websites using Next.js and Tailwind CSS.
      </p>
      <a
        href="#projects"
        className="mt-6 inline-block rounded-full bg-[#6ee7b7] text-[#222] font-semibold px-6 py-2 transition hover:bg-[#34d399] shadow-md"
      >
        View My Work
      </a>
      <section
  id="projects"
  className="w-full bg-[#f8fafc] py-20 px-6 flex flex-col items-center text-center"
>
  <h2 className="text-4xl font-bold mb-4">Projects</h2>
  <p className="text-lg text-gray-600 mb-12 max-w-xl">
    A few projects that showcase my work in frontend development and UI design.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
    {/* Project Card 1 */}
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold mb-2">Portfolio Website</h3>
      <p className="text-gray-600 mb-4">
        My personal portfolio built using Next.js, Tailwind CSS, and responsive design principles.
      </p>
      <a
        href="#"
        className="text-[#06b6d4] font-medium hover:underline"
        target="_blank"
      >
        View Project →
      </a>
    </div>

    {/* Project Card 2 */}
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold mb-2">Landing Page Clone</h3>
      <p className="text-gray-600 mb-4">
        A clean, mobile-first landing page clone made for practice with animations and form.
      </p>
      <a
        href="#"
        className="text-[#06b6d4] font-medium hover:underline"
        target="_blank"
      >
        View Project →
      </a>
    </div>

    {/* Project Card 3 */}
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold mb-2">E-commerce UI</h3>
      <p className="text-gray-600 mb-4">
        A modern e-commerce frontend layout featuring product cards, cart, and filtering system.
      </p>
      <a
        href="#"
        className="text-[#06b6d4] font-medium hover:underline"
        target="_blank"
      >
        View Project →
      </a>
    </div>
  </div>
</section> 


    {/* About Me Section */}
<section
  id="about"
  className="w-full bg-white py-20 px-6 flex flex-col items-center text-center"
>
  <h2 className="text-4xl font-bold mb-4">About Me</h2>
  <p className="text-lg text-gray-600 max-w-2xl mb-10">
    I’m a frontend web developer who loves crafting smooth user experiences.
    I specialize in building modern, responsive websites using tools like
    Next.js, Tailwind CSS, and Figma.
  </p>

  <div className="flex flex-wrap justify-center gap-6">
    <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
      HTML
    </span>
    <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
      CSS
    </span>
    <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
      JavaScript
    </span>
    <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
      React
    </span>
    <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
      Next.js
    </span>
    <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
      Tailwind CSS
    </span>
    <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
      Figma
    </span>
    <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
      GitHub
    </span>
  </div>
</section>


{/* Contact Section */}
<section
  id="contact"
  className="w-full bg-[#f8fafc] py-20 px-6 flex flex-col items-center text-center"
>
  <h2 className="text-4xl font-bold mb-4">Let’s Connect</h2>
  <p className="text-lg text-gray-600 max-w-xl mb-8">
    Got a project, collab idea, or just want to say hi?  
    Reach out and I’ll get back to you!
  </p>

  <div className="flex gap-6">
    <a
      href="mailto:krishmewada0911@gmail.com"
      className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
    >
      Email Me
    </a>
    <a
      href="www.linkedin.com/in/krish-mewada911"
      target="_blank"
      className="border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
    >
      LinkedIn
    </a>
  </div>
</section>

{/* Footer */}
<footer className="w-full text-center py-6 text-gray-500 text-sm">
  © {new Date().getFullYear()} Krish Mewada. All rights reserved.
</footer>


    </main>
    
    
  );
}
