import Navbar from "./Navbar";
export default function Layout({ children, locale, locales, defaultLocale }) {
  return (
    <div className="">
      <Navbar/>
      {children}
      <p>{locale}</p>
    </div>
  );
}