import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type SiteShellProps = {
  active?: "home" | "about" | "services" | "contact";
  children: React.ReactNode;
};

export default function SiteShell({ active, children }: SiteShellProps) {
  return (
    <>
      <Nav active={active} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
