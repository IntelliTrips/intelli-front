import React, { useState } from 'react';

type City = {
  name: string;
};

export function App() {

  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const incrementNumberOfPeople = () => {
    setNumberOfPeople(prevCount => prevCount + 1);
  };

  const decrementNumberOfPeople = () => {
    if (numberOfPeople > 1) {
      setNumberOfPeople(prevCount => prevCount - 1);
    }
  };

  const handleSearch = () => {
    console.log('Pesquisando:', selectedCity, selectedStartDate, selectedEndDate, numberOfPeople);
  };

  // Estado para o seletor de destino
  return (
  <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-b from-purple-800 via-fuchsia-300 to-purple-800">
    <div className="flex object-center self bg-purple-900 rounded-xl w-[1000px] mx-auto min-h-[200px]  justify-items-center place-content-center justify-self-center content-center place-self-center justify-center origin-center center">
      <div className="flex px-24 gap-4 items-end justify-items-center place-content-center justify-self-center content-center place-self-center justify-center origin-center center">
        <div className="flex flex-col items-center gap-4">
          <label className="mr-2">Selecione o destino:</label>
          <select
            name='city'
            value={selectedCity?.name || ''}
            onChange={e => {
              setSelectedCity(selectedCity);
            }}
            className="border border-gray-300 rounded-xl p-2"
          >
            <option value="someOption">Some option</option>
            <option value="otherOption">Other option</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mr-2 place-self-center text-center">Selecione as datas: <br /> Inicio | Término </label>
          <div className="flex flex-row gap-2">
          <input
            placeholder='Data de início'
            type="date"
            value={selectedStartDate ? selectedStartDate.toISOString().split('T')[0] : ''}
            onChange={e => setSelectedStartDate(new Date(e.target.value))}
            className="border border-gray-300 rounded-xl p-2 mr-2"
          />

          <input
            placeholder='Data de término'
            type="date"
            value={selectedEndDate ? selectedEndDate.toISOString().split('T')[0] : ''}
            onChange={e => setSelectedEndDate(new Date(e.target.value))}
            className="border border-gray-300 rounded-xl p-2"
          />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="mr-2">Número de pessoas:</label>
          <div className="flex flex-row gap-2">
          <button
            onClick={decrementNumberOfPeople}
            className="border border-gray-300 rounded-xl p-2"
          >
            -
          </button>
          <input
            type="text"
            value={numberOfPeople}
            readOnly
            className="border border-gray-300 rounded-xl p-2 mx-2 w-10 text-center"
          />
          <button onClick={incrementNumberOfPeople} className="border border-gray-300 rounded-xl p-2">
            +
          </button>
          </div>
        </div>

        <button
          className="bg-white text-black py-2 px-4 rounded-xl font-bold h-10"
          onClick={handleSearch}
        >
          Pesquisar
        </button>
      </div>

      <div className="flex-1 flex-col gap-8">
        <img src="/assets/logo.png" alt='' className="min-h-full content-end" />
      </div>

    </div>
  </div>
  );
};

