import Sor from "../view_component/Sor";

// komponensen kívül példányosítjuk a modellt

export default function Admin(props) {
  function kattintas(id) {
    console.log("szülőkomponensben", id);
  }
  return (
    <>
      <h2>Publikus oldal</h2>

      <table className="table">
        {lista.map((elem, index) => {
          return <Sor obj={elem} key={index} kattintas={kattintas} />;
        })}
      </table>
    </>
  );
}
