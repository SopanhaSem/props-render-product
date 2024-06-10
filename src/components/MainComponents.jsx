import React from "react";
import NavBarComponent from "./NavBarComponent";
import FooterComponent from "./FooterComponent";
import NewCardList from "./NewCardList";
import CarouselComponents from "./CarouselComponents";
function MainComponents() {
  return (
    <section>
      <header>
        <NavBarComponent />
      </header>
      <CarouselComponents />
      <div className="w-full flex items-center justify-center ">
        <NewCardList />
      </div>
      <FooterComponent />
    </section>
  );
}

export default MainComponents;
