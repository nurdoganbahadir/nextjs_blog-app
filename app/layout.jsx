import Footer from "../components/footer";
import Header from "../components/header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: "0px" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
