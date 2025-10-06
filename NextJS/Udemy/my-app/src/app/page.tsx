import Hero from "@/components/hero";
import homeImg from "public/home.jpg";

export default function Home() {
  return (
    <Hero imgAlt="Hero Image" imgData={homeImg} title="Professional Cloud Hosting" />
  );
}
