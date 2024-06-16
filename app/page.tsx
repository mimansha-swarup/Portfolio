import {
  Blogs,
  Contact,
  HomeSection,
  ProjectSection,
  Skills,
} from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-stretch justify-between w-full overflow-x-hidden">
      <HomeSection />
      <Skills />
      <ProjectSection />
      <Blogs />
      <Contact />
    </main>
  );
}
