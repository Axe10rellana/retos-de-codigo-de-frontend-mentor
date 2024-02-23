//components
import { ImmersiveExperienceSection, Logo, Menu, MobileMenu } from ".";

const Header = () => {
  return (
    <header className="pt-12 responsive-aling flex flex-col justify-between px-8 md:px-24 bg-header">
      <div className="flex flex-row items-center justify-between">
        <Logo index="header" />
        <div className="hidden md:block">
          <Menu />
        </div>
        <div className="block md:hidden">
          <MobileMenu />
        </div>
      </div>
      <ImmersiveExperienceSection />
    </header>
  );
};

export default Header;
