import { PhoneInput } from "react-international-phone";
import { useField } from "formik";
import "react-international-phone/style.css";

const PhoneInputField = ({ ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  return (
    <PhoneInput
      {...props}
      {...field}
      {...meta}
      // inputProps={...field}
      value={field.value}
      defaultCountry="ua"
      onChange={(value) => {
        helpers.setValue(value);
      }}
    />
  );
};

export default PhoneInputField;
