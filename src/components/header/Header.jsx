import React from "react";
import { InputSearch } from "../inputSearch/InputSearch";
import NavBar from "../navbar/NavBar";

const Header = () => {
  return (
    <header className="bg-white">
      <section className="py-2 bg-orange-500">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <div className="text-white text-2xl">SellBooks</div>
            <form action="" className="mx-auto w-6/12">
              <InputSearch></InputSearch>
            </form>
          </div>
        </div>
      </section>
      <section>
        <NavBar></NavBar>
      </section>
    </header>
  );
};

export default Header;
