import Footer from "../Footer";
import Header from "../Header";

export type BaseLayoutProps = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
