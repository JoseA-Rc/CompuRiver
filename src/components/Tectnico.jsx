import st from '../img/serviciotecnico.jpg'

export const Tectnico = () => {
  return (
    <>
      <div className="mx-28 my-4 flex justify-end">
        <h1 className="italic text-xl border-b-2 border-indigo-500">Lo nuevo en <b className="font-medium text-indigo-600">CompuRiver</b></h1>
      </div>
      <div className="flex items-center justify-center bg-neutral-50 mx-28 py-6 my-4 rounded-2xl shadow-xl">
        <img src={st} alt="" className="" />
      </div>
    </>
  );
};
