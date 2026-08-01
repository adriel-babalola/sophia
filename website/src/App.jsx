import "./App.css";

function App() {
  return (
    <>
      <nav className="flex justify-between mx-10 my-8">
        <div className="logo text-2xl">Sophia</div>
        <ul className="flex justify-between gap-4 4">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>

      <main className="mx-30 text-center flex flex-col justify-center md:h-screen">
        <div className="hero text-center -mt-60">
          <h1 className="text-3xl">
            Sophia - The Bookstore for Your Community
          </h1>
        </div>
        <p className="mt-5 text-center text-lg md:w-full lg:w-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae labore
          saepe debitis, accusantium similique natus provident placeat, nulla
          iste repellendus minima iure fugit. Sit enim ex laudantium. Provident,
          autem ab.
        </p>
      </main>

      <section className="mx-10">
        <div className="left">
          <h1>What is Sophia ?</h1>
        </div>
        <div className="right">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            porro possimus sit? Corporis animi repudiandae ea itaque, doloremque
            amet labore harum consequatur facilis, doloribus cum nihil illo
            repellendus saepe officia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            labore quae qui porro voluptatibus quibusdam deleniti eaque
            temporibus ex, laudantium sit consequuntur ad consequatur illo ab
            earum, quas voluptates cum!
          </p>
        </div>
      </section>

      <footer></footer>
    </>
  );
}

export default App;
