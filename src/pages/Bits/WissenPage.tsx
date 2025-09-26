import Bit from "../../components/Wissensbit";

function WissenPage() {
  return (
    <Bit
      id={1}
      title="Attention-Block"
      content={
        <>
          Die Teile eines großen Sprachmodells wie ChatGPT, die für die
          Aufmerksamkeit zuständig sind, werden oft als{" "}
          <strong className="text-primary">
            Aufmerksamkeits- oder Attention-Block
          </strong>{" "}
          bezeichnet.
        </>
      }
    ></Bit>
  );
}

export default WissenPage;
