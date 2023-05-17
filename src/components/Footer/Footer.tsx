import FooterColOne from "./FooterColOne";
import FooterColThree from "./FooterColThree";
import FooterColTwo from "./FooterColTwo";

const Footer = () => {
  return (
    
    <footer className="flex flex-col divide-y-2 gap-4 m-20 full_bleed">
      
      <div className="grid grid-cols-3 mt-24 sm:grid-cols-1 md:grid-cols-1 text-black/80 dark:text-white/80">
        <FooterColOne />
        <FooterColTwo />
        <FooterColThree />
      </div>
      <p className="pt-4">
        © Nutrition Consult Ghana, Inc. 2019. We love our users!
      </p>
    </footer>
  );
};

export default Footer;
