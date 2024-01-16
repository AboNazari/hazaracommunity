import Hero from "../components/hero/Hero";
import Header from "../components/navigation/Header";
import SearchComponent from "../components/search/Search";
import Cities from "../components/cities/Cities";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SearchComponent />
      <Cities />
      <Footer />
    </main>
  );
}
