import parse from "html-react-parser";
import { useTranslation } from "next-i18next";

const CompanySection = ({ description }) => {
  const { t } = useTranslation("common");

  return (
    <div className="bg-white shadow-md p-5 mb-5 rounded-md">
      <h2 className="text-lg">{t("company-description")}</h2>
      <hr className="my-2" />
      <p className="whitespace-pre-wrap">{parse(description)}</p>
    </div>
  );
};

export default CompanySection;
