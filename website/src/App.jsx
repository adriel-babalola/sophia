import "./App.css";

function App() {
  return (
    <div className="bg-[#2d1b4e]">
      <div className="bg-[] text-white font-inter bg-cover bg-center h-screen mt-0">
        <div className="absolute inset-0 bg-black opacity-50" />
        <nav className="flex justify-between mx-10 py-8 relative z-10">
          <div className="logo text-2xl font-sora">Sophia</div>
          <ul className="flex justify-between gap-4 4">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>

        <main className="relative z-10 mx-30 text-center flex flex-col justify-center md:h-screen">
          <div className="hero text-center -mt-50">
            <h1 className="text-3xl font-sora">
              Sophia - The Bookstore for Your Community
            </h1>
          </div>
          <p className="mt-5 text-center text-lg md:w-full md:mx lg:w-full lg:px-50">
            Share knowledge. Build community. Deploy in minutes. Sophia is a
            white-label bookstore app that lets organizations like churches,
            schools, and nonprofits share their bookstores and libary with
            members. No coding required. Just upload, deploy, and go.
          </p>
        </main>
      </div>

      <section className="mx-10 h-screen text-white lg:flex align-middle items-center gap-20 justify-between p-5 px-45 bg-[#7c3aed]">
        <div className="left w-1/2">
          <h1 className="text-2xl center font-sora">What is Sophia ?</h1>
          <br />
          <p>
            Sophia makes it easy for communities to create their own digital
            bookstore. Whether you're a church sharing devotionals, a school
            distributing course materials, or an organization archiving
            knowledge- Sophia handles the heavy lifting.
          </p>
          <br />
          <p>
            Sophia makes it easy for communities to create their own digital
            bookstore. Whether you're a church sharing devotionals, a school
            distributing course materials, or an organization archiving
            knowledge- Sophia handles the heavy lifting.
          </p>
          <br />
          <p>
            Upload your books through a simple admin dashboard. Members download
            the app and browse your entire collection. It's that simple. No
            technical skills needed. No monthly fees. Just your community, your
            books, and a beautiful way to share them.
          </p>
        </div>
        <div className="right w-1/2 font-inter">
          <div className="card w-full h-120 bg-[url('/books.jpg')] bg-cover bg-center ">

          </div>
        </div>
      </section>

      <footer className="bg-[#170931] text-white py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="mb-4">&copy; 2026 Sophia. Made with care.</p>
          <div className="flex justify-center gap-8 text-sm">
            <a href="#" className="hover:text-blue-400">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-400">
              Terms
            </a>
            <a href="#" className="hover:text-blue-400">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
