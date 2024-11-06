import Footer from "../components/footer";
import Header from "../components/header";
import { ReactNode } from "react";
import { AuthProvider } from "../contexts/AuthContext";


interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body style={{ margin: "0px" }}>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default RootLayout;
