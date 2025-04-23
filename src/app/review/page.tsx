import Copyrights from "@/components/Copyrights";
import FixedButtons from "@/components/FixedButtons";
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import LogoSection from "@/components/LogoSection";
import ReviewsSlider from "@/components/ReviewsSlider"


const page = () => {
  return (
    <>
      <Header />
      <FixedButtons />
      <ReviewsSlider />
      <LogoSection />
      <Footer />
      <Copyrights />
    </>
  );
}

export default page
