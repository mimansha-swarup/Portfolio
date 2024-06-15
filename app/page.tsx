import { HomeSection, ProjectSection } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-stretch justify-between w-full overflow-x-hidden">
      <HomeSection />
      <ProjectSection />
    </main>
  );
}
