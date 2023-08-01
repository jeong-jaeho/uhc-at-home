import Categories from "../components/Navbar/Categories";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col px-4 sm:px-10">
      <h1 className="head_text text-center pinkyellow_gradient font-inter ">
        UHC@HOME
        <br />
        <span className="greenblue_gradient">BRINGING UHC TO YOUR HOME</span>
      </h1>
      <p className="desc text-center">
        Health at Your Fingertips: Embrace the Power of Virtual Consultations!
      </p>

      {/* UHC pictures */}
      <div className="grid grid-cols-1 md:grid-cols-2 pt-16">
        <img src="/assets/uhc1.png" alt="UHC picture" />
        <div className="px-10 py-10 flex justify-center items-center text-center">
          Welcome to the University Health Center! Book virtual consultations effortlessly and experience personalized care, anytime, anywhere. Your well-being matters to us.
        </div>
      </div>
    </section>
  );
};

export default Home;
