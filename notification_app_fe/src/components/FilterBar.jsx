import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const FilterBar = ({
  filter,
  setFilter,
}) => {
  return (
    <FormControl
      fullWidth
      sx={{ mb: 3 }}
    >
      <InputLabel
        sx={{
          color: "white",
        }}
      >
        Notification Type
      </InputLabel>

      <Select
        value={filter}
        label="Notification Type"
        onChange={(e) => {
  setFilter(e.target.value);
}}
        sx={{
          color: "white",

          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },

          "&:hover .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "white",
            },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "white",
            },

          ".MuiSvgIcon-root": {
            color: "white",
          },
        }}
      >
        <MenuItem value="">
          All
        </MenuItem>

        <MenuItem value="Placement">
          Placement
        </MenuItem>

        <MenuItem value="Result">
          Result
        </MenuItem>

        <MenuItem value="Event">
          Event
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default FilterBar;