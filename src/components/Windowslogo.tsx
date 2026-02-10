import Image from "next/image";

const WindowsLogo = () => {
  return (
    <section className="p-6 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex justify-center">
          <Image
            src="/logo6.jpg"
            alt="Logo 1"
            width={300}
            height={50}
            className="transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/logo7.jpg"
            alt="Logo 2"
            width={144}
            height={144}
            className="transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/logo8.png"
            alt="Logo 3"
            width={144}
            height={144}
            className="transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default WindowsLogo;
