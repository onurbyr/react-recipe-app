const About = () => {
  return (
    <div className="about-container">
      <img src={require("../images/about-img.png")} alt="" />
      <div className="about-detail-box">
        <h2>RecipeApp</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at
          eum officia recusandae quos amet dicta nesciunt provident magnam
          pariatur? Voluptatem voluptas voluptates, rem illo dolores est
          laudantium. Error, earum! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Totam, laboriosam quae blanditiis eveniet eos beatae
          maxime culpa provident praesentium dicta voluptas maiores dolorem hic
          sunt reprehenderit, nemo laudantium mollitia ab?
        </p>
        <button>ReadMore</button>
      </div>
    </div>
  );
};

export default About;
