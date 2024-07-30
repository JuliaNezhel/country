export interface ErrorDataType {
  message: string
  status: number
}

export interface Root {
  altSpellings: string[]
  area: number
  capital: string[]
  capitalInfo: CapitalInfo
  car: Car
  cca2: string
  cca3: string
  ccn3: string
  coatOfArms: CoatOfArms
  continents: string[]
  currencies: Currencies
  demonyms: Demonyms
  flag: string
  flags: Flags
  idd: Idd
  independent: boolean
  landlocked: boolean
  languages: Languages
  latlng: number[]
  maps: Maps
  name: Name
  population: number
  region: string
  startOfWeek: string
  status: string
  timezones: string[]
  tld: string[]
  translations: Translations
  unMember: boolean
}

export interface Name {
  common: string
  nativeName: NativeName
  official: string
}

export interface NativeName {
  eng: Eng
}

export interface Eng {
  common: string
  official: string
}

export interface Currencies {
  SHP: Shp
}

export interface Shp {
  name: string
  symbol: string
}

export interface Idd {
  root: string
  suffixes: string[]
}

export interface Languages {
  eng: string
}

export interface Translations {
  ara: Ara
  bre: Bre
  ces: Ces
  cym: Cym
  deu: Deu
  est: Est
  fin: Fin
  fra: Fra
  hrv: Hrv
  hun: Hun
  ita: Ita
  jpn: Jpn
  kor: Kor
  nld: Nld
  per: Per
  pol: Pol
  por: Por
  rus: Rus
  slk: Slk
  spa: Spa
  srp: Srp
  swe: Swe
  tur: Tur
  urd: Urd
  zho: Zho
}

export interface Ara {
  common: string
  official: string
}

export interface Bre {
  common: string
  official: string
}

export interface Ces {
  common: string
  official: string
}

export interface Cym {
  common: string
  official: string
}

export interface Deu {
  common: string
  official: string
}

export interface Est {
  common: string
  official: string
}

export interface Fin {
  common: string
  official: string
}

export interface Fra {
  common: string
  official: string
}

export interface Hrv {
  common: string
  official: string
}

export interface Hun {
  common: string
  official: string
}

export interface Ita {
  common: string
  official: string
}

export interface Jpn {
  common: string
  official: string
}

export interface Kor {
  common: string
  official: string
}

export interface Nld {
  common: string
  official: string
}

export interface Per {
  common: string
  official: string
}

export interface Pol {
  common: string
  official: string
}

export interface Por {
  common: string
  official: string
}

export interface Rus {
  common: string
  official: string
}

export interface Slk {
  common: string
  official: string
}

export interface Spa {
  common: string
  official: string
}

export interface Srp {
  common: string
  official: string
}

export interface Swe {
  common: string
  official: string
}

export interface Tur {
  common: string
  official: string
}

export interface Urd {
  common: string
  official: string
}

export interface Zho {
  common: string
  official: string
}

export interface Demonyms {
  eng: Eng2
}

export interface Eng2 {
  f: string
  m: string
}

export interface Maps {
  googleMaps: string
  openStreetMaps: string
}

export interface Car {
  side: string
  signs: string[]
}

export interface Flags {
  alt?: string
  png: string
  svg: string
}

export interface CoatOfArms {}

export interface CapitalInfo {
  latlng: number[]
}
