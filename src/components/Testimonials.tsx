import Image from "next/image";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: "/avatar-1.png",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: "/avatar-2.png",
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: "/avatar-3.png",
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: "/avatar-4.png",
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: "/avatar-5.png",
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: "/avatar-6.png",
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: "/avatar-7.png",
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: "/avatar-8.png",
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: "/avatar-9.png",
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColum = testimonials.slice(0, 3);
const secondColum = testimonials.slice(3, 6);
const thirdColum = testimonials.slice(6, 9);

const TestomonialColumn = (props: {
  testimonials: typeof testimonials;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "mt-10 flex flex-col gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
        props.className
      )}
    >
      {props.testimonials.map(({ text, imageSrc, name, username }, index) => (
        <div key={index} className="card">
          <div>{text}</div>
          <div className="mt-5 flex items-center gap-2">
            <Image
              src={imageSrc}
              alt={name}
              width={40}
              height={40}
              className="size-10 rounded-full"
            />
            <div className="flex flex-col">
              <div className="font-medium leading-5 tracking-tight">{name}</div>
              <div className="leading-5 tracking-tight">{username}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="bg-white py-0">
      <div className="custom-container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testomonials</div>
          </div>
          <h2 className="section-title mt-5">What our user say</h2>
          <p className="section-description mt-5">
            From intuitive design to powerful features, our app has become an
            essential tool for teams worldwide. Discover how it can transform
            your workflow today.
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <TestomonialColumn testimonials={firstColum} />
          <TestomonialColumn
            testimonials={secondColum}
            className="hidden md:flex"
          />
          <TestomonialColumn
            testimonials={thirdColum}
            className="hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
};
