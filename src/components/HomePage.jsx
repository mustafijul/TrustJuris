import ClientReviews from "./ClientReviews.jsx";
import FAQ from "./FAQ.jsx";
import LegalPractice from "./LegalPractise.jsx";



const HomePage = () => {
  return (
    <div>
      {/* You can add a hero section here if needed */}
     <LegalPractice></LegalPractice>
      <ClientReviews />
      <FAQ />
    </div>
  );
};

export default HomePage;