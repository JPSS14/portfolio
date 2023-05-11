import { Header } from "./components/header/header";
import { Intro } from "./components/intro/intro";

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
