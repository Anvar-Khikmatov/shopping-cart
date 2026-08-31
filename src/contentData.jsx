import heroImg1 from './assets/1.webp'
import heroImg2 from './assets/2.webp'
import heroImg3 from './assets/3.webp'
import heroImg4 from './assets/4.webp'
import heroImg5 from './assets/5.webp'
import { IoDiamondOutline } from "react-icons/io5";
import { BsSunglasses } from "react-icons/bs";
import { SiCodemagic } from "react-icons/si";
import { TbClover } from "react-icons/tb";





export const homepageContent = {
  heroSlides: [
    {
      id: 1,
      image: heroImg1, 
      title: "Timeless Elegance",
      description: "Crafted for those who appreciate refined design and everyday sophistication.",
      alt: "Woman in editorial pose wearing red aviator sunglasses"
    },
    {
      id: 2,
      image: heroImg2,
      title: "See Beyond Trends",
      description: "Discover handcrafted frames that combine comfort, quality, and lasting style.",
      alt: "Man at beach wearing dark square frame sunglasses"
    },
    {
      id: 3,
      image: heroImg3,
      title: "Made to Stand Out",
      description: "Premium eyewear designed to express confidence with every glance.",
      alt: "Man wearing yellow tinted round sunglasses"
    },
    {
      id: 4,
      image: heroImg4,
      title: "Modern Classics",
      description: "Contemporary frames inspired by timeless silhouettes and effortless style.",
      alt: "Couple wearing aviator sunglasses in moody lighting"
    },
    {
      id: 5,
      image: heroImg5,
      title: "Refined Vision",
      description: "Experience eyewear where minimalist design meets exceptional craftsmanship and everyday comfort.",
      alt: "Woman with wind blown hair wearing dark sunglasses"
    }
  ]
};


export const whySectionContent = {
  subheading: "WHY VELORA",
  heading: "Crafted for those who see the details.",
  descriptionBox: [
    {
      icon: <IoDiamondOutline />,
      title: "Premium Craftsmanship",
      description: "Carefully selected frames crafted with attention to detail, quality materials, and lasting comfort."
    },
    {
      icon: <BsSunglasses />,
      title: "Timeless Design",
      description: "Elegant silhouettes that blend modern trends with classic aesthetics for every occasion."
    },  
    {
      icon: <SiCodemagic />,
      title: "Curated Collections",
      description: "Thoughtfully chosen eyewear collections designed to help you find your perfect style."
    },  
    {
      icon: <TbClover  />,
      title: "Comfort First",
      description: "Lightweight designs created for effortless everyday wear without compromising on style."
    }, 

  ]
}