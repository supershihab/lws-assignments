import PricingCard from "./PricingCard";

const pricingData = [
  {
    title: "Starter",
    subtitle: "Best option for personal use & for your next project.",
    price: 29,
    perks: [
      "Individual configuration",
      "No setup, or hidden fees",
      <>
        Team size: <span className="font-semibold">1 developer</span>
      </>,
      <>
        Premium support: <span className="font-semibold">6 months</span>
      </>,
      <>
        Free updates: <span className="font-semibold">6 months</span>
      </>,
    ],
  },
  {
    title: "Company",
    subtitle: "Relevant for multiple users, extended & premium support.",
    price: 99,
    perks: [
      "Individual configuration",
      "No setup, or hidden fees",
      <>
        Team size: <span className="font-semibold">10 developer</span>
      </>,
      <>
        Premium support: <span className="font-semibold">24 months</span>
      </>,
      <>
        Free updates: <span className="font-semibold">24 months</span>
      </>,
    ],
  },
  {
    title: "Enterprise",
    subtitle: "Best for large scale uses and extended redistribution rights.",
    price: 499,
    perks: [
      "Individual configuration",
      "No setup, or hidden fees",
      <>
        Team size: <span className="font-semibold">100+ developer</span>
      </>,
      <>
        Premium support: <span className="font-semibold">36 months</span>
      </>,
      <>
        Free updates: <span className="font-semibold">36 months</span>
      </>,
    ],
  },
];

const Pricing = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Landwind we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <PricingCard pricingData={pricingData[0]} />
          <PricingCard pricingData={pricingData[1]} />
          <PricingCard pricingData={pricingData[2]} />
        </div>
      </div>
    </section>
  );
}
export default Pricing