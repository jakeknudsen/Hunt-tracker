import React from 'react';
import styles from './form.module.css';

const DropDown = ({ options, placeholder, onChange, value }) => {
  return (
<>
  <select
    id="dropdown"
    className={styles.select}
    value={value}
    onChange={(e) => {
      onChange(e);
    }}
  >
    <option value="" disabled hidden>{placeholder}</option>
    {options.map((item) => {
      return (
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      );
    })}
  </select>
</>
  );
};

export default DropDown;
