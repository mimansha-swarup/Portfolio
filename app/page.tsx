import Image from "next/image";
import FloatEmail from "../components/FloatEmail";
import FloatDetails from "@/components/FloatDetails";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-[12rem]">
      <Title heading="Projects" />

      {/* <FloatDetails />
      <FloatEmail /> */}
    </main>
  );
}
