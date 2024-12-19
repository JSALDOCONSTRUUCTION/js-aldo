import Copyrights from "@/components/Copyrights";
import FixedButtons from "@/components/FixedButtons";
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ReviewsSlider from "@/components/ReviewsSlider"


const page = () => {
  return (
    <>
      <Header />
      <FixedButtons />
      <ReviewsSlider />
      <Footer />
      <Copyrights />
    </>
  );
}

export default page
