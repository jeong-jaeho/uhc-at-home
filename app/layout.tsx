import "../styles/globals.css";
import Nav from "../components/Navbar/Nav";
import Modal from "../components/modals/Modal";
import RegisterModal from "../components/modals/RegisterModal";
import LoginModal from "../components/modals/LoginModal";
import ToasterProvider from "./providers/ToasterProvider";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "../components/modals/RentModal";

export const metadata = {
  title: "UHC@HOME",
  description: "Making UHC accessible right in your own room!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className="font-inter">
        <ClientOnly>
          <div className="">
            <ToasterProvider />
            <RentModal />
            <LoginModal />
            <RegisterModal />
            <Nav currentUser={currentUser} />
          </div>
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
