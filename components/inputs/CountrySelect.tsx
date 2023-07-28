"use client";

import Select from "react-select";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const options = [
    { value: "08:30", label: "AM" },
    { value: "08:45", label: "AM" },
    { value: "09:00", label: "AM" },
    { value: "09:15", label: "AM" },
    { value: "09:30", label: "AM" },
    { value: "09:45", label: "AM" },
    { value: "10:00", label: "AM" },
    { value: "10:15", label: "AM" },
    { value: "10:30", label: "AM" },
    { value: "10:45", label: "AM" },
    { value: "11:00", label: "AM" },
    { value: "11:15", label: "AM" },
    { value: "11:30", label: "AM" },
    { value: "11:45", label: "AM" },
    { value: "13:30", label: "PM" },
    { value: "13:45", label: "PM" },
    { value: "14:00", label: "PM" },
    { value: "14:15", label: "PM" },
    { value: "14:30", label: "PM" },
    { value: "14:45", label: "PM" },
    { value: "15:00", label: "PM" },
    { value: "15:15", label: "PM" },
    { value: "15:30", label: "PM" },
    { value: "15:45", label: "PM" },
    { value: "16:00", label: "PM" },
    { value: "16:15", label: "PM" },
    { value: "16:30", label: "PM" },
    { value: "16:45", label: "PM" },
    { value: "17:00", label: "PM" },
    { value: "17:15", label: "PM" },
  ];

  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={options}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div
            className="
          flex flex-row items-center gap-3"
          >
            <div>{option.value}</div>
          </div>
        )}
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  );
};

export default CountrySelect;
