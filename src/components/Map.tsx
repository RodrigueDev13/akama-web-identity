
const Map = () => {
  return (
    <div className="rounded-xl overflow-hidden w-full h-full min-h-[300px] shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127107.35361494244!2d-4.057766300781247!3d5.348158000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ea5311959121%3A0x3fe70ddce19221a6!2sCocody%2C%20Abidjan%2C%20C%C3%B4te%20d%E2%80%99Ivoire!5e0!3m2!1sfr!2sus!4v1689349328123!5m2!1sfr!2sus"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "300px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="AKAMA GROUPE Location"
      ></iframe>
    </div>
  );
};

export default Map;
