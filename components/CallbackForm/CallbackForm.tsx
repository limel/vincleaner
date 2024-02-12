"use client";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

function CallbackForm({ vin, t }: { vin?: boolean; t: (key: string) => string }) {
  const [phone, setPhone] = useState(undefined);

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        messanger: "",
        vinCode: "",
        message: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <fieldset>
          <legend className="lg:text-3xl text-xl pr-8 mb-8 font-bold relative pb-1.5 decor-line after:w-[123px] before:w-[240px] lg:before:w-[380px] ">
            {t("title")}
          </legend>
          <Field name="name" placeholder={t("namePlaceholder")} className="input" />
          <Field>
            {() => (
              <PhoneInput
                placeholder="(__)-___-__-__"
                defaultCountry="ua"
                value={phone}
                className="input"
                onChange={() => {
                  setPhone(phone);
                }}
              />
            )}
          </Field>
          <span className="lg:text-xl text-base font-semibold mb-4">{t("messangersCaption")}</span>
          <div role="group" aria-labelledby="messanger" className="mb-8 flex gap-4 items-center">
            <label className="radio">
              <Field type="radio" name="messanger" value="telegram" className="hidden" />
              <span className="radio__mark"></span>
              <span className="ml-1">Telegram</span>
            </label>
            <label className="flex items-center radio">
              <Field type="radio" name="messanger" value="whatsapp" className="hidden" />
              <span className="radio__mark"></span>
              <span className="ml-1">WhatsApp</span>
            </label>
            <label className="radio">
              <Field type="radio" name="messanger" value="viber" className="hidden" />
              <span className="radio__mark"></span>
              <span className="ml-1">Viber</span>
            </label>
          </div>
          {vin && <Field name="vinCode" placeholder={t("vinPlaceholder")} className="input" />}
          <Field name="message" placeholder={t("messagePlaceholder")} className="input resize-none" as={"textarea"} />
        </fieldset>
        <button className="button rounded-sm mx-auto" type="submit">
          {t("button")}
        </button>
      </Form>
    </Formik>
  );
}

export default CallbackForm;
