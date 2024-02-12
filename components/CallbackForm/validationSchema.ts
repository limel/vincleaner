"use client";
import * as yup from "yup";
import { useTranslations } from "next-intl";

function ValidationSchema() {
  const t = useTranslations("ValidationSchema");

  return yup.object().shape({
    name: yup.string().min(3, "minValue").required(t("required")),
    phone: yup
      .string()
      .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, "Invalid phone number")
      .required(t("required")),
    vinCode: yup.string().required(t("required")),
  });
}

export default ValidationSchema;
