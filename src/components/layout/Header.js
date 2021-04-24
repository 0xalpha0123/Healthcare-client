import React, { useEffect, useState } from "react";
import { useQuery } from "react-fetching-library";
import { StatusCodes } from "http-status-codes";
import { useOffersContext } from "../../context/offersContextController/OffersContextController";
import {
  getOffersAction,
  getProfessionsAction,
  getSpecializationsAction,
} from "../../api/actions/offerActions";

const Header = () => {
  const offersContext = useOffersContext();

  const [titleSearch, setTitleSearch] = useState("");
  const [professionsList, setProfessionsList] = useState([]);
  const [specializationsList, setSpecializationsList] = useState([]);

  const [selectedProfession, setSelectedProfession] = useState(null);
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);

  const { query: getOffersQuery } = useQuery(
    getOffersAction({
      title: titleSearch,
      professionId: selectedProfession,
      specializationId: selectedSpecialization,
    }),
    false
  );
  const { query: getProfessionsQuery } = useQuery(
    getProfessionsAction(),
    false
  );
  const { query: getSpecializationsQuery } = useQuery(
    getSpecializationsAction({ professionId: selectedProfession }),
    false
  );

  useEffect(() => {
    (async () => {
      await Promise.all([
        loadOffers(),
        loadProfessionsFilters(),
        loadSpecializationsFilters(),
      ]);
    })();
  }, [selectedProfession, selectedSpecialization]);

  const loadOffers = async () => {
    const { payload, status } = await getOffersQuery();
    if (status === StatusCodes.OK) {
      offersContext.setOffersList(payload);
    }
  };

  const loadProfessionsFilters = async () => {
    const { payload, status } = await getProfessionsQuery();
    if (status === StatusCodes.OK) {
      setProfessionsList(payload);
    }
  };

  const loadSpecializationsFilters = async () => {
    if (!selectedProfession) {
      return;
    }

    const { payload, status } = await getSpecializationsQuery();
    if (status === StatusCodes.OK) {
      setSpecializationsList(payload);
    }
  };

  return (
    <div className="fixed h-32 z-50 bg-white">
      <div className="flex flex-col w-screen px-2 h-16 border-b-2 justify-center ">
        <div className="flex">Header</div>
      </div>
      <div className="flex flex-col w-screen px-2 h-16 border-b-2 justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loadOffers();
          }}
        >
          <input
            className="focus:outline-none h-10 pl-5 pr-10 w-1/4 text-gray-600 border border-gray-300 hover:border-gray-400 rounded-full"
            type="text"
            aria-label="Filter projects"
            placeholder="Search"
            value={titleSearch}
            onChange={(e) => setTitleSearch(e.target.value)}
          />
          <select
            className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            onChange={(e) => {
              console.log(`Wartość? ${e.target.value}`);
              setSelectedProfession(e.target.value);
              loadSpecializationsFilters();
            }}
            defaultValue={0}
          >
            <option value={0} disabled hidden>
              Profession
            </option>
            {professionsList.map(({ id, name }) => (
              <option key={`profession-${id}`} value={id}>
                {name}
              </option>
            ))}
          </select>
          <select
            className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            onChange={(e) => {
              e.preventDefault();
              setSelectedSpecialization(e.target.value);
            }}
            defaultValue={0}
          >
            <option value={0} disabled hidden>
              Specialization
            </option>
            {specializationsList.map(({ id, name }) => (
              <option key={`specialization-${id}`} value={id}>
                {name}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
};

export default Header;
