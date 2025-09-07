const ServiceItem = ( {serviceInfo} ) => {

  return (
    <div>
      {serviceInfo.icon}
      <h3 className="mb-2 text-2xl font-bold dark:text-white">
        {serviceInfo.header}
      </h3>
      <p className="font-light text-gray-500 dark:text-gray-400">
        {serviceInfo.subtext}
      </p>
    </div>
  );
};
export default ServiceItem;
