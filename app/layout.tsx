import "styles/globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Color Guessing Game</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
