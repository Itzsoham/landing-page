import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="bg-white py-8 md:py-12">
      <div className="custom-container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex flex-none gap-14">
            <Image
              className="logo-ticker-img"
              src="/logo-acme.png"
              alt="ACME Logo"
              width={150}
              height={150}
            />
            <Image
              className="logo-ticker-img"
              src="/logo-apex.png"
              alt="Apex Logo"
              width={150}
              height={150}
            />
            <Image
              className="logo-ticker-img"
              src="/logo-celestial.png"
              alt="Celestial Logo"
              width={150}
              height={150}
            />
            <Image
              className="logo-ticker-img"
              src="/logo-echo.png"
              alt="Echo Logo"
              width={150}
              height={150}
            />
            <Image
              className="logo-ticker-img"
              src="/logo-pulse.png"
              alt="Pulse Logo"
              width={150}
              height={150}
            />
            <Image
              className="logo-ticker-img"
              src="/logo-quantum.png"
              alt="Quantum Logo"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
