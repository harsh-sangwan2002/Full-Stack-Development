import Hero from "@/components/hero";
import performanceImg from "public/performance.jpg";

export default function Performance() {
  return (
    <Hero imgData={performanceImg} imgAlt="Performance Image" title="We server high performance applications." />
  )
}
