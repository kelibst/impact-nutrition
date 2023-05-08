import Testimony from "../Testimony";

const SectionTestimonial = () => {
  return (
    <section>
      <h2 className="text-4xl font-semibold text-center mt-10 mb-10">What People Say About Us</h2>
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
        <Testimony />
        <Testimony />
        <Testimony />
      </div>
    </section>
  );
};

export default SectionTestimonial;
