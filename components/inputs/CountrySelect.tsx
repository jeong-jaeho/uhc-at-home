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
  const options = [{ value: '08:30', label: 'AM' },{ value: '08:45', label: 'AM' },{ value: '09:00', label: 'AM' },{ value: '09:15', label: 'AM' },{ value: '09:30', label: 'AM' },{ value: '09:45', label: 'AM' },{ value: '10:00', label: 'AM' },{ value: '10:15', label: 'AM' },{ value: '10:30', label: 'AM' },{ value: '10:45', label: 'AM' },{ value: '11:00', label: 'AM' },{ value: '11:15', label: 'AM' },{ value: '11:30', label: 'AM' },{ value: '11:45', label: 'AM' },{ value: '1:30', label: 'PM' },{ value: '1:45', label: 'PM' },{ value: '2:00', label: 'PM' },{ value: '2:15', label: 'PM' },{ value: '2:30', label: 'PM' },{ value: '2:45', label: 'PM' },{ value: '3:00', label: 'PM' },{ value: '3:15', label: 'PM' },{ value: '3:30', label: 'PM' },{ value: '3:45', label: 'PM' },{ value: '4:00', label: 'PM' },{ value: '4:15', label: 'PM' },{ value: '4:30', label: 'PM' },{ value: '4:45', label: 'PM' },{ value: '5:00', label: 'PM' },{ value: '5:15', label: 'PM' }];

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
            <div>
              {option.value}
              <span className="text-neutral-500 ml-1">{option.label}</span>
            </div>
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
