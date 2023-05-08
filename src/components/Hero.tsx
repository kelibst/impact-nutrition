const Hero = () => {
  return (
    <section className="grid grid-cols-2 gap-5 mt-20 sm:grid-cols-1 md:grid-cols-2">
      <div className="mt-20">
        <h1 className="heading_primary text-3xl font-bold uppercase mb-6">
          Impact nutrition consult leaders in nutrition for health
        </h1>
        <p className="text-2xl mb-4 ">
          We are committed to being leaders in the field of nutrition for
          optimal health. Our team of experienced and knowledgeable
          nutritionists are here to provide you with personalized guidance and
          support to help you achieve your health goals
        </p>
        <button className="capitalize bg-colorPrimary rounded py-2 px-4 text-white">
          View more
        </button>
      </div>
      <img src="./assets/hero_image.svg" alt="hero image" />
    </section>
  );
};

export default Hero;
