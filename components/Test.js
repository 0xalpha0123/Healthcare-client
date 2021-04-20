import React from "react";
import { useTranslation } from "next-i18next";

function Test() {
  const { t } = useTranslation("common");
  return (
    <div>
      {t("test")}
    </div>
  );
}

export default Test;
