import Image from "next/image";
import styles from "@/styles/Slider.module.css";
import React, { useEffect, useState } from "react";
const images = [
  {
    id: 1,
    title: "gioi thieu",
    image: "/image/slider1.gif",
  },
  {
    id: 2,
    title: "sale",
    image: "/image/slider2.gif",
  },
];
const Slider = () => {
  // const [index, setIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  // const handleArrow = ({ direction } : any) =>{
  //     if(direction==="l"){
  //         setIndex(index !== 1 ? index-1 : 2)
  //     }
  //     if(direction==="r"){
  //         setIndex(index !== 2 ? index+1 : 1)
  //     }
  // }
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1)),
      5000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.container}>

      <Image className={styles.imgContainer} src={images[currentSlide].image} alt="" layout="fill" objectFit="contain" />

    </div>
  );
}

export default Slider;