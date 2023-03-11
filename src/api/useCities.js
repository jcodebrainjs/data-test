import { create } from "zustand";

const lastCity = localStorage.getItem("lastCity");
export const useCities = create()((set) => ({
  cities: [],
  selectedCity: {},
  setCities: (newCities) => {
    return set({
      cities: newCities,
      selectedCity:
        newCities.find((city) => city.city === lastCity) || newCities[0],
    });
  },
  setSelectedCity: (selectedCity) => {
    localStorage.setItem("lastCity", selectedCity.city);
    return set({ selectedCity });
  },
}));
