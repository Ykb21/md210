export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="border-2 border-black p-4">{children}</div>
    );
  }