import React,{useState,useEffect} from "react"
import img1 from "../../Assets/Images/tour-1-1.jpg";
import img2 from "../../Assets/Images/tour-1-2.jpg";
import img3 from "../../Assets/Images/tour-1-3.jpg";
import img4 from "../../Assets/Images/tour-2-1.jpg";



const images = [
  {
    images: img1,
    head: "Fixing Truck Since 1990",
    content: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
    quae, veritatis, tenetur atque doloremque corporis similique tempora
    `,
  },
  {
    images: img2,
    head: "Repairing cars since 1966",
    content: `Ut enim ad minim veniam cos, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eax ea commodo consequat.`,
  },
  {
    images: img3,
    head: "Having fun and profit since 1977",
    content: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
    quae, veritatis`,
  },
];

const Heading = ({ title, subtitle }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);
  return (
    <>
      <div className='heading'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {/* <img
          // src={bgImf[bgImages]?.bg}
          src={images[currentIndex].images}
          className="bannerImg"
          loading="lazy"
        /> */}
      </div>
    </>
  )
}

export default Heading
