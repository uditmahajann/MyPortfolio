type PhoneFrameProps = {
  screen: string;
  alt: string;
};

function PhoneFrame({
  screen,
  alt,
}: PhoneFrameProps) {
  return (
    <div className="relative w-50 md:w-62">

      {/* Fixed Device Frame */}
      <img
        src="/images/phone-frame.png"
        alt=""
        className="w-full"
      />

      {/* Screen Changes */}
      <img
        src={screen}
        alt={alt}
        className="
          absolute
          top-[3.3%]
          left-[5.5%]
          w-[89%]
          h-[93.5%]
          object-cover
          rounded-[28px]
        "
      />
    </div>
  );
}