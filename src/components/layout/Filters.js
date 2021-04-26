import { useOffersContext } from "../../context/offersContextController/OffersContextController";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-fetching-library";
import {
  getOffersAction,
  getProfessionsAction,
  getSpecializationsAction,
} from "../../api/actions/offerActions";
import { StatusCodes } from "http-status-codes";
import { Input, InputNumber } from "../ui/Input";
import { Select } from "../ui/Select";
import { getUniqueLocations } from "../../api/actions/companyActions";

const Filters = () => {
  const offersContext = useOffersContext();

  const [titleSearch, setTitleSearch] = useState("");
  const [professionsList, setProfessionsList] = useState([]);
  const [specializationsList, setSpecializationsList] = useState([]);
  const [locationsList, setLocationsList] = useState([])

  const [selectedProfession, setSelectedProfession] = useState(null);
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");

  const [salaryFrom, setSalaryFrom] = useState(0);
  const [salaryTo, setSalaryTo] = useState(0);

  const { query: getOffersQuery } = useQuery(
    getOffersAction({
      title: titleSearch,
      professionId: selectedProfession,
      specializationId: selectedSpecialization,
      city: selectedLocation
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

  const { query: getLocationsQuery } = useQuery(
      getUniqueLocations(),
      false
  );

  useEffect(() => {
    (async () => {
      await Promise.all([
        loadOffers(),
        loadProfessionsFilters(),
        loadSpecializationsFilters(),
        loadLocationsFilters(),
      ]);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await Promise.all([
        loadOffers(),
        loadSpecializationsFilters(),
      ]);
    })();
  }, [selectedProfession, selectedSpecialization, selectedLocation]);

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

  const loadLocationsFilters = async () => {
    const { payload, status } = await getLocationsQuery();
    if (status === StatusCodes.OK) {
      setLocationsList(payload);
    }
  }

  return (
    <div className="flex flex-col px-2 h-16 border-b-2 justify-center">
      <form
        className="flex flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          loadOffers();
        }}
      >
        <Input
          value={titleSearch}
          setValue={setTitleSearch}
          placeholder={"Search"}
        />

        <Select
            onChange={(e) => {
              setSelectedLocation(e.target.value);
            }}
            label={"Location"}
        >
          {locationsList.map(({ city }) => (
              <option key={`location-${city}`} value={city}>
                {city}
              </option>
          ))}
        </Select>

        <Select
          onChange={(e) => {
            setSelectedProfession(e.target.value);
            loadSpecializationsFilters();
          }}
          label={"Profession"}
        >
          {professionsList.map(({ id, name }) => (
            <option key={`profession-${id}`} value={id}>
              {name}
            </option>
          ))}
        </Select>

        <Select
          onChange={(e) => {
            e.preventDefault();
            setSelectedSpecialization(e.target.value);
          }}
          label={"Specialization"}
        >
          {specializationsList.map(({ id, name }) => (
            <option key={`specialization-${id}`} value={id}>
              {name}
            </option>
          ))}
        </Select>

        <InputNumber
            value={salaryFrom}
            placeholder={"Salary from"}
            setValue={setSalaryFrom}
        />

        <InputNumber
            value={salaryTo}
            placeholder={"Salary to"}
            setValue={setSalaryTo}
        />
      </form>
    </div>
  );
};

export default Filters;
