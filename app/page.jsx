const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center pinkyellow_gradient font-inter">
        UHC@HOME
        <br />
        <span className="greenblue_gradient">
          TAGLINE THAT I CAN'T THINK OF
        </span>
      </h1>
      <p className="desc text-center">
        UHC@HOME is a tool designed to streamline the process of seeking medical
        aid at the University Health Center
      </p>

      {/* UHC pictures */}
      <div className="flex-between w-full mg-16 pt-3">
        <img src="/assets/uhc1.png" alt="UHC picture" class="w-1/2"/>
        <img src="/assets/uhc2.png" alt="UHC logo" class="w-1/2"/>
      </div>
    </section>
  );
};

export default Home;
