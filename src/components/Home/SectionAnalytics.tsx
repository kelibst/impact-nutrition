import AnalyticContent from "../AnalyticContent";

const SectionAnalytics = () => {
  return (
    <section>
      <h2 className=" text-4xl font-semibold text-center mb-10 ">Insights and Analytics</h2>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
        <AnalyticContent />
        <AnalyticContent />
        <AnalyticContent />
        <AnalyticContent />
      </div>
    </section>
  );
};

export default SectionAnalytics;
