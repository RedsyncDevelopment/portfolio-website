import DotsLevel from "../../UI/DotsLevel";

const English = () => {
  return (
    <>
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DotsLevel type="Listening" numberOfDots={4} />
          <DotsLevel type="Reading" numberOfDots={4} />
          <DotsLevel type="Writing" numberOfDots={4} />
          <DotsLevel type="Spoken Interaction" numberOfDots={4} />
          <DotsLevel type="Spoken Production" numberOfDots={4} />
        </ul>
      </div>
    </>
  );
};

export default English;
