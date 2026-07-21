/**
 * GoHighLevel field mapping for JRA Construction.
 *
 * TODO(JRA): the custom-field IDs below were inherited from the
 * bear-construction template (Location fifdlJb4VJ9ykoHVmSar). Before enabling
 * lead submission, re-verify every ID via GET /locations/:id/customFields
 * against the JRA sub-account and set GHL_PIT_TOKEN / GHL_LOCATION_ID in
 * wrangler.jsonc vars.
 *
 * STANDARD_FIELD_KEYS are written to native GHL contact fields and must NOT be
 * placed in the customFields array.
 *
 * ghlFieldMap maps every other `ghlFieldKey` used in the surveys (plus the
 * computed estimate keys) to a GHL CUSTOM FIELD ID.
 *
 * Estimate output fields → GHL merge tags:
 *   estimateLow   → {{contact.quote}}          (ID hOT1CpcZ4CLH5velp97n)
 *   estimateHigh  → {{contact.pricing_estimate}} (ID nzd3xOJbgGnarEccCc9J)
 *   estimateRange → {{contact.quote_range}}     (ID ZwwxhHBqtwsLTDsDkJa7)
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
 * GHL merge-tag field keys for every mapped field, verified live via
 * GET /locations/:id/customFields. Use these in GHL emails/SMS/workflows,
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
  finishLevel:        "{{contact.finish_level}}",
  budget:             "{{contact.your_proposed_budget_for_the_project}}",
  timeline:           "{{contact.e__when_to_start}}",
  ownerAuthorized:    "{{contact.e__legal_owner}}",
  designerSelected:   "{{contact.e__selected_designer__architect}}",
  completedPlans:     "{{contact.e__plans_completed}}",
  financing:          "{{contact.e__finance_in_place}}",
  livingDuringWorks:  "{{contact.e__while_my_bathroom_is_being_remodeled}}",

  // ---- Custom Home ----
  homeType:           "{{contact.e__i_live_in_a}}",
  landStatus:         "{{contact.land_status}}",
  bedrooms:           "{{contact.2_no_of_bedrooms}}",
  bathrooms:          "{{contact.6_number_of_bathrooms}}",
  livingAreas:        "{{contact.2_number_of_living_rooms}}",
  carSpaces:          "{{contact.car_spaces}}",

  // ---- Home Renovation ----
  renovationFocus:    "{{contact.e__the_purpose_of_this_project_is}}",
  wallsChange:        "{{contact.ereno__do_you_plan_to_add_or_remove_any_walls}}",
  windowsDoors:       "{{contact.ereno__planning_to_add_or_replace_any_windows_or_exterior_doors}}",

  // ---- Home Extension ----
  extensionType:      "{{contact.e__type_of_addition}}",
  spaceUse:           "{{contact.extension_space_use}}",
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
  servicesRelocate:   "{{contact.do_any_of_the_following_need_to_be_relocated}}",

  // ---- Bathroom Renovation ----
  bathroomType:       "{{contact.e__bathroom_estimate_for}}",
  renovationReason:   "{{contact.e__i_am_considering_a_remodel_because}}",
  bathroomCount:      "{{contact.e__the_number_of_bathrooms_i_am_looking_to_remodel_is}}",
  improvements:       "{{contact.e__the_improvement_i_am_looking_for_is}}",
  layoutPreference:   "{{contact.e__the_approximate_size_of_my_bathroom_is}}",
  manageDuringReno:   "{{contact.e__while_my_bathroom_is_being_remodeled}}",
  professionalDesigns:"{{contact.has_professional_designs}}",

  // ---- Computed / meta ----
  projectType:        "{{contact.project_type}}",
  estimateLow:        "{{contact.quote}}",
  estimateHigh:       "{{contact.pricing_estimate}}",
  estimateRange:      "{{contact.quote_range}}",

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

export const ghlFieldMap: Record<string, string> = {
  // ---- Shared across surveys ----
  size:               "SqlNmIBr6kTJq16B02t9",  // E - Square Footage / meters - number input
  finishLevel:        "1QNXmbNuRTvr4wF2LBsN",  // Finish Level
  budget:             "yuXtEtcC1NGjTcHRKpwf",  // Your proposed budget for the project?
  timeline:           "3IqpfcAV3cllxa77UISa",  // When would you like to get started?
  ownerAuthorized:    "1a6QTc62IWajYGJGZKLp",  // E - Legal Owner
  designerSelected:   "n6wIH5TnmBu5gcLPSv0E",  // E - Selected Designer / Architect
  completedPlans:     "tcXcJ3CGnwQhSJGstrjz",  // E - Plans completed
  financing:          "7N4oMyPEu6gvdZ1nav8N",  // E - Finance in Place
  livingDuringWorks:  "1XA6BiDIQu880TiejKxh",  // E - B - While my bathroom is being remodeled (shared)

  // ---- Custom Home ----
  homeType:           "yl71XdgrWgPo8xNy36sd",  // E - I live in a:
  landStatus:         "EiFctbFuGFTQsmfdoPEv",  // Land Status
  bedrooms:           "jJtzXG6qrMcdHoSs5Afk",  // E - No. Of Bedrooms
  bathrooms:          "DWOyMwX7DpACQXsxHfn1",  // E - Number Of Bathrooms
  livingAreas:        "RsTvf2FwmFYDWa8OVA6L",  // E - Number Of Living Rooms
  carSpaces:          "QRSYgf1LzDFnHLfUiEwh",  // Car Spaces

  // ---- Home Renovation ----
  renovationFocus:    "P2Hl3gfZchIEw3zxfXJK",  // E - The purpose of this project is:
  wallsChange:        "PBXmLN2tT8NJa5njxiha",  // e-Reno - Do you plan to add or remove any walls?
  windowsDoors:       "reDUrcefk07AiCzPsQWX",  // e-Reno - Planning to add or replace any windows or exterior doors?

  // ---- Home Extension ----
  extensionType:      "fER4LHWS1CiXNgTD0kmP",  // E - Type of addition
  spaceUse:           "nF77cPPDkcBIbKN9lJZ2",  // Extension Space Use
  bathroomIncluded:   "vbDJmJ1D2RwLNL4XTwUQ",  // E - Addition Include Bathroom
  kitchenIncluded:    "IUHBl3SC98V1tCDHSzSC",  // E - Addition Kitchen Included

  // ---- Kitchen Renovation ----
  kitchenScope:       "4YdSJdy0p1LPTOx6F3NJ",  // E - K - The size of my kitchen is:
  kitchenLayout:      "B4btWZDYCQ283qh6LLcn",  // E - K - The shape of my kitchen is:
  kitchenIsland:      "XFjBoocnU0joG3YEJelE",  // E - K - I have an island
  areasToUpdate:      "SVWMRLWpm6trLPCOLGyB",  // E - K - I would like to update
  countertopMaterial: "Ou1yp0sZ06RlNJiSbwBm",  // E - K - Countertop Material I'm Looking For:
  splashbackMaterial: "aZZTnbE5T2QJXMsFojrZ",  // E - K - Splashback
  flooringMaterial:   "ka8gNJOQps0LQx9j0hYb",  // E - K - Floor Material
  servicesRelocate:   "8thFrkkN2zY850q85hB4",  // Do any of the following need to be relocated?

  // ---- Bathroom Renovation ----
  bathroomType:       "LzfKD3e8m0Ri99lNZcsr",  // E - B - Bathroom Estimate For
  renovationReason:   "nAcBFjcE4JHwes5rT3h5",  // E - B - I am considering a remodel because:
  bathroomCount:      "V1oJJMsNM9UGDGF4VknO",  // E - B - Number of bathrooms - New
  improvements:       "blDVXpDalQK66GDB01Ob",  // E - B - The improvement I am looking for is:
  layoutPreference:   "UICKwaWqEABY2Snb4Pz0",  // E - B - The approximate size of my bathroom is:
  manageDuringReno:   "1XA6BiDIQu880TiejKxh",  // E - B - While my bathroom is being remodeled:
  professionalDesigns:"m53IbZ4vdsJse9Svuhul",  // Has Professional Designs

  // ---- Computed / meta ----
  projectType:        "1DlQfMBMgOpmzptsa5XD",  // {{contact.project_type}}       — Project Type
  estimateLow:        "hOT1CpcZ4CLH5velp97n",  // {{contact.quote}}               — Quote (low number)
  estimateHigh:       "nzd3xOJbgGnarEccCc9J",  // {{contact.pricing_estimate}}    — Pricing Estimate (high number)
  estimateRange:      "ZwwxhHBqtwsLTDsDkJa7",  // {{contact.quote_range}}         — Quote Range (formatted "$X - $Y")

  // ---- Attribution / tracking (auto-captured from URL & referrer) ----
  utmSource:          "Bx7CzZUtwMRcUQY5b1uo",  // {{contact.utm_source}}
  utmCampaign:        "Edk1N2rjAg9BGEGSxTvz",  // {{contact.utm_campaign}}
  utmKeyword:         "G8foaHSNjbK5PNIcJYAw",  // {{contact.utm_keyword}}
  utmContent:         "QKp1k1ImdT3ks3byYKp0",  // {{contact.utm_content}}
  utmMatchType:       "k1vJkeEIDQF8m3WjZsUH",  // {{contact.utm_match_type}}
  gclid:              "t310DRlCumlaczKba5Hi",  // {{contact.google_click_identifier_gclid}}
  fbClickId:          "J9RrnTbEWQxW68jETxJR",  // {{contact.fb_click_id}}
  sessionSource:      "GrJUuXcPCVeQabLiCsGe",  // {{contact.session_source}}
  sourceUrl:          "U7AIIpeYliXzFoguHcGg",  // {{contact.source_url}}
};
