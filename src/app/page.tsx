import ThumbnailCarousel from "@/components/Carousel/ThumbnailCarousel";
import Flex from "@/components/Flex";
import FlexCenter from "@/components/FlexCenter";
// import GradientComp from "@/components/GradientComp";
import GsapComponet from "@/components/Gsapcomp";
import Features from "@/components/GsapOnText";
import GsapRotateMultiLine from "@/components/GsapRotateMultiLine";
import GsapRotateSingleLine from "@/components/GsapRotateSingleline";
// import GsapReusaubleComp from "@/components/GsapRotateSingleline";
import GsapVideo from "@/components/GsapVideo";
import ReactGsap from "@/components/ReactGsap";
import Typescript from "@/components/Typescript";
import ZoomBanner from "@/components/ZoomBanner";
import ZoomImage from "@/components/ZoomImage";
// import { headers, cookies } from "next/headers";

export const revalidate = 50;

export default function Home() {
  // const requestHeaders = headers(); // Get incoming request headers
  // const userAgent = requestHeaders.get("user-agent"); // Access a specific header

  // Example: Set a custom response header (if needed)
  // ('Cache-Control', 'no-store');

  type ProductSlideImageProps = string;

  type User = {
    id: string;
    name: string;
    email: string;
  };
  type UserWithEmailProps = Omit<User, "email">;

  const productSlideImages: ProductSlideImageProps[] = [
    "/allProductsImg/flanges/flanges1.webp",
    "/allProductsImg/flanges/flanges2.webp",
    "/allProductsImg/flanges/flanges3.webp",
    "/allProductsImg/flanges/flanges4.webp",
    "/allProductsImg/flanges/flanges5.webp",
  ];
  return (
    <div className="">
      {/* <ZoomBanner /> */}
      {/* <GsapComponet /> */}
      {/* <GsapRotateSingleLine /> */}
      {/* <GsapRotateMultiLine /> */}
      {/* <GradientComp /> */}
      {/* <GsapVideo /> */}
      {/* <ZoomImage/> */}
      {/* <Flex/> */}
      {/* <FlexCenter/> */}
      {/* <ReactGsap /> */}
      {/* <Features /> */}
      {/* <div className="relative h-[100vh]  w-[100%]">
        <video
          poster="/videoPlaceholder.webp"
          className=" h-full w-full object-cover"
          playsInline
          preload="none"
          loop
          autoPlay
          muted
        >
          <source src="/videos.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}

      {/* <YoutbeForm />
      <ProjectTable /> */}
      {/* <SevereSideRendering /> */}
      {/* <GetStaticPath /> */}

      {/* <div>
        <h1>Welcome to the Thumbnail Carousel</h1>
        <ThumbnailCarousel images={productSlideImages} />
      </div>
      <div className="my-16">
        <h1 className="">Table of Content</h1>
        <div className="my-10">
         
        </div>
      </div>
      <Typescript /> */}
    </div>
  );
}
