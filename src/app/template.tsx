import { Header, Intro } from "./components";

export default function HomeTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <Intro />
      <div>{children}</div>
    </div>
  );
}
