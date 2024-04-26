import PropTypes from "prop-types";
import styles from "./styles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const TextInput = ({
  footnote,
  label,
  placeholder,
  type = "text",
  required = false,
  name,
  autoFocus = false,
  value,
  readOnly,
  hint,
  handleInputChange,
  ...props
}) => {
  const handleChange = (e) => {
    if (type === "number" && !/^\d*\.?\d*$/.test(e.target?.value)) {
      // Ignore non-numeric or non-decimal input when type is "number"
      return;
    }
    if (type === "tel" && isNaN(Number(e.target.value))) {
      // Ignore non-numeric input when type is "number"
      return;
    }
    handleInputChange(e);
  };
  return (
    <div className={styles.formGroup}>
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <span className="input--required"></span>}
        </label>
      )}
      {footnote && (
        <div
          style={{ fontSize: "12px", color: "#4F9CBD" }}
          dangerouslySetInnerHTML={{ __html: footnote }}
        />
      )}
      <input
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        autoFocus={autoFocus}
        required={required}
        type={type}
        id={name}
        name={name}
        className={styles.input_field}
        readOnly={readOnly}
        {...props}
      />
      <span className="fs-6 text-[#667085]">{hint}</span>
    </div>
  );
};

// TextInput.propTypes = {
//   footnote: PropTypes.string,
//   label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
//   placeholder: PropTypes.string,
//   type: PropTypes.oneOf([
//     "text",
//     "email",
//     "number",
//     "tel",
//     "url",
//     "date",
//     "password",
//   ]),
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   autoFocus: PropTypes.bool,
//   handleInputChange: PropTypes.func,
//   readOnly: PropTypes.bool,
//   hint: PropTypes.string,
//   required: PropTypes.bool,
// };

// PropTypes validation
TextInput.propTypes = {
  footnote: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(["small", "regular"]),
  type: PropTypes.oneOf([
    "text",
    "email",
    "number",
    "tel",
    "url",
    "date",
    "password",
  ]),
  name: PropTypes.string.isRequired,
  value: PropTypes.string, // Remove isRequired
  autoFocus: PropTypes.bool,
  handleInputChange: PropTypes.func,
  readOnly: PropTypes.bool,
  hint: PropTypes.string,
};
