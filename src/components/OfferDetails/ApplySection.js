import { useTranslation } from "next-i18next";
import { ApplicationModal } from "./ApplicationModal/ApplicationModal";
import { useState } from "react";

const ApplySection = () => {
  const { t } = useTranslation("common");

  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [applicationSent, setApplicationSent] = useState(false);

  return (
    <div className="flex justify-center shadow-md p-3 mb-5 bg-white rounded-md ">
      {applicationSent ? (
        <div>{t("application-sent")}</div>
      ) : (
        <div
          className="bg-primary w-36 p-2 uppercase text-white text-center rounded-xl cursor-pointer hover:bg-secondary"
          onClick={(e) => {
            e.preventDefault();
            setApplicationModalOpen(!applicationModalOpen);
          }}
        >
          {t("apply")}
        </div>
      )}
      <ApplicationModal
        isOpen={applicationModalOpen}
        setOpen={setApplicationModalOpen}
        setApplicationSent={setApplicationSent}
      />
    </div>
  );
};

export default ApplySection;
