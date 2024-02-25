export const Home = () => {
  return (
    <section
      className=" bg-cover h-[92vh] p-12 "
      style={{
        backgroundImage:
          "url(https://vikna.if.ua/assets/gallery/2023/06/05/143672/1685950501_23b960e596a37182a438.jpg)",
      }}>
      <h1 className="text-3xl text-center font-bold">Welcome to the car rental service</h1>
      <p className=" font-semibold text-center mt-4">
        Do you know what makes your travel even more enjoyable? Unlimited freedom. And that's exactly what we offer -
        experience true freedom on the road with our car rental service.
      </p>

      <h3 className="mt-8 font-bold text-2xl text-center">Our advantages:</h3>
      <ul className="flex gap-5 flex-wrap  justify-between mt-5   ">
        <li className=" w-2/5">
          <h4 className=" font-medium text-center text-xl">Wide selection of cars:</h4>
          <p className="font-bold ">
            From economy class to executive cars - we have all styles and classes so you can find exactly what you need.
          </p>
        </li>
        <li className=" w-2/5">
          <h4 className=" font-medium text-center text-xl">Simple booking process:</h4>
          <p className="font-bold">
            Convenient and fast online booking - it's just a few clicks away to start your journey.
          </p>
        </li>
        <li className=" w-2/5">
          <h4 className=" font-medium text-center text-xl">Flexible rental terms:</h4>
          <p className="font-bold">We offer flexible rates and rental terms to meet your needs.</p>
        </li>
        <li className=" w-2/5">
          <h4 className=" font-medium text-center text-xl">24/7 support:</h4>
          <p className="font-bold">Our team is ready to assist you anytime - we're always here for you.</p>
        </li>
      </ul>
    </section>
  );
};
