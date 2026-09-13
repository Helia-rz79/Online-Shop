import './globals.css';
import Header from "./components/header/Header";
import Container from './components/container';
import Footer from './components/footer/footer';



export const metadata = {
  title: "خرید لوازم آرایشی و بهداشتی از فروشگاه خانومی",
  description: "",
   icons: {
    icon: "/logo/logo-s.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Container>
          <Header />
        </Container>
        {children}
        <Footer />
      </body>
    </html>
  );
}
