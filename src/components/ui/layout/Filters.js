import { useOffersContext } from "../../../context/offersContextController/OffersContextController";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-fetching-library";
import {
  getOffersAction,
  getProfessionsAction,
  getSpecializationsAction,
} from "../../../api/actions/offerActions";
import { StatusCodes } from "http-status-codes";
import { NumberInput, SearchInput } from "../Input";
import { Select } from "../Select";
import { getUniqueLocations } from "../../../api/actions/companyActions";
import { useTranslation } from "next-i18next";

const Filters = () => {
  const offersContext = useOffersContext();

  const { t } = useTranslation("common");

  const [titleSearch, setTitleSearch] = useState("");
  const [professionsList, setProfessionsList] = useState([]);
  const [specializationsList, setSpecializationsList] = useState([]);
  const [locationsList, setLocationsList] = useState([]);

  const [selectedProfession, setSelectedProfession] = useState(null);
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const [salaryFrom, setSalaryFrom] = useState(0);
  const [salaryTo, setSalaryTo] = useState(20000);

  const { query: getOffersQuery } = useQuery(
    getOffersAction({
      title: titleSearch,
      professionId: selectedProfession,
      specializationId: selectedSpecialization,
      city: selectedLocation,
      salaryFrom,
      salaryTo,
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

  const { query: getLocationsQuery } = useQuery(getUniqueLocations(), false);

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
      await Promise.all([loadSpecializationsFilters()]);
    })();
  }, [selectedProfession]);

  useEffect(() => {
    (async () => {
      await Promise.all([loadOffers()]);
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
      setSelectedSpecialization(null);
    }
  };

  const loadLocationsFilters = async () => {
    const { payload, status } = await getLocationsQuery();
    if (status === StatusCodes.OK) {
      setLocationsList(payload);
    }
  };

  return (
    <div className="flex flex-col px-2 h-16 justify-center">
      <form
        className="flex flex-wrap"
        onSubmit={(e) => {
          loadOffers();
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            loadOffers();
          }
        }}
      >
        <SearchInput
          value={titleSearch}
          setValue={setTitleSearch}
          placeholder={t("search")}
        />

        <Select
          value={selectedLocation}
          onChange={(e) => {
            setSelectedLocation(e.target.value);
          }}
          label={t("location")}
        >
          {locationsList.map(({ city }) => (
            <option key={`location-${city}`} value={city}>
              {city}
            </option>
          ))}
        </Select>
        <Select
          value={selectedProfession}
          onChange={(e) => {
            setSelectedProfession(e.target.value);
          }}
          label={t("profession")}
        >
          {professionsList.map(({ id, name }) => (
            <option key={`profession-${id}`} value={id}>
              {name}
            </option>
          ))}
        </Select>
        <Select
          value={selectedSpecialization}
          onChange={(e) => {
            e.preventDefault();
            setSelectedSpecialization(e.target.value);
          }}
          label={t("specialization")}
        >
          {specializationsList.map(({ id, name }) => (
            <option key={`specialization-${id}`} value={id}>
              {name}
            </option>
          ))}
        </Select>
        <NumberInput
          value={salaryFrom}
          placeholder={t("salary-from")}
          setValue={setSalaryFrom}
        />

        <NumberInput
          value={salaryTo}
          placeholder={t("salary-to")}
          setValue={setSalaryTo}
        />
      </form>
    </div>
  );
};

export default Filters;
