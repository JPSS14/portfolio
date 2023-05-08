export default function HomeTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h1>Template</h1>
      </header>
      <div>{children}</div>
    </div>
  );
}
