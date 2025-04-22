import ThemeToggle from "@/theme/theme-toggle";

export default function Home() {
  return (
    <div className="grid bg-white dark:bg-black grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ThemeToggle></ThemeToggle>
    </div>
  );
}
