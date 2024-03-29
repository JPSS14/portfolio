import { Header, Intro } from "./components";

export default function HomeTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ maxWidth: "1536px", margin: "0 auto", position: "relative" }}>
      <Header />
      <Intro />
      <div>{children}</div>
    </div>
  );
}
