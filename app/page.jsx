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
        <img src="../public/uhc1.png" alt="UHC picture" />
        <img src="../public/uhc2.png" alt="UHC logo" />
      </div>
    </section>
  );
};

export default Home;
