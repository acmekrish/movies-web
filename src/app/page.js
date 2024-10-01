import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchNar";
import Carousel from "./components/Carousel";
import Modal from "./components/Modal";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="container mx-auto py-10">
        <SearchBar />
        <Carousel />
      </div>
      <Modal />
    </div>
  );
}

