export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <span>홈 레이아웃</span>
      {children}
    </div>
  );
}
