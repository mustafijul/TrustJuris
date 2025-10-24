import ClientReviews from "./Components/ClientReviews";
import FAQ from "./Components/Faq";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LegalPractice from "./Components/LegalPractise";


function App() {
  return (
    <div className="min-h-screen">
     <Header></Header>
      <main>
        <LegalPractice></LegalPractice>
        <ClientReviews></ClientReviews>
        <FAQ></FAQ>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;