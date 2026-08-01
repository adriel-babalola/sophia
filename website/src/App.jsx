import "./App.css";

function App() {
  return (
    <div>
      <div className="bg-[url('/sophia3.jpg')] text-white bg-cover bg-center h-screen mt-0">
        <div className="absolute inset-0 bg-black opacity-50" />
        <nav className="flex justify-between mx-10 py-8 relative z-10">
          <div className="logo text-2xl">Sophia</div>
          <ul className="flex justify-between gap-4 4">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>

        <main className="relative z-10 mx-30 text-center flex flex-col justify-center md:h-screen">
          <div className="hero text-center -mt-60">
            <h1 className="text-3xl">
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

        <section className="mx-10">
          <div className="left">
            <h1>What is Sophia ?</h1>
          </div>
          <div className="right">
            <p>
              Sophia makes it easy for communities to create their own digital
              bookstore. Whether you're a church sharing devotionals, a school
              distributing course materials, or an organization archiving
              knowledge- Sophia handles the heavy lifting.
            </p>
            <p>
              Upload your books through a simple admin dashboard. Members
              download the app and browse your entire collection. It's that
              simple. No technical skills needed. No monthly fees. Just your
              community, your books, and a beautiful way to share them.
            </p>
          </div>
        </section>

        <footer></footer>
      </div>
    </div>
  );
}

export default App;
