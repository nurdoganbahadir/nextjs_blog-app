import Footer from "../components/footer";
import Header from "../components/header";
import { ReactNode } from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { ApiProvider } from "../contexts/ApiContext";

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
      <ApiProvider>
        <html lang="en">
          <body style={{ margin: "0px" }}>
            <Header />
            <main>{children}</main>
            <Footer />
          </body>
        </html>
      </ApiProvider>
    </AuthProvider>
  );
};

export default RootLayout;
