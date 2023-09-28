import { useState } from "react";
import "./SearchInput.css";

export function SearchInput({ onSearch }) {
  const [isValidInput, setValidInput] = useState(true);

  const validateInput = (value) => {
    const alphanumericRegex = /^[a-zA-Z0-9*]+$/;
    return alphanumericRegex.test(value);
  };

  function handleSearch(event) {
    const searchKey = event.target?.value;

    if (searchKey) {
      const isValidInput = validateInput(searchKey);
      setValidInput(isValidInput);

      if (isValidInput) onSearch(searchKey, isValidInput);
    }
  }

  return (
    <section>
      <input
        className={!isValidInput ? "input--error" : ""}
        type="text"
        placeholder="Search a card..."
        onChange={handleSearch}
      />
      {!isValidInput && (
        <p className="invalid-feedback">
          Only letters and numbers are allowed.
        </p>
      )}
    </section>
  );
}
