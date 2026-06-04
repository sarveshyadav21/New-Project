import { profile } from "../../data/bio";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Crafted with Next.js &
          Gemini.
        </p>
        <p className="text-sm text-muted-foreground">{profile.location}</p>
      </div>
    </footer>
  );
}
