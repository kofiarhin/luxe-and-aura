import { createSlice } from "../../lib/reduxToolkit.js";
import { createSelector } from "reselect";

const initialState = {
  data: null,
};

const defaultHero = {
  videoUrl: "",
  headline: "",
  subheadline: "",
  ctaText: "",
  ctaTarget: "#",
};

const defaultMeta = {
  brand: "",
  tagline: "",
};

const defaultContactDetails = {
  address: "",
  phone: "",
  email: "",
  hours: [],
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setContent: (state, action) => {
      state.data = action.payload;
    },
    clearContent: (state) => {
      state.data = null;
    },
  },
});

export const { setContent, clearContent } = contentSlice.actions;

export const selectContent = (state) => state.content.data;

export const selectNavigation = createSelector(
  [selectContent],
  (content) => content?.navigation ?? []
);

export const selectMeta = createSelector([selectContent], (content) => ({
  ...defaultMeta,
  ...(content?.meta ?? {}),
}));

export const selectHomeContent = createSelector([selectContent], (content) => {
  const home = content?.home;
  return {
    hero: { ...defaultHero, ...(home?.hero ?? {}) },
    highlights: home?.highlights ?? [],
    testimonials: home?.testimonials ?? [],
  };
});

export const selectServicesContent = createSelector(
  [selectContent],
  (content) => {
    const services = content?.services;
    return {
      intro: services?.intro ?? "",
      list: services?.list ?? [],
    };
  }
);

export const selectGalleryContent = createSelector(
  [selectContent],
  (content) => {
    const gallery = content?.gallery;
    return {
      intro: gallery?.intro ?? "",
      items: gallery?.items ?? [],
    };
  }
);

export const selectContactContent = createSelector(
  [selectContent],
  (content) => {
    const contact = content?.contact;
    return {
      intro: contact?.intro ?? "",
      details: { ...defaultContactDetails, ...(contact?.details ?? {}) },
    };
  }
);

export default contentSlice.reducer;
