import ThumbnailCarousel from "@/components/Carousel/ThumbnailCarousel";
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
      <ZoomImage/>
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
          <table>
            <thead>
              <th colSpan={5}>name</th>
            </thead>
            <thead>
              <th></th>
              <th>name</th>
              <th>age</th>
              <th>skin color</th>
              <th>height</th>
            </thead>

            <tbody>
              <tr>
                <th rowSpan={5}>Client Details</th>
              </tr>
              <tr>
                <td>john</td>
                <td>65</td>
                <td>black</td>
                <td>6.5</td>
              </tr>
              <tr>
                <td rowSpan={2}>william</td>
                <td>52</td>
                <td>black</td>
                <td>5.3</td>
              </tr>
              <tr>
                <td>52</td>
                <td>black</td>
                <td>5.3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Typescript /> */}
    </div>
  );
}
