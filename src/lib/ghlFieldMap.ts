/**
 * GoHighLevel field mapping for JRA Construction.
 * Location: J3MyzsoPYhafh3FWfabM
 *
 * Field IDs verified live via GET /locations/J3MyzsoPYhafh3FWfabM/customFields
 * on 2026-07-23.
 *
 * STANDARD_FIELD_KEYS are written to native GHL contact fields and must NOT be
 * placed in the customFields array.
 *
 * ghlFieldMap maps every other `ghlFieldKey` used in the surveys (plus the
 * computed estimate keys) to a GHL CUSTOM FIELD ID.
 *
 * Estimate output fields → GHL merge tags:
 *   estimateLow   → {{contact.quote}}            (ID 7Lr7C4R5mnfpOUK3rYnn)
 *   estimateHigh  → {{contact.pricing_estimate}}  (ID 2PmFny9KSunphGtnWop6)
 *   estimateRange → {{contact.total_quote}}       (ID uSmI7OZqkNLcwxDySD3b)
 */

export const STANDARD_FIELD_KEYS = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "address1",
  "city",
  "state",
  "country",
  "postalCode",
] as const;

export type StandardFieldKey = (typeof STANDARD_FIELD_KEYS)[number];

export function isStandardFieldKey(key: string): key is StandardFieldKey {
  return (STANDARD_FIELD_KEYS as readonly string[]).includes(key);
}

/**
 * GHL merge-tag field keys for every mapped field, verified live against
 * JRA's sub-account. Use in GHL emails/SMS/workflows,
 * e.g. {{contact.quote}} prints the low estimate.
 */
export const ghlFieldKeys: Record<string, string> = {
  // ---- Standard (native) fields ----
  firstName:          "{{contact.first_name}}",
  lastName:           "{{contact.last_name}}",
  email:              "{{contact.email}}",
  phone:              "{{contact.phone}}",
  address1:           "{{contact.address1}}",
  city:               "{{contact.city}}",
  state:              "{{contact.state}}",
  country:            "{{contact.country}}",
  postalCode:         "{{contact.postal_code}}",

  // ---- Shared across surveys ----
  size:               "{{contact.square_footage}}",
  finishLevel:        "{{contact.finish_quality}}",
  budget:             "{{contact.budget}}",
  timeline:           "{{contact.e__when_to_start}}",
  ownerAuthorized:    "{{contact.e__legal_owner}}",
  designerSelected:   "{{contact.e__selected_designer__architect}}",
  completedPlans:     "{{contact.e__plans_completed}}",
  financing:          "{{contact.e__finance_in_place}}",
  livingDuringWorks:  "{{contact.e__while_my_bathroom_is_being_remodeled}}",

  // ---- Custom Home ----
  homeType:           "{{contact.e__i_live_in_a}}",
  landStatus:         "{{contact.has_land}}",
  bedrooms:           "{{contact.2_no_of_bedrooms}}",
  bathrooms:          "{{contact.6_number_of_bathrooms}}",
  livingAreas:        "{{contact.2_number_of_living_rooms}}",
  carSpaces:          "{{contact.5_garage__of_cars}}",

  // ---- Home Renovation ----
  renovationFocus:    "{{contact.e__the_purpose_of_this_project_is}}",
  wallsChange:        "{{contact.ereno__do_you_plan_to_add_or_remove_any_walls}}",
  windowsDoors:       "{{contact.ereno__planning_to_add_or_replace_any_windows_or_exterior_doors}}",

  // ---- Home Extension ----
  extensionType:      "{{contact.e__type_of_addition}}",
  spaceUse:           "{{contact.living_spaces}}",
  bathroomIncluded:   "{{contact.e__addition_include_bathroom}}",
  kitchenIncluded:    "{{contact.e__addition_kitchen_included}}",

  // ---- Kitchen Renovation ----
  kitchenScope:       "{{contact.e__the_size_of_my_kitchen_is}}",
  kitchenLayout:      "{{contact.e__the_shape_of_my_kitchen_is}}",
  kitchenIsland:      "{{contact.e__i_have_an_island}}",
  areasToUpdate:      "{{contact.e__k__i_would_like_to_update}}",
  countertopMaterial: "{{contact.countertop_material_im_looking_for}}",
  splashbackMaterial: "{{contact.e__splashback}}",
  flooringMaterial:   "{{contact.e__floor_material}}",
  servicesRelocate:   "{{contact.e__plumbing_needed}}",

  // ---- Bathroom Renovation ----
  bathroomType:       "{{contact.e__type_of_bathroom_renovation}}",
  renovationReason:   "{{contact.e__i_am_considering_a_remodel_because}}",
  bathroomCount:      "{{contact.e__the_number_of_bathrooms_i_am_looking_to_remodel_is}}",
  improvements:       "{{contact.e__the_improvement_i_am_looking_for_is}}",
  layoutPreference:   "{{contact.e__the_approximate_size_of_my_bathroom_is}}",
  manageDuringReno:   "{{contact.e__while_my_bathroom_is_being_remodeled}}",
  professionalDesigns:"{{contact.has_professional_designs}}",  // verified

  // ---- Computed / meta ----
  projectType:        "{{contact.project_type}}",
  estimateLow:        "{{contact.quote}}",
  estimateHigh:       "{{contact.pricing_estimate}}",
  estimateRange:      "{{contact.total_quote}}",

  // ---- Attribution / tracking (auto-captured from URL & referrer) ----
  utmSource:          "{{contact.utm_source}}",
  utmCampaign:        "{{contact.utm_campaign}}",
  utmKeyword:         "{{contact.utm_keyword}}",
  utmContent:         "{{contact.utm_content}}",
  utmMatchType:       "{{contact.utm_match_type}}",
  gclid:              "{{contact.google_click_identifier_gclid}}",
  fbClickId:          "{{contact.fb_click_id}}",
  sessionSource:      "{{contact.session_source}}",
  sourceUrl:          "{{contact.source_url}}",
};

/**
 * Custom field ID map — verified against JRA GHL location J3MyzsoPYhafh3FWfabM
 * via GET /locations/:id/customFields on 2026-07-23.
 */
export const ghlFieldMap: Record<string, string> = {
  // ---- Shared across surveys ----
  size:               "FMPE4HedgXPiHtlncmax",  // E - Square Footage / meters - number input
  finishLevel:        "jtBS02bLQ3CUkseSNZ1d",  // Finish Quality
  budget:             "1IKjDFhZarBd3Cht5kAn",  // Budget
  timeline:           "dUHtaDKfh1sM82MQkq5A",  // E - When to start
  ownerAuthorized:    "QUB3Vi0OLADYH7SOne69",  // E - Legal Owner
  designerSelected:   "s40cevO0sZ6yArheptx9",  // E - Selected Designer / Architect
  completedPlans:     "xGATxA8aoEJqZwJfGATe",  // E - Plans completed
  financing:          "7F6btd5VVX8iwDZMBP8b",  // E - Finance in Place
  livingDuringWorks:  "BEjTmeuvagH63JcFIhUC",  // E - While my bathroom is being remodeled

  // ---- Custom Home ----
  homeType:           "tPsLngwdrdUOPMxVZPLm",  // E - I live in a:
  landStatus:         "taw9svKWNx2I0YoMyEJ0",  // Has Land
  bedrooms:           "4xwKxAt2u3jsx9zVZkcL",  // E - No. Of Bedrooms
  bathrooms:          "5SWgz90mhnIhaSsMi9Ov",  // E - Number Of Bathrooms
  livingAreas:        "GSoWojEwvvX2CtFDAaSK",  // E - Number Of Living Rooms
  carSpaces:          "YEwCYvD0zk0AbGy5s8SK",  // E - Garage # of cars

  // ---- Home Renovation ----
  renovationFocus:    "oe36T9GRVLuhqbtGYoUG",  // E - The purpose of this project is:
  wallsChange:        "o4vdK4Lt8t2l5uHXoL3r",  // e-Reno - Do you plan to add or remove any walls?
  windowsDoors:       "MkzXYY9lzUVtSQuk7Qyp",  // e-Reno - Planning to add or replace any windows or exterior doors?

  // ---- Home Extension ----
  extensionType:      "thFPmVBJOWfWIDkgQzh8",  // E - Type of addition
  spaceUse:           "CDI3BJJ1Mj248V0Bswa0",  // Living Spaces (extension space use)
  bathroomIncluded:   "AZbGVPlnEVWXOvtYKVuM",  // E - Addition Include Bathroom
  kitchenIncluded:    "d3eNHPWSXKiOP5SZpqFa",  // E - Addition Kitchen Included

  // ---- Kitchen Renovation ----
  kitchenScope:       "Tzc6gDzF0cCMjNpUnex6",  // E - The size of my kitchen is:
  kitchenLayout:      "zjcRKPIKEiPQKTKv7ruU",  // E - The shape of my kitchen is:
  kitchenIsland:      "otmcZ9flt7I9rGhyCs5m",  // E - I have an island:
  areasToUpdate:      "dsN3zc5L5LGis439BXff",  // E - K - I would like to update
  countertopMaterial: "i5UJNsrafVug60ou8QGC",  // E - Countertop Material I'm Looking For:
  splashbackMaterial: "2BKxiu2jiWEfuwedfNjU",  // E - Splashback
  flooringMaterial:   "nVOxr2OAtJWXwpcoCw5M",  // E - Floor Material
  servicesRelocate:   "zQKiVlvc77LhAJCHLfK6",  // E - Plumbing Needed (closest available)

  // ---- Bathroom Renovation ----
  bathroomType:       "ovZUaUF8JDDdriU82rsa",  // E - Type of Bathroom Renovation
  renovationReason:   "GHSfv6hMXx6pwimkxUP5",  // E - I am considering a remodel because:
  bathroomCount:      "mjlLwzmzRTuE5qX97iQQ",  // E - Number of bathrooms - New
  improvements:       "waWZFG7qWkuCvdnZ9BX8",  // E - The improvement I am looking for is:
  layoutPreference:   "DiuOaSOVIcJ2QwTV0hfJ",  // E - The approximate size of my bathroom is:
  manageDuringReno:   "BEjTmeuvagH63JcFIhUC",  // E - While my bathroom is being remodeled:
  professionalDesigns:"uzIUoWwpP9dwnma6AL0S",  // {{contact.has_professional_designs}}

  // ---- Computed / meta ----
  projectType:        "oC76sZvvGf6hmqbPNh1G",  // {{contact.project_type}}
  estimateLow:        "7Lr7C4R5mnfpOUK3rYnn",  // {{contact.quote}}          — Quote (low)
  estimateHigh:       "2PmFny9KSunphGtnWop6",  // {{contact.pricing_estimate}} — Pricing Estimate (high)
  estimateRange:      "uSmI7OZqkNLcwxDySD3b",  // {{contact.total_quote}}    — Total Quote (formatted range)

  // ---- Attribution / tracking ----
  utmSource:          "nJH91kDI7QCTEDXoUrdm",  // {{contact.utm_source}}
  utmCampaign:        "j8YAkoVEtHQO8QhHgJqi",  // {{contact.utm_campaign}}
  utmKeyword:         "eTQsPIIzkk9lj8TT68LX",  // {{contact.utm_keyword}}
  utmContent:         "SHOdkeYrUKQr5JSWFoL9",  // {{contact.utm_content}}
  utmMatchType:       "PE78EbUihD1ldQ9URheP",  // {{contact.utm_match_type}}
  gclid:              "H2wcY5fVyZYo4fVjR5Ql",  // {{contact.google_click_identifier_gclid}}
  fbClickId:          "dOtvZcqgITSsDE59LLv1",  // {{contact.fb_click_id}}
  sessionSource:      "5LumFIeRnI6Os4ALHmty",  // {{contact.session_source}}
  sourceUrl:          "hWUDP7VwLERgMNMO4s8Z",  // {{contact.source_url}}
};
