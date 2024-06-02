import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div className="border-y-4 border-l-4 border-gray-950 overflow-hidden rounded-tl-lg rounded-bl-lg">
          <Image
            src="/icons/website_image.png"
            alt="auth image"
            width={650}
            height={750}
          />
        </div>
      </div>
    </main>
  );
}
