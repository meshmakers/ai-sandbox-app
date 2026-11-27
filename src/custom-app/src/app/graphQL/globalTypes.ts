export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  Byte: { input: any; output: any; }
  /** A construction kit version. */
  CkVersion: { input: any; output: any; }
  /** The `DateTime` scalar type represents a date and time. `DateTime` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTime: { input: any; output: any; }
  /** The `DateTimeOffset` scalar type represents a date, time and offset from UTC. `DateTimeOffset` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTimeOffset: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  LargeBinary: { input: any; output: any; }
  Long: { input: any; output: any; }
  /** A unique identifier for an runtime object. */
  OctoObjectId: { input: string; output: string; }
  /** A runtime construction kit id of CkAssociationRoleId. */
  RtCkAssociationRoleId: { input: string; output: string; }
  /** A runtime construction kit id of CkEnumId. */
  RtCkEnumId: { input: string; output: string; }
  /** A runtime construction kit id of CkRecordId. */
  RtCkRecordId: { input: string; output: string; }
  /** A runtime construction kit id of CkTypeId. */
  RtCkTypeId: { input: string; output: string; }
  /** The `Seconds` scalar type represents a period of time represented as the total number of seconds in range [-922337203685, 922337203685]. */
  Seconds: { input: any; output: any; }
  SimpleScalar: { input: any; output: any; }
  ULong: { input: any; output: any; }
  Uri: { input: any; output: any; }
};

/** Defines the type of aggregation for runtime queries. */
export type AggregationInputTypes =
  | 'AVERAGE'
  | 'COUNT'
  | 'MAXIMUM'
  | 'MINIMUM'
  | 'SUM';

/** Defines the aggregation type */
export type AggregationType =
  | 'AVG'
  | 'COUNT'
  | 'INTEGRAL'
  | 'MAX'
  | 'MIN'
  | 'STATE_DURATION'
  | 'SUM'
  | 'TIME_WEIGHTED_AVG';

/** Defines the type of aggregation for runtime query results. */
export type AggregationTypes =
  | 'AVERAGE'
  | 'COUNT'
  | 'INTEGRAL'
  | 'MAXIMUM'
  | 'MINIMUM'
  | 'NONE'
  | 'STATE_DURATION'
  | 'SUM'
  | 'TIME_WEIGHTED_AVERAGE';

/** Attribute path to capture as a CrateDB column on the archive table, plus index/required flags. */
export type ArchiveColumnSpecInput = {
  /** When true (default), CrateDB indexes the column by its standard rules. False emits INDEX OFF. */
  indexed: Scalars['Boolean']['input'];
  /** Attribute path on the target CK type (e.g. 'energyConsumed', 'sensor.reading.value'). */
  path: Scalars['String']['input'];
  /** When true, every insert must supply a non-null value for this path. */
  required: Scalars['Boolean']['input'];
};

/** Backend-agnostic health classification: Unknown / Good / Warning / Critical. */
export type ArchiveStorageHealth =
  | 'CRITICAL'
  | 'GOOD'
  | 'UNKNOWN'
  | 'WARNING';

/** Defines the type of modification during write operations */
export type AssociationModOptions =
  | 'CREATE'
  | 'DELETE';

/** Who owns an attribute value, and therefore what installing the blueprint again does to it (AB#5187). SEED_OWNED: the blueprint owns the value - re-applying the blueprint OVERWRITES whatever the tenant has, and the value is carried in an exported runtime model. TENANT_OWNED: the tenant owns the value - re-applying the blueprint KEEPS the tenant's value and only seeds it on a fresh tenant, and the value IS still carried in an exported runtime model. RUNTIME_STATE: a service, operator, pipeline or job writes the value - re-applying the blueprint KEEPS it, and it is NOT carried in an exported runtime model. SECRET: a credential such as an API key, client secret, token or password - re-applying the blueprint KEEPS it, and it is NOT carried in an exported runtime model. */
export type AttributeOwnership =
  | 'RUNTIME_STATE'
  | 'SECRET'
  | 'SEED_OWNED'
  | 'TENANT_OWNED';

/** Enum of valid attribute types */
export type AttributeValueType =
  | 'BINARY'
  | 'BINARY_LINKED'
  | 'BOOLEAN'
  | 'DATE_TIME'
  | 'DATE_TIME_OFFSET'
  | 'DOUBLE'
  | 'ENUM'
  | 'GEOSPATIAL_POINT'
  | 'INT'
  | 'INTEGER'
  | 'INTEGER_64'
  | 'INTEGER_ARRAY'
  | 'INT_64'
  | 'INT_ARRAY'
  | 'RECORD'
  | 'RECORD_ARRAY'
  | 'SECRET'
  | 'STRING'
  | 'STRING_ARRAY'
  | 'TIME_SPAN';

export type BasicAddressInput = {
  addressOfAdditionalLink?: InputMaybe<Scalars['String']['input']>;
  addressRemarks?: InputMaybe<Array<Scalars['String']['input']>>;
  cityTown?: InputMaybe<Scalars['String']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  eMail?: InputMaybe<BasicEMailInput>;
  fax?: InputMaybe<BasicFaxNumberInput>;
  nationalCode?: InputMaybe<Scalars['String']['input']>;
  pOBox?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<BasicPhoneNumberInput>;
  stateCounty?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  vATnumber?: InputMaybe<Scalars['String']['input']>;
  zipOfPOBox?: InputMaybe<Scalars['String']['input']>;
  zipcode?: InputMaybe<Scalars['Int']['input']>;
};

export type BasicAmountInput = {
  unit?: InputMaybe<BasicUnitOfMeasure>;
  value?: InputMaybe<Scalars['Decimal']['input']>;
};

export type BasicAssetInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type BasicAssetInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: BasicAssetInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type BasicBankAccountInput = {
  accountHolder?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  swiftCode?: InputMaybe<Scalars['String']['input']>;
};

export type BasicCityInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  zipcode?: InputMaybe<Scalars['Int']['input']>;
};

export type BasicCityInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: BasicCityInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type BasicContactInput = {
  address?: InputMaybe<BasicAddressInput>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyRegisterNumber?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  legalEntityType?: InputMaybe<BasicLegalEntityType>;
  salutation?: InputMaybe<BasicSalutation>;
  taxIdentificationNumber?: InputMaybe<Scalars['String']['input']>;
  titlePrefix?: InputMaybe<Scalars['String']['input']>;
  titleSuffix?: InputMaybe<Scalars['String']['input']>;
};

export type BasicCountryInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type BasicCountryInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: BasicCountryInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type BasicDistrictInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type BasicDistrictInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: BasicDistrictInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type BasicEMailInput = {
  eMail?: InputMaybe<Scalars['String']['input']>;
  publicKey?: InputMaybe<Scalars['String']['input']>;
  typeOfEMail?: InputMaybe<BasicTypeOfTelephoneBasic>;
  typeOfPublicKey?: InputMaybe<Scalars['String']['input']>;
};

export type BasicEmployeeInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  employeeExternalId?: InputMaybe<Scalars['String']['input']>;
  employeeId?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  partialFeedbacks?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  shiftMachines?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  shiftOrderItems?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type BasicEmployeeInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: BasicEmployeeInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'Basic.Energy/CarrierType' */
export type BasicEnergyCarrierType =
  /** Electricity is used as energy carrier */
  | 'ELECTRICITY'
  /** Gas is used as energy carrier */
  | 'GAS'
  /** The carrier type is unknown */
  | 'UNKNOWN';

export type BasicEnergyConsentPeriodInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  consentId?: InputMaybe<Scalars['String']['input']>;
  edaProcess?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  emailSent?: InputMaybe<Scalars['Boolean']['input']>;
  emailSentSuccess?: InputMaybe<Scalars['Boolean']['input']>;
  from?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  meteringPoint?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  to?: InputMaybe<Scalars['DateTime']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
};

export type BasicEnergyConsentPeriodInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: BasicEnergyConsentPeriodInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type BasicEnergyConsumerInput = {
  billings?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  carrierType?: InputMaybe<BasicEnergyCarrierType>;
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  consentId?: InputMaybe<Scalars['String']['input']>;
  consents?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  meteringPointNumber?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notificationContactEmail?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  periods?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<BasicEnergyState>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type BasicEnergyConsumerInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: BasicEnergyConsumerInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'Basic.Energy/DataQuality' */
export type BasicEnergyDataQuality =
  /** The data is accurate to 15 minute meter readings */
  | 'L_1'
  /** The data is a linear interpolation of 2 known meter readings */
  | 'L_2'
  /** The data is an estimate */
  | 'L_3'
  /** The value was entered or corrected manually by a user */
  | 'MANUAL'
  /** The data quality is unknown */
  | 'UNKNOWN';

export type BasicEnergyEdaMessageInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  conversationId?: InputMaybe<Scalars['String']['input']>;
  creationDate?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  messageId?: InputMaybe<Scalars['String']['input']>;
  messageType?: InputMaybe<Scalars['String']['input']>;
  meteringPoint?: InputMaybe<Scalars['String']['input']>;
  process?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  processed?: InputMaybe<Scalars['Boolean']['input']>;
  rawMessage?: InputMaybe<Scalars['String']['input']>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type BasicEnergyEdaMessageInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: BasicEnergyEdaMessageInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type BasicEnergyEdaMeteringPointInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  consentId?: InputMaybe<Scalars['String']['input']>;
  isProducer?: InputMaybe<Scalars['Boolean']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  meteringPointNumber?: InputMaybe<Scalars['String']['input']>;
  partitionFactor?: InputMaybe<Scalars['Int']['input']>;
  productionType?: InputMaybe<BasicEnergyProductionType>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type BasicEnergyEdaMeteringPointInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: BasicEnergyEdaMeteringPointInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type BasicEnergyEdaProcessInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  consent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  conversationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  finished?: InputMaybe<Scalars['Boolean']['input']>;
  info?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  messages?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  meteringPointNumber?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  planned?: InputMaybe<Scalars['Boolean']['input']>;
  processData?: InputMaybe<Scalars['String']['input']>;
  rawMessage?: InputMaybe<Scalars['String']['input']>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  responseCode?: InputMaybe<Scalars['String']['input']>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  success?: InputMaybe<Scalars['Boolean']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type BasicEnergyEdaProcessInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: BasicEnergyEdaProcessInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type BasicEnergyEnergyMeasurementInput = {
  amount?: InputMaybe<BasicAmountInput>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  dataQuality?: InputMaybe<BasicEnergyDataQuality>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  obisCode?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  sourceDocumentDate?: InputMaybe<Scalars['DateTime']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  timeRange?: InputMaybe<BasicTimeRangeInput>;
};

export type BasicEnergyEnergyMeasurementInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: BasicEnergyEnergyMeasurementInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'Basic.Energy/FacilityType' */
export type BasicEnergyFacilityType =
  /** The facility type is a business */
  | 'BUSINESS'
  /** The facility type is a single household */
  | 'HOUSEHOLD'
  /** The facility type is a industry */
  | 'INDUSTRY'
  /** The facility type is a public building e.g. schools, public offices */
  | 'PUBLIC_BUILDING'
  /** The facility type is an energy storage */
  | 'STORAGE'
  /** The facility type is unknown or not defined */
  | 'UNKNOWN';

export type BasicEnergyOperatingFacilityInput = {
  address?: InputMaybe<BasicAddressInput>;
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  customer?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  facilityType?: InputMaybe<BasicEnergyFacilityType>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<BasicEnergyState>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type BasicEnergyOperatingFacilityInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: BasicEnergyOperatingFacilityInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type BasicEnergyProducerInput = {
  billings?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  carrierType?: InputMaybe<BasicEnergyCarrierType>;
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  consentId?: InputMaybe<Scalars['String']['input']>;
  consents?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  meteringPointNumber?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notificationContactEmail?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  periods?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  productionType?: InputMaybe<BasicEnergyProductionType>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<BasicEnergyState>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type BasicEnergyProducerInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: BasicEnergyProducerInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'Basic.Energy/ProductionType' */
export type BasicEnergyProductionType =
  /** Biomass was used to produce the energy */
  | 'BIOMASS'
  /** Combined heat and power was used to produce the energy */
  | 'CHP'
  /** Hydroelectric power was used to produce the energy */
  | 'HEP'
  /** Other methods were used to produce the energy */
  | 'OTHER'
  /** Solar power was used to produce the energy */
  | 'SOLAR'
  /** The production type is unknown or not defined */
  | 'UNKNOWN'
  /** Wind power was used to produce the energy */
  | 'WIND';

/** Runtime entities of construction kit enum 'Basic.Energy/State' */
export type BasicEnergyState =
  /** The object is active and in use */
  | 'ACTIVE'
  /** The object was deleted */
  | 'DELETED'
  /** The object is inactive but may be reactivated */
  | 'INACTIVE'
  /** The object is just created and the state is not set */
  | 'NEW';

export type BasicFaxNumberInput = {
  number?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<BasicTypeOfTelephoneBasic>;
};

/** Runtime entities of construction kit enum 'Basic/LegalEntityType' */
export type BasicLegalEntityType =
  /** Actor in economic life, such as any natural or legal person with UGB relevance. */
  | 'COMPANY'
  /** Legal structure with the characteristics of a person */
  | 'LEGAL_PERSON'
  /** Administrative unit with sovereign power such as municipality, federal state, republic. */
  | 'LOCAL_AUTHORITY'
  /** A natural person is a human being with legal capacity, in contrast to a legal person (such as a company, organization, or government entity). */
  | 'NATURAL_PERSON';

export type BasicMarkingInput = {
  additionalText?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['LargeBinary']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BasicNamePlateInput = {
  address?: InputMaybe<BasicAddressInput>;
  assetSpecificProperties?: InputMaybe<Array<InputMaybe<BasicMarkingInput>>>;
  manufacturerName?: InputMaybe<Scalars['String']['input']>;
  manufacturerProductDesignation?: InputMaybe<Scalars['String']['input']>;
  manufacturerProductFamily?: InputMaybe<Scalars['String']['input']>;
  markings?: InputMaybe<Array<InputMaybe<BasicMarkingInput>>>;
  serialNumber?: InputMaybe<Scalars['String']['input']>;
  yearOfConstruction?: InputMaybe<Scalars['String']['input']>;
};

export type BasicPhoneNumberInput = {
  number?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<BasicTypeOfTelephoneEnhanced>;
};

/** Runtime entities of construction kit enum 'Basic/Salutation' */
export type BasicSalutation =
  /** The salutation is female */
  | 'FEMALE'
  /** The salutation is male */
  | 'MALE'
  /** The salutation is non-binary */
  | 'NON_BINARY'
  /** The salutation is unknown or not defined */
  | 'UNKNOWN';

export type BasicStateInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type BasicStateInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: BasicStateInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type BasicTimeRangeInput = {
  from?: InputMaybe<Scalars['DateTime']['input']>;
  to?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BasicTreeInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type BasicTreeInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: BasicTreeInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type BasicTreeNodeInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type BasicTreeNodeInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: BasicTreeNodeInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'Basic/TypeOfTelephoneBasic' */
export type BasicTypeOfTelephoneBasic =
  | 'HOME'
  | 'OFFICE'
  | 'SECRETARY'
  | 'SUBSTITUTE';

/** Runtime entities of construction kit enum 'Basic/TypeOfTelephoneEnhanced' */
export type BasicTypeOfTelephoneEnhanced =
  | 'HOME'
  | 'OFFICE'
  | 'OFFICE_MOBILE'
  | 'PRIVATE_MOBILE'
  | 'SECRETARY'
  | 'SUBSTITUTE';

/** Runtime entities of construction kit enum 'Basic/UnitOfMeasure' */
export type BasicUnitOfMeasure =
  /** Kilowatt-hour, a unit of energy equal to one kilowatt of power used for one hour */
  | 'K_WH'
  /** Megawatt-hour, a unit of energy equal to one megawatt of power used for one hour */
  | 'M_WH'
  /** No unit applicable */
  | 'NON_UNIT';

/** Per-entity override for an unlocked-conflict during a blueprint update. */
export type BlueprintConflictResolution =
  | 'KEEP_BLUEPRINT'
  | 'KEEP_USER'
  | 'MERGE'
  | 'SKIP';

/** Per-entity override for a blueprint update conflict. */
export type BlueprintConflictResolutionInput = {
  /** Runtime id of the conflicting entity. Matches the entityId surfaced by previewUpdate. */
  entityId: Scalars['String']['input'];
  /** Override resolution for this entity. */
  resolution: BlueprintConflictResolution;
};

/** How a blueprint update reconciles seed data with tenant state. */
export type BlueprintUpdateMode =
  | 'FULL'
  | 'MERGE'
  | 'MIGRATION'
  | 'SAFE';

/** Parameters for previewing or applying a blueprint update on the tenant. */
export type BlueprintUpdateRequestInput = {
  /** Per-entity overrides for conflicts surfaced by previewUpdate. */
  conflictResolutions?: InputMaybe<Array<BlueprintConflictResolutionInput>>;
  /** Compute the diff without persisting any changes. */
  dryRun?: InputMaybe<Scalars['Boolean']['input']>;
  /** Fully-qualified target blueprint id (Name-Version), e.g. "InfrastructureStarter-2.0.0". */
  targetVersion: Scalars['String']['input'];
  /** Update reconciliation mode. Defaults to Merge. */
  updateMode?: InputMaybe<BlueprintUpdateMode>;
};

/** Bucket-boundary alignment of a rung: FIXED_SIZE / CALENDAR_DAY / ISO_8601_WEEK / CALENDAR_MONTH / CALENDAR_QUARTER / CALENDAR_YEAR. */
export type BucketAlignment =
  | 'CALENDAR_DAY'
  | 'CALENDAR_MONTH'
  | 'CALENDAR_QUARTER'
  | 'CALENDAR_YEAR'
  | 'FIXED_SIZE'
  | 'ISO_8601_WEEK';

/** Bucket-boundary alignment for a rollup archive: FIXED_SIZE / CALENDAR_DAY / ISO_8601_WEEK / CALENDAR_MONTH / CALENDAR_QUARTER / CALENDAR_YEAR. */
export type BucketAlignmentInput =
  | 'CALENDAR_DAY'
  | 'CALENDAR_MONTH'
  | 'CALENDAR_QUARTER'
  | 'CALENDAR_YEAR'
  | 'FIXED_SIZE'
  | 'ISO_8601_WEEK';

export type CkEnumUpdate = {
  operation?: InputMaybe<CkExtensionUpdateOperations>;
  value?: InputMaybe<CkEnumValueInput>;
};

/** A construction kit enum value */
export type CkEnumValueInput = {
  /** Description of enum value */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Unique key of enum value */
  key?: InputMaybe<Scalars['Int']['input']>;
  /** Name of enum value */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Defines the possible operation operations to extend construction elements. */
export type CkExtensionUpdateOperations =
  | 'DELETE'
  | 'INSERT';

/** State of an operation of an asynchronous CK method: ACCEPTED and RUNNING are open, SUCCEEDED and FAILED are final (a final operation never changes again). */
export type CkMethodOperationState =
  | 'ACCEPTED'
  | 'FAILED'
  | 'RUNNING'
  | 'SUCCEEDED';

/** Aggregation function for a rollup. AVG is stored as two columns (sum + count) so chained rollups stay numerically correct. */
export type CkRollupFunction =
  | 'AVG'
  | 'COUNT'
  | 'FIRST'
  | 'LAST'
  | 'MAX'
  | 'MIN'
  | 'STATE_DURATION'
  | 'SUM'
  | 'TIME_WEIGHTED_AVG';

/** Input for createRollupArchive: source archive(s) + bucketing/lag + aggregations. TargetCkTypeId and Columns are resolved server-side. Supply either 'sources' (preferred) or the deprecated 'sourceArchiveRtId' — exactly one of the two. */
export type CreateRollupArchiveInput = {
  /** Aggregation specs. At least one required; duplicate target column names are rejected. */
  aggregations: Array<RollupAggregationInput>;
  /** Optional bucket-boundary alignment. Defaults to FIXED_SIZE. Calendar variants (CALENDAR_DAY / ISO_8601_WEEK / CALENDAR_MONTH / CALENDAR_QUARTER / CALENDAR_YEAR) make day/week/month/quarter/year rollups expressible and are the only ones for which referenceTimeZone has any effect. */
  bucketAlignment?: InputMaybe<BucketAlignmentInput>;
  /** Bucket width in milliseconds. Must be > 0. */
  bucketSizeMs: Scalars['Long']['input'];
  /** Optional bound on the TIME_WEIGHTED_AVG carry-in scan (last observation carried forward) in milliseconds. Null keeps the engine default of 35 days. Only meaningful when the aggregations include TIME_WEIGHTED_AVG; ignored otherwise. Must be > 0 when set. */
  carryLookbackMs?: InputMaybe<Scalars['Long']['input']>;
  /** Optional IANA reference time-zone (e.g. 'Europe/Vienna') that aligns calendar bucket boundaries to local wall-clock time so they are DST-correct. Null keeps UTC boundaries. Ignored for FIXED_SIZE; an unknown zone id is rejected. */
  referenceTimeZone?: InputMaybe<Scalars['String']['input']>;
  /** Optional human-readable name for the rollup archive. */
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  /** DEPRECATED single-source shorthand: runtime id of the one source archive (raw CkArchive, TimeRangeArchive or another CkRollupArchive). Translated into one unbounded entry of 'sources'. Mutually exclusive with 'sources'. */
  sourceArchiveRtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
  /** Source archives of the rollup (AB#5157), each with an optional half-open validity span [validFrom, validTo). Spans must be pairwise disjoint, aligned to the rollup's bucket boundaries, and at most one source may be open-ended per direction. Required unless the deprecated 'sourceArchiveRtId' is supplied instead. An explicitly empty list is rejected — omit the field entirely to fall back to 'sourceArchiveRtId'. */
  sources?: InputMaybe<Array<CreateRollupSourceInput>>;
  /** Safety-wait after bucketEnd before aggregating, in milliseconds. >= 0. */
  watermarkLagMs: Scalars['Long']['input'];
};

/** One source archive of a rollup plus its optional validity span. validFrom is inclusive, validTo exclusive; both null = the source is authoritative for all time. */
export type CreateRollupSourceInput = {
  /** Runtime id of the source archive (raw CkArchive, TimeRangeArchive or another CkRollupArchive). */
  sourceArchiveRtId: Scalars['OctoObjectId']['input'];
  /** Inclusive start of the validity span (ISO-8601, UTC). Null = unbounded towards the past. Must lie on a bucket boundary of the rollup. */
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclusive end of the validity span (ISO-8601, UTC). Null = unbounded towards the future. Must lie on a bucket boundary of the rollup and be later than validFrom. */
  validTo?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Input for createTimeRangeArchive: target CK type, columns, optional name + advisory period. */
export type CreateTimeRangeArchiveInput = {
  /** Attribute paths to materialise as CrateDB columns. At least one required. */
  columns: Array<ArchiveColumnSpecInput>;
  /** Advisory window length in milliseconds (e.g. 900000 = 15 min). Optional; descriptive only. */
  periodMs?: InputMaybe<Scalars['Long']['input']>;
  /** Optional human-readable name for the archive. */
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  /** CK type id whose rows this archive captures windowed values for. */
  targetCkTypeId: Scalars['String']['input'];
};

/** Defines possible delete strategies of a runtime type */
export type DeleteStrategies =
  | 'ARCHIVE'
  | 'ERASE';

/** Runtime entities of construction kit enum 'EnergyCommunity/BillingCycle' */
export type EnergyCommunityBillingCycle =
  /** The billing cycle is one year */
  | 'ANNUALLY'
  /** The billing cycle is one month */
  | 'MONTHLY'
  /** The billing cycle is one quarter */
  | 'QUARTERLY'
  /** The billing cycle is six months */
  | 'SEMI_ANNUALLY';

export type EnergyCommunityBillingDocumentInput = {
  assignedTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  bankAccount?: InputMaybe<BasicBankAccountInput>;
  billingDocumentState?: InputMaybe<EnergyCommunityBillingDocumentState>;
  billingType?: InputMaybe<EnergyCommunityBillingType>;
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  comment?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  contact?: InputMaybe<BasicContactInput>;
  customerNumber?: InputMaybe<Scalars['String']['input']>;
  documentDate?: InputMaybe<Scalars['DateTime']['input']>;
  documentNumber?: InputMaybe<Scalars['String']['input']>;
  grossTotal?: InputMaybe<Scalars['Decimal']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  taxProcedureCreditNote?: InputMaybe<EnergyCommunityTaxProcedureCreditNote>;
  timeRange?: InputMaybe<BasicTimeRangeInput>;
};

export type EnergyCommunityBillingDocumentInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: EnergyCommunityBillingDocumentInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type EnergyCommunityBillingDocumentLineItemInput = {
  billedTimeRange?: InputMaybe<BasicTimeRangeInput>;
  billingType?: InputMaybe<EnergyCommunityBillingType>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  grossAmount?: InputMaybe<Scalars['Decimal']['input']>;
  intervalCount?: InputMaybe<Scalars['Int']['input']>;
  intervalCountL1?: InputMaybe<Scalars['Int']['input']>;
  intervalCountL2?: InputMaybe<Scalars['Int']['input']>;
  intervalCountL3?: InputMaybe<Scalars['Int']['input']>;
  intervalCountUnknown?: InputMaybe<Scalars['Int']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  meteringPoint?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  netAmount?: InputMaybe<Scalars['Decimal']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  quantity?: InputMaybe<Scalars['Decimal']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  taxAmount?: InputMaybe<Scalars['Decimal']['input']>;
  taxRate?: InputMaybe<Scalars['Decimal']['input']>;
  unitPrice?: InputMaybe<Scalars['Decimal']['input']>;
};

export type EnergyCommunityBillingDocumentLineItemInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: EnergyCommunityBillingDocumentLineItemInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'EnergyCommunity/BillingDocumentState' */
export type EnergyCommunityBillingDocumentState =
  /** The billing document has been canceled */
  | 'CANCELED'
  /** The billing document is a draft */
  | 'DRAFT'
  /** The billing document has been paid */
  | 'PAID'
  /** The billing document is released */
  | 'RELEASED'
  /** The billing document has been sent */
  | 'SENT';

/** Runtime entities of construction kit enum 'EnergyCommunity/BillingType' */
export type EnergyCommunityBillingType =
  /** The document or item is an credit note or credit */
  | 'CREDIT'
  /** The document is an invoice or the item is a debit note */
  | 'DEBIT';

export type EnergyCommunityConsumerInput = {
  billings?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  carrierType?: InputMaybe<BasicEnergyCarrierType>;
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  consentId?: InputMaybe<Scalars['String']['input']>;
  consents?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  energyConsumption?: InputMaybe<Scalars['Decimal']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  meteringPointNumber?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notificationContactEmail?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  partitionFactor?: InputMaybe<Scalars['Int']['input']>;
  periods?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<BasicEnergyState>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type EnergyCommunityConsumerInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: EnergyCommunityConsumerInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type EnergyCommunityCustomerInput = {
  bankAccount?: InputMaybe<BasicBankAccountInput>;
  billing?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  billingCycle?: InputMaybe<EnergyCommunityBillingCycle>;
  comment?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  contact?: InputMaybe<BasicContactInput>;
  customerNumber?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  facilities?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<BasicEnergyState>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  taxProcedureCreditNote?: InputMaybe<EnergyCommunityTaxProcedureCreditNote>;
};

export type EnergyCommunityCustomerInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: EnergyCommunityCustomerInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type EnergyCommunityEnergyPriceInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  currency?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  price?: InputMaybe<Scalars['Decimal']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type EnergyCommunityEnergyPriceInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: EnergyCommunityEnergyPriceInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type EnergyCommunityParticipationPeriodInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  meteringPoint?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  timeRange?: InputMaybe<BasicTimeRangeInput>;
};

export type EnergyCommunityParticipationPeriodInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: EnergyCommunityParticipationPeriodInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type EnergyCommunityProducerInput = {
  billings?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  carrierType?: InputMaybe<BasicEnergyCarrierType>;
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  consentId?: InputMaybe<Scalars['String']['input']>;
  consents?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  energyProductionCapacity?: InputMaybe<Scalars['Decimal']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  meteringPointNumber?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notificationContactEmail?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  partitionFactor?: InputMaybe<Scalars['Int']['input']>;
  periods?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  productionType?: InputMaybe<BasicEnergyProductionType>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<BasicEnergyState>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type EnergyCommunityProducerInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: EnergyCommunityProducerInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'EnergyCommunity/TaxProcedureCreditNote' */
export type EnergyCommunityTaxProcedureCreditNote =
  /** The farmer tax procedure is applied, which is a reduced tax amount for farmers */
  | 'FARMER_TAX_PROCEDURE'
  /** No tax procedure is applied */
  | 'NO_TAX_PROCEDURE'
  /** The reverse charge procedure is applied */
  | 'REVERSE_CHARGE'
  /** No tax procedure is applied for small business owners */
  | 'SMALL_BUSINESS_OWNERS';

export type EnvironmentCarbonBudgetInput = {
  budgetConsumed?: InputMaybe<Scalars['Decimal']['input']>;
  budgetTotal?: InputMaybe<Scalars['Decimal']['input']>;
  budgetYear?: InputMaybe<Scalars['Int']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  dailyEmissions?: InputMaybe<Scalars['Decimal']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  monthlyEmissions?: InputMaybe<Scalars['Decimal']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  targetFulfillment?: InputMaybe<Scalars['Decimal']['input']>;
};

export type EnvironmentCarbonBudgetInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: EnvironmentCarbonBudgetInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type EnvironmentCarbonEmissionInput = {
  carbonScope?: InputMaybe<EnvironmentCarbonScope>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  emissionAmount?: InputMaybe<Scalars['Decimal']['input']>;
  emissionSource?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  timeRange?: InputMaybe<BasicTimeRangeInput>;
};

export type EnvironmentCarbonEmissionInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: EnvironmentCarbonEmissionInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'Environment/CarbonScope' */
export type EnvironmentCarbonScope =
  | 'SCOPE_1'
  | 'SCOPE_2'
  | 'SCOPE_3';

export type EnvironmentCertificateOfOriginInput = {
  certificateIssuer?: InputMaybe<Scalars['String']['input']>;
  certificateValidFrom?: InputMaybe<Scalars['DateTime']['input']>;
  certificateValidTo?: InputMaybe<Scalars['DateTime']['input']>;
  certifiedAmount?: InputMaybe<Scalars['Decimal']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  energySource?: InputMaybe<EnvironmentEnergySource>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type EnvironmentCertificateOfOriginInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: EnvironmentCertificateOfOriginInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'Environment/ComplianceCategory' */
export type EnvironmentComplianceCategory =
  | 'CSRD'
  | 'E_EFF_G'
  | 'ISO_50001'
  | 'NIS_2';

export type EnvironmentComplianceRecordInput = {
  auditDate?: InputMaybe<Scalars['DateTime']['input']>;
  complianceCategory?: InputMaybe<EnvironmentComplianceCategory>;
  complianceNotes?: InputMaybe<Scalars['String']['input']>;
  complianceStatus?: InputMaybe<EnvironmentComplianceStatus>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type EnvironmentComplianceRecordInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: EnvironmentComplianceRecordInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'Environment/ComplianceStatus' */
export type EnvironmentComplianceStatus =
  | 'COMPLIANT'
  | 'IN_PROGRESS'
  | 'OPEN'
  | 'PASSED'
  | 'SUBMITTED';

/** Runtime entities of construction kit enum 'Environment/EnergySource' */
export type EnvironmentEnergySource =
  | 'BIOMASS'
  | 'GEOTHERMAL'
  | 'HYDRO'
  | 'OTHER'
  | 'SOLAR'
  | 'WIND';

export type EnvironmentEnvironmentalGoalInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  goalStatus?: InputMaybe<EnvironmentGoalState>;
  goalText?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type EnvironmentEnvironmentalGoalInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: EnvironmentEnvironmentalGoalInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'Environment/GoalState' */
export type EnvironmentGoalState =
  | 'OFF_TRACK'
  | 'ON_TRACK';

export type EnvironmentWasteMeterInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  grossWeight?: InputMaybe<Scalars['Decimal']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  tareWeight?: InputMaybe<Scalars['Decimal']['input']>;
  weight?: InputMaybe<Scalars['Decimal']['input']>;
};

export type EnvironmentWasteMeterInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: EnvironmentWasteMeterInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type FieldFilter = {
  attributePath: Scalars['String']['input'];
  comparisonValue?: InputMaybe<Scalars['SimpleScalar']['input']>;
  operator: FieldFilterOperators;
  /** Secondary value for two-argument operators such as Between. */
  secondaryValue?: InputMaybe<Scalars['SimpleScalar']['input']>;
};

/** Defines the operator of field compare */
export type FieldFilterOperators =
  | 'ANY_EQ'
  | 'ANY_LIKE'
  | 'BETWEEN'
  | 'EQUALS'
  | 'GREATER_EQUAL_THAN'
  | 'GREATER_THAN'
  | 'IN'
  | 'IS_NOT_NULL'
  | 'IS_NULL'
  | 'LESS_EQUAL_THAN'
  | 'LESS_THAN'
  | 'LIKE'
  | 'MATCH_REG_EX'
  | 'NOT_EQUALS'
  | 'NOT_IN';

export type FieldGroupByAggregationInput = {
  avgAttributePaths?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  countAttributePaths?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupByAttributePaths: Array<InputMaybe<Scalars['String']['input']>>;
  maxValueAttributePaths?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  minValueAttributePaths?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** When true, enum integer values in groupBy keys are resolved to their label names. Defaults to true. */
  resolveEnumValuesToNames?: InputMaybe<Scalars['Boolean']['input']>;
  sumAttributePaths?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FormulaResultType =
  | 'BOOLEAN'
  | 'DATE_TIME'
  | 'DOUBLE'
  | 'INT'
  | 'INT_64';

export type GlobalQueryOptions = {
  includeArchivedEntities?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Enum of graph directions */
export type GraphDirection =
  | 'ANY'
  | 'INBOUND'
  | 'OUTBOUND';

export type IndustryBasicAlarmInput = {
  acknowledged?: InputMaybe<Scalars['DateTime']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  cause?: InputMaybe<Scalars['String']['input']>;
  cleared?: InputMaybe<Scalars['DateTime']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventSource?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  lastModified?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  priority?: InputMaybe<IndustryBasicAlarmPriority>;
  reactivated?: InputMaybe<Scalars['DateTime']['input']>;
  reactivatedCount?: InputMaybe<Scalars['Int']['input']>;
  received?: InputMaybe<Scalars['DateTime']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<IndustryBasicAlarmSourceType>;
  state?: InputMaybe<IndustryBasicAlarmState>;
  tagName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  type?: InputMaybe<IndustryBasicAlarmType>;
};

export type IndustryBasicAlarmInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryBasicAlarmInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'Industry.Basic/AlarmPriority' */
export type IndustryBasicAlarmPriority =
  /** The alarm is of critical priority. */
  | 'CRITICAL'
  /** The alarm is of high priority. */
  | 'HIGH'
  /** The alarm is of low priority. */
  | 'LOW'
  /** The alarm is of medium priority. */
  | 'MEDIUM'
  /** No priority has been assigned to the alarm. */
  | 'UNDEFINED';

/** Runtime entities of construction kit enum 'Industry.Basic/AlarmSourceType' */
export type IndustryBasicAlarmSourceType =
  /** The alarm is generated by a control system. */
  | 'CONTROL_SYSTEM'
  /** The alarm is generated by a field device. */
  | 'FIELD_DEVICE'
  /** The alarm is generated by a human-machine interface. */
  | 'HMI'
  /** The alarm is generated by an internal source. */
  | 'INTERNAL'
  /** No source has been assigned to the alarm. */
  | 'UNDEFINED';

/** Runtime entities of construction kit enum 'Industry.Basic/AlarmState' */
export type IndustryBasicAlarmState =
  /** The acknowledged alarm state should not use an audible indication. The acknowledged alarm state visual indication should be clearly distinguishable from the normal state indication by using symbols (e.g., shape or text), and should be identical in colour to the unacknowledged alarm indication. A blinking element should not be used in the visual indication for an acknowledged alarm. */
  | 'ACKNOWLEDGED'
  /** The normal state should not use an audible indication. The normal state visual indication should be the same as indications without alarms. */
  | 'NORMAL'
  /** The out-of-service alarm state should be visually indicated in the HMI. The visual indication for an out-of-service alarm should not include a blinking element. The out-of-service alarm state indication should be distinct from the unacknowledged and acknowledged state indications. No audible indication should be used to identify out-of-service alarms. */
  | 'OUT_OF_SERVICE'
  /** The return-to-normal unacknowledged state should not use an audible indication. The return to-normal unacknowledged state visual indication may be the same as the normal state or it may indicate an unacknowledged status with a blinking element. */
  | 'RETURN_TO_NORMAL'
  /** The shelved alarm state should be visually indicated in the HMI. The visual indication for a shelved alarm should not include a blinking element. The shelved alarm state indication should be distinct. No audible indication should be used to identify shelved alarms. */
  | 'SHELVED'
  /** The suppressed-by-design alarm state should be visually indicated in the HMI. The visual indication for an alarm suppressed by design should not include a blinking element. The suppressed-by-design alarm state indication should be distinct from the unacknowledged and acknowledged state indications. No audible indication should be used to identify alarms suppressed by design. */
  | 'SUPPRESSED_BY_DESIGN'
  /** The unacknowledged alarm state should use both an audible indication and visual indication. The audible indication should be silenced with a silence action or acknowledge action by the operator. The visual indication should be clearly distinguishable from the normal state indication by using colours and symbols (e.g., shape or text). The visual indication for an unacknowledged alarm should include a blinking element. There are some environments in which an audible indication is not an effective indicator of unacknowledged alarms. */
  | 'UNACKNOWLEDGED'
  /** No state has been assigned to the alarm. */
  | 'UNDEFINED';

/** Runtime entities of construction kit enum 'Industry.Basic/AlarmType' */
export type IndustryBasicAlarmType =
  /** The alarm is based on an absolute value. */
  | 'ABSOLUTE'
  /** The alarm is based on an adaptive value. */
  | 'ADAPTIVE'
  /** The alarm is based on an adjustable value. */
  | 'ADJUSTABLE'
  /** The alarm is based on a bad measurement. */
  | 'BAD_MEASUREMENT'
  /** The alarm is based on a bit pattern. */
  | 'BIT_PATTERN'
  /** The alarm is based on a calculated value. */
  | 'CALCULATED'
  /** The alarm is based on a controller output. */
  | 'CONTROLLER_OUTPUT'
  /** The alarm is based on a deviation from a set-point. */
  | 'DEVIATION'
  /** The alarm is based on a discrepancy between two values. */
  | 'DISCREPANCY'
  /** The alarm is based on a first-out value. */
  | 'FIRST_OUT'
  /** The alarm is based on an instrument diagnostic. */
  | 'INSTRUMENT_DIAGNOSTIC'
  /** The alarm is based on the rate of change of a value. */
  | 'RATE_OF_CHANGE'
  /** The alarm is based on a recipe-driven value. */
  | 'RECIPE_DRIVEN'
  /** The alarm is based on a re-alarming value. */
  | 'RE_ALARMING'
  /** The alarm is based on a statistical value. */
  | 'STATISTICAL'
  /** The alarm is based on a system diagnostic. */
  | 'SYSTEM_DIAGNOSTIC'
  /** No type has been assigned to the alarm. */
  | 'UNDEFINED';

export type IndustryBasicEventInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventSource?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  received?: InputMaybe<Scalars['DateTime']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  tagName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type IndustryBasicEventInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryBasicEventInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'Industry.Basic/IecDataType' */
export type IndustryBasicIecDataType =
  /** IEC_BOOL - 1Bit */
  | 'BOOL'
  /** IEC_BYTE - 8Bit */
  | 'BYTE'
  /** IEC_DATE */
  | 'DATE'
  /** IEC_DINT - 32Bit signed */
  | 'DINT'
  /** IEC_DT - Date and Time */
  | 'DT'
  /** IEC_DWORD - 32Bit */
  | 'DWORD'
  /** IEC_INT - 16Bit signed */
  | 'INT'
  /** IEC_LINT - 64Bit signed */
  | 'LINT'
  /** IEC_LREAL - 64Bit float */
  | 'LREAL'
  /** IEC_LWORD - 64Bit */
  | 'LWORD'
  /** IEC_REAL - 32Bit float */
  | 'REAL'
  /** IEC_SINT - 8Bit signed */
  | 'SINT'
  /** IEC_STRING - 8Bit*n */
  | 'STRING'
  /** IEC_TIME */
  | 'TIME'
  /** IEC_TOD - Time of Day */
  | 'TOD'
  /** IEC_UDINT - 32Bit unsigned */
  | 'UDINT'
  /** IEC_UINT - 16Bit unsigned */
  | 'UINT'
  /** IEC_ULINT - 64Bit unsigned */
  | 'ULINT'
  /** IEC_USINT - 8Bit unsigned */
  | 'USINT'
  /** IEC_WORD - 16Bit */
  | 'WORD'
  /** IEC_WSTRING - 16Bit*n */
  | 'WSTRING';

/** Runtime entities of construction kit enum 'Industry.Basic/MachineCapabilities' */
export type IndustryBasicMachineCapabilities =
  | 'UNKNOWN';

export type IndustryBasicMachineInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  isSimulated?: InputMaybe<Scalars['Boolean']['input']>;
  machineCapabilities?: InputMaybe<IndustryBasicMachineCapabilities>;
  machineState?: InputMaybe<IndustryBasicMachineState>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  namePlate?: InputMaybe<BasicNamePlateInput>;
  operatingHours?: InputMaybe<Scalars['Int']['input']>;
  orderItems?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  runtimeVariables?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  shiftAssignments?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  standStillCounter?: InputMaybe<Scalars['Int']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type IndustryBasicMachineInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryBasicMachineInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'Industry.Basic/MachineState' */
export type IndustryBasicMachineState =
  | 'ERROR'
  | 'IDLE'
  | 'OFF'
  | 'ON'
  | 'SETUP'
  | 'UNKNOWN';

export type IndustryBasicRuntimeVariableInput = {
  booleanValue?: InputMaybe<Scalars['Boolean']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  dateTimeValue?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  doubleValue?: InputMaybe<Scalars['Decimal']['input']>;
  iecDataType?: InputMaybe<IndustryBasicIecDataType>;
  int64Value?: InputMaybe<Scalars['Long']['input']>;
  intValue?: InputMaybe<Scalars['Int']['input']>;
  machine?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  stringValue?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  timeSpanValue?: InputMaybe<Scalars['Seconds']['input']>;
};

export type IndustryBasicRuntimeVariableInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryBasicRuntimeVariableInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryEnergyDemandResponseEventInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  market?: InputMaybe<IndustryEnergyDemandResponseMarket>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  reductionKw?: InputMaybe<Scalars['Decimal']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  revenue?: InputMaybe<Scalars['Decimal']['input']>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<IndustryEnergyDemandResponseStatus>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type IndustryEnergyDemandResponseEventInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryEnergyDemandResponseEventInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'Industry.Energy/DemandResponseMarket' */
export type IndustryEnergyDemandResponseMarket =
  | 'APCS'
  | 'EXAA'
  | 'SPOT';

/** Runtime entities of construction kit enum 'Industry.Energy/DemandResponseStatus' */
export type IndustryEnergyDemandResponseStatus =
  | 'ACTIVE'
  | 'CANCELLED'
  | 'COMPLETED';

export type IndustryEnergyEnergyConsumerInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  importedEnergy?: InputMaybe<Scalars['Decimal']['input']>;
  isSimulated?: InputMaybe<Scalars['Boolean']['input']>;
  loadPercent?: InputMaybe<Scalars['Decimal']['input']>;
  machineCapabilities?: InputMaybe<IndustryBasicMachineCapabilities>;
  machineState?: InputMaybe<IndustryBasicMachineState>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  namePlate?: InputMaybe<BasicNamePlateInput>;
  nominalPower?: InputMaybe<Scalars['Decimal']['input']>;
  operatingHours?: InputMaybe<Scalars['Int']['input']>;
  orderItems?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  power?: InputMaybe<Scalars['Decimal']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  runtimeVariables?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  shiftAssignments?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  standStillCounter?: InputMaybe<Scalars['Int']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type IndustryEnergyEnergyConsumerInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryEnergyEnergyConsumerInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryEnergyEnergyCostInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  costAmount?: InputMaybe<Scalars['Decimal']['input']>;
  forecastAmount?: InputMaybe<Scalars['Decimal']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  tariffType?: InputMaybe<IndustryEnergyTariffType>;
  timeRange?: InputMaybe<BasicTimeRangeInput>;
};

export type IndustryEnergyEnergyCostInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryEnergyEnergyCostInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryEnergyEnergyForecastInput = {
  confidence?: InputMaybe<Scalars['Decimal']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  forecastModel?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  predictedLoad?: InputMaybe<Scalars['Decimal']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  timeRange?: InputMaybe<BasicTimeRangeInput>;
};

export type IndustryEnergyEnergyForecastInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryEnergyEnergyForecastInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryEnergyEnergyMeterInput = {
  aCL1?: InputMaybe<IndustryEnergyPhaseInfoInput>;
  aCL2?: InputMaybe<IndustryEnergyPhaseInfoInput>;
  aCL3?: InputMaybe<IndustryEnergyPhaseInfoInput>;
  ampere?: InputMaybe<Scalars['Decimal']['input']>;
  apparentPower?: InputMaybe<Scalars['Decimal']['input']>;
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  exportedEnergy?: InputMaybe<Scalars['Decimal']['input']>;
  frequency?: InputMaybe<Scalars['Decimal']['input']>;
  importedEnergy?: InputMaybe<Scalars['Decimal']['input']>;
  isSimulated?: InputMaybe<Scalars['Boolean']['input']>;
  machineCapabilities?: InputMaybe<IndustryBasicMachineCapabilities>;
  machineState?: InputMaybe<IndustryBasicMachineState>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  namePlate?: InputMaybe<BasicNamePlateInput>;
  operatingHours?: InputMaybe<Scalars['Int']['input']>;
  orderItems?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  power?: InputMaybe<Scalars['Decimal']['input']>;
  reactivePower?: InputMaybe<Scalars['Decimal']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  runtimeVariables?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  shiftAssignments?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  standStillCounter?: InputMaybe<Scalars['Int']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  voltage?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IndustryEnergyEnergyMeterInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryEnergyEnergyMeterInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryEnergyEnergyPerformanceIndicatorInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  indicatorUnit?: InputMaybe<Scalars['String']['input']>;
  indicatorValue?: InputMaybe<Scalars['Decimal']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  referenceValue?: InputMaybe<Scalars['Decimal']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  timeRange?: InputMaybe<BasicTimeRangeInput>;
};

export type IndustryEnergyEnergyPerformanceIndicatorInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryEnergyEnergyPerformanceIndicatorInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryEnergyEnergyStorageInput = {
  ampere?: InputMaybe<Scalars['Decimal']['input']>;
  capacity?: InputMaybe<Scalars['Decimal']['input']>;
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  exportedEnergy?: InputMaybe<Scalars['Decimal']['input']>;
  importedEnergy?: InputMaybe<Scalars['Decimal']['input']>;
  isSimulated?: InputMaybe<Scalars['Boolean']['input']>;
  machineCapabilities?: InputMaybe<IndustryBasicMachineCapabilities>;
  machineState?: InputMaybe<IndustryBasicMachineState>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  namePlate?: InputMaybe<BasicNamePlateInput>;
  numOfCycles?: InputMaybe<Scalars['Int']['input']>;
  operatingHours?: InputMaybe<Scalars['Int']['input']>;
  orderItems?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  power?: InputMaybe<Scalars['Decimal']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  runtimeVariables?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  shiftAssignments?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  soC?: InputMaybe<Scalars['Int']['input']>;
  soH?: InputMaybe<Scalars['Int']['input']>;
  standStillCounter?: InputMaybe<Scalars['Int']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  temperature?: InputMaybe<Scalars['Decimal']['input']>;
  voltage?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IndustryEnergyEnergyStorageInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryEnergyEnergyStorageInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryEnergyInverterInput = {
  aCL1?: InputMaybe<IndustryEnergyPhaseInfoInput>;
  aCL2?: InputMaybe<IndustryEnergyPhaseInfoInput>;
  aCL3?: InputMaybe<IndustryEnergyPhaseInfoInput>;
  ampere?: InputMaybe<Scalars['Decimal']['input']>;
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  dCAmpere?: InputMaybe<Scalars['Decimal']['input']>;
  dCVoltage?: InputMaybe<Scalars['Decimal']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  isSimulated?: InputMaybe<Scalars['Boolean']['input']>;
  machineCapabilities?: InputMaybe<IndustryBasicMachineCapabilities>;
  machineState?: InputMaybe<IndustryBasicMachineState>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  maximumPower?: InputMaybe<Scalars['Decimal']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  namePlate?: InputMaybe<BasicNamePlateInput>;
  operatingHours?: InputMaybe<Scalars['Int']['input']>;
  orderItems?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  power?: InputMaybe<Scalars['Decimal']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  runtimeVariables?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  shiftAssignments?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  standStillCounter?: InputMaybe<Scalars['Int']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  voltage?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IndustryEnergyInverterInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryEnergyInverterInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryEnergyPhaseInfoInput = {
  ampere?: InputMaybe<Scalars['Decimal']['input']>;
  frequency?: InputMaybe<Scalars['Decimal']['input']>;
  power?: InputMaybe<Scalars['Decimal']['input']>;
  voltage?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IndustryEnergyPhotovoltaicSystemInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type IndustryEnergyPhotovoltaicSystemInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryEnergyPhotovoltaicSystemInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryEnergyPhotovoltaicSystemModuleInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  isSimulated?: InputMaybe<Scalars['Boolean']['input']>;
  machineCapabilities?: InputMaybe<IndustryBasicMachineCapabilities>;
  machineState?: InputMaybe<IndustryBasicMachineState>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  namePlate?: InputMaybe<BasicNamePlateInput>;
  operatingHours?: InputMaybe<Scalars['Int']['input']>;
  orderItems?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  peakPower?: InputMaybe<Scalars['Decimal']['input']>;
  power?: InputMaybe<Scalars['Decimal']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  runtimeVariables?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  shiftAssignments?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  standStillCounter?: InputMaybe<Scalars['Int']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type IndustryEnergyPhotovoltaicSystemModuleInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryEnergyPhotovoltaicSystemModuleInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryEnergyPhotovoltaicSystemStringInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  numOfModules?: InputMaybe<Scalars['Int']['input']>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  power?: InputMaybe<Scalars['Decimal']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type IndustryEnergyPhotovoltaicSystemStringInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryEnergyPhotovoltaicSystemStringInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'Industry.Energy/TariffType' */
export type IndustryEnergyTariffType =
  | 'OFF_PEAK'
  | 'PEAK'
  | 'STANDARD';

export type IndustryFluidHeatMeterInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  flow?: InputMaybe<Scalars['Decimal']['input']>;
  flowTemperature?: InputMaybe<Scalars['Decimal']['input']>;
  importedEnergy?: InputMaybe<Scalars['Decimal']['input']>;
  isSimulated?: InputMaybe<Scalars['Boolean']['input']>;
  machineCapabilities?: InputMaybe<IndustryBasicMachineCapabilities>;
  machineState?: InputMaybe<IndustryBasicMachineState>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  namePlate?: InputMaybe<BasicNamePlateInput>;
  operatingHours?: InputMaybe<Scalars['Int']['input']>;
  orderItems?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  power?: InputMaybe<Scalars['Decimal']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  returnTemperature?: InputMaybe<Scalars['Decimal']['input']>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  runtimeVariables?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  shiftAssignments?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  standStillCounter?: InputMaybe<Scalars['Int']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  volume?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IndustryFluidHeatMeterInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryFluidHeatMeterInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryFluidWaterMeterInput = {
  avgWaterTemperature?: InputMaybe<Scalars['Decimal']['input']>;
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  isSimulated?: InputMaybe<Scalars['Boolean']['input']>;
  machineCapabilities?: InputMaybe<IndustryBasicMachineCapabilities>;
  machineState?: InputMaybe<IndustryBasicMachineState>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  maxWaterTemperature?: InputMaybe<Scalars['Decimal']['input']>;
  minWaterTemperature?: InputMaybe<Scalars['Decimal']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  namePlate?: InputMaybe<BasicNamePlateInput>;
  netVolume?: InputMaybe<Scalars['Decimal']['input']>;
  operatingHours?: InputMaybe<Scalars['Int']['input']>;
  orderItems?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  reverseVolume?: InputMaybe<Scalars['Decimal']['input']>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  runtimeVariables?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  shiftAssignments?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  standStillCounter?: InputMaybe<Scalars['Int']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  volume?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IndustryFluidWaterMeterInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryFluidWaterMeterInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryMaintenanceAccountInput = {
  accountNumber?: InputMaybe<Scalars['String']['input']>;
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  costCategory?: InputMaybe<IndustryMaintenanceCostCategory>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type IndustryMaintenanceAccountInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryMaintenanceAccountInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'Industry.Maintenance/AggregationType' */
export type IndustryMaintenanceAggregationType =
  | 'FISCAL_YEAR'
  | 'MONTH'
  | 'WEEK';

/** Runtime entities of construction kit enum 'Industry.Maintenance/CostCategory' */
export type IndustryMaintenanceCostCategory =
  | 'EXTERNAL'
  | 'INTERNAL'
  | 'MATERIAL';

export type IndustryMaintenanceCostCenterInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  journalEntries?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type IndustryMaintenanceCostCenterInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryMaintenanceCostCenterInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryMaintenanceEmployeeInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderFeedbacks?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  staffNumber?: InputMaybe<Scalars['Int']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type IndustryMaintenanceEmployeeInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryMaintenanceEmployeeInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'Industry.Maintenance/EnergyBalanceGroup' */
export type IndustryMaintenanceEnergyBalanceGroup =
  | 'UNDEFINED';

export type IndustryMaintenanceEnergyBalanceInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<IndustryMaintenanceEnergyBalanceGroup>;
  machine?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  product?: InputMaybe<IndustryMaintenanceEnergyBalanceProduct>;
  quantity?: InputMaybe<Scalars['Decimal']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  time?: InputMaybe<Scalars['DateTime']['input']>;
  unit?: InputMaybe<IndustryMaintenanceEnergyBalanceUnit>;
};

export type IndustryMaintenanceEnergyBalanceInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryMaintenanceEnergyBalanceInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'Industry.Maintenance/EnergyBalanceProduct' */
export type IndustryMaintenanceEnergyBalanceProduct =
  | 'UNDEFINED';

/** Runtime entities of construction kit enum 'Industry.Maintenance/EnergyBalanceUnit' */
export type IndustryMaintenanceEnergyBalanceUnit =
  | 'UNDEFINED';

export type IndustryMaintenanceJournalEntryInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  costCenter?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  journalValue?: InputMaybe<Scalars['Decimal']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  time?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IndustryMaintenanceJournalEntryInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryMaintenanceJournalEntryInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryMaintenanceOrderCostsInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  externalCosts?: InputMaybe<Scalars['Decimal']['input']>;
  internalCosts?: InputMaybe<Scalars['Decimal']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  materialCosts?: InputMaybe<Scalars['Decimal']['input']>;
  order?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  totalCosts?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IndustryMaintenanceOrderCostsInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryMaintenanceOrderCostsInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryMaintenanceOrderFeedbackInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  employee?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  feedbackNumber?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type IndustryMaintenanceOrderFeedbackInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryMaintenanceOrderFeedbackInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryMaintenanceOrderInput = {
  actualCosts?: InputMaybe<Scalars['Decimal']['input']>;
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  costs?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  event?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  machine?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  orderPriority?: InputMaybe<IndustryMaintenanceOrderPriority>;
  orderState?: InputMaybe<IndustryMaintenanceOrderState>;
  orderText?: InputMaybe<Scalars['String']['input']>;
  orderType?: InputMaybe<IndustryMaintenanceOrderType>;
  plannedCosts?: InputMaybe<Scalars['Decimal']['input']>;
  projectNumber?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  serviceType?: InputMaybe<IndustryMaintenanceServiceType>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type IndustryMaintenanceOrderInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryMaintenanceOrderInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'Industry.Maintenance/OrderPriority' */
export type IndustryMaintenanceOrderPriority =
  | 'UNDEFINED';

/** Runtime entities of construction kit enum 'Industry.Maintenance/OrderState' */
export type IndustryMaintenanceOrderState =
  | 'UNDEFINED';

/** Runtime entities of construction kit enum 'Industry.Maintenance/OrderType' */
export type IndustryMaintenanceOrderType =
  | 'UNDEFINED';

/** Runtime entities of construction kit enum 'Industry.Maintenance/ServiceType' */
export type IndustryMaintenanceServiceType =
  | 'UNDEFINED';

export type IndustryMaintenanceWorkplaceInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type IndustryMaintenanceWorkplaceInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryMaintenanceWorkplaceInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'Industry.Manufacturing/FeedbackSyncState' */
export type IndustryManufacturingFeedbackSyncState =
  | 'SYNCED'
  | 'UNSYNCED';

export type IndustryManufacturingOeeStatisticsInput = {
  availability?: InputMaybe<Scalars['Decimal']['input']>;
  performance?: InputMaybe<Scalars['Decimal']['input']>;
  quality?: InputMaybe<Scalars['Decimal']['input']>;
  total?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IndustryManufacturingPartialFeedbackInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  employee?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  quantityGood?: InputMaybe<Scalars['Int']['input']>;
  quantityPoor?: InputMaybe<Scalars['Int']['input']>;
  quantityTestParts?: InputMaybe<Scalars['Int']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  syncState?: InputMaybe<IndustryManufacturingFeedbackSyncState>;
  syncTimestamp?: InputMaybe<Scalars['DateTime']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IndustryManufacturingPartialFeedbackInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryManufacturingPartialFeedbackInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryManufacturingProductionOrderInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  state?: InputMaybe<IndustryManufacturingProductionOrderState>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type IndustryManufacturingProductionOrderInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryManufacturingProductionOrderInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryManufacturingProductionOrderItemInput = {
  articleNumber?: InputMaybe<Scalars['String']['input']>;
  articleText?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  cycleTimeForOnePiece?: InputMaybe<Scalars['Int']['input']>;
  itemNumber?: InputMaybe<Scalars['Int']['input']>;
  machine?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  oeeStatistics?: InputMaybe<IndustryManufacturingOeeStatisticsInput>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  plannedQuantity?: InputMaybe<Scalars['Int']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  shiftOrderItems?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  state?: InputMaybe<IndustryManufacturingProductionOrderItemState>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type IndustryManufacturingProductionOrderItemInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryManufacturingProductionOrderItemInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'Industry.Manufacturing/ProductionOrderItemState' */
export type IndustryManufacturingProductionOrderItemState =
  | 'CANCELLED'
  | 'CONFIRMED'
  | 'CREATED'
  | 'DELIVERED'
  | 'INTERRUPTED'
  | 'IN_PROGRESS'
  | 'PAUSED'
  | 'RELEASED'
  | 'TECHNICALLY_COMPLETED';

/** Runtime entities of construction kit enum 'Industry.Manufacturing/ProductionOrderState' */
export type IndustryManufacturingProductionOrderState =
  | 'CANCELLED'
  | 'CONFIRMED'
  | 'CREATED'
  | 'DELIVERED'
  | 'RELEASED'
  | 'TECHNICALLY_COMPLETED';

export type IndustryManufacturingShiftInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type IndustryManufacturingShiftInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryManufacturingShiftInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryManufacturingShiftMachineInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  employees?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  machine?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  oeeStatistics?: InputMaybe<IndustryManufacturingOeeStatisticsInput>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type IndustryManufacturingShiftMachineInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryManufacturingShiftMachineInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryManufacturingShiftOrderItemInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  employees?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  oeeStatistics?: InputMaybe<IndustryManufacturingOeeStatisticsInput>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  productionOrderItem?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  quantityGood?: InputMaybe<Scalars['Int']['input']>;
  quantityPoor?: InputMaybe<Scalars['Int']['input']>;
  quantityTestParts?: InputMaybe<Scalars['Int']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  remainingPlannedQuantity?: InputMaybe<Scalars['Int']['input']>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type IndustryManufacturingShiftOrderItemInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryManufacturingShiftOrderItemInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type IndustryManufacturingShiftTemplateInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type IndustryManufacturingShiftTemplateInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: IndustryManufacturingShiftTemplateInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** State of one handler instance at the time of the query. */
export type MethodHandlerInstanceState =
  /** The announced TTL ran out without a heartbeat. */
  | 'EXPIRED'
  /** Announced, not withdrawn, not expired. */
  | 'LIVE'
  /** Treated as expired because the broker returned a mandatory send (no queue bound). */
  | 'NO_QUEUE_BOUND'
  /** The instance withdrew gracefully. */
  | 'WITHDRAWN';

/** State of a CK method in the handler registry of the answering replica. */
export type MethodHandlerMethodState =
  /** At least one live handler instance, or served in-process. */
  | 'LIVE'
  /** The system tenant defines the method with a service handler, but no instance announced it. */
  | 'NOT_ANNOUNCED'
  /** Handler instances are known, but all are expired, withdrawn or have no queue bound. */
  | 'NO_LIVE_HANDLER';

/** Where the registry row of an instance comes from. */
export type MethodHandlerSource =
  /** Received as an announcement (heartbeat or discovery answer) or withdrawal. */
  | 'HEARTBEAT'
  /** Restored from the persisted snapshot and not yet confirmed by the instance. */
  | 'SNAPSHOT';

/** Transport a CK method is served over. */
export type MethodHandlerTransport =
  /** Message bus: handler instances of other services announce themselves. */
  | 'BUS'
  /** Served in-process by the answering service. */
  | 'IN_PROCESS';

/** Enum of the availability states of models. */
export type ModelState =
  | 'AVAILABLE'
  | 'IMPORTING'
  | 'RESOLVE_FAILED';

/** Enum of valid multiplicities for association roles */
export type Multiplicities =
  | 'N'
  | 'ONE'
  | 'ZERO_OR_ONE';

/** Controls how navigation properties affect the result set. FILTER (default): entities without associations are excluded. INCLUDE: entities without associations are kept; navigation lookups run post-pagination for better performance. */
export type NavigationFilterMode =
  | 'FILTER'
  | 'INCLUDE';

export type NearGeospatialFilter = {
  attributeName: Scalars['String']['input'];
  maxDistance?: InputMaybe<Scalars['Float']['input']>;
  minDistance?: InputMaybe<Scalars['Float']['input']>;
  point: PointInput;
};

export type OctoSdkDemoCustomerInput = {
  bankAccount?: InputMaybe<BasicBankAccountInput>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  contact?: InputMaybe<BasicContactInput>;
  contractDocument?: InputMaybe<Scalars['LargeBinary']['input']>;
  customerStatus?: InputMaybe<OctoSdkDemoCustomerStatus>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  notes?: InputMaybe<Array<InputMaybe<OctoSdkDemoCustomerNoteInput>>>;
  owns?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  phoneNumberLandLine?: InputMaybe<Scalars['String']['input']>;
  phoneNumberMobile?: InputMaybe<Scalars['String']['input']>;
  profilePicture?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type OctoSdkDemoCustomerInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: OctoSdkDemoCustomerInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type OctoSdkDemoCustomerNoteInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

/** Runtime entities of construction kit enum 'OctoSdkDemo/CustomerStatus' */
export type OctoSdkDemoCustomerStatus =
  | 'ACTIVE'
  | 'PENDING'
  | 'SUSPENDED';

export type OctoSdkDemoMeteringPointInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  dataTransmissionInterval?: InputMaybe<Scalars['Seconds']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  meterReading?: InputMaybe<Scalars['Int']['input']>;
  meteringPointNumber?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  networkOperator?: InputMaybe<OctoSdkDemoNetworkOperator>;
  operatingStatus?: InputMaybe<OctoSdkDemoOperatingStatus>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type OctoSdkDemoMeteringPointInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: OctoSdkDemoMeteringPointInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'OctoSdkDemo/NetworkOperator' */
export type OctoSdkDemoNetworkOperator =
  | 'UNKNOWN';

export type OctoSdkDemoOperatingFacilityInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  ownedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type OctoSdkDemoOperatingFacilityInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: OctoSdkDemoOperatingFacilityInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'OctoSdkDemo/OperatingStatus' */
export type OctoSdkDemoOperatingStatus =
  | 'MAINTENANCE'
  | 'OK'
  | 'UNKNOWN';

export type PointInput = {
  coordinates: PositionInput;
};

export type PositionInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

/** Defines the kind of query to be executed */
export type QueryMode =
  | 'DEFAULT'
  | 'DOWNSAMPLING'
  | 'INTERPOLATION';

/** Identifies a logical series (base archive + optional rtId/OBIS scope), a time window, a target point count and the required aggregation. The server picks the archive/rollup to query. */
export type ResolveSeriesQueryInput = {
  /** Runtime id of the base (raw / time-range) archive of the series' resolution family. */
  baseArchiveRtId: Scalars['OctoObjectId']['input'];
  /** How civil boundaries are resolved across mixed-timezone series (AB#4190). PerQuery (default) applies the query timeZone uniformly; PerSeries aligns each series to its own archive reference time zone. */
  comparisonPolicy?: InputMaybe<SeriesComparisonPolicy>;
  /** Inclusive start of the query window (UTC). */
  from: Scalars['DateTime']['input'];
  /** Aggregation the series must be reduced with (energy = SUM, demand = MAX, …). Never guessed; supplied by the caller. */
  requiredAggregation: CkRollupFunction;
  /** Optional source-entity rtId scope narrowing the series to a subset of source entities. Forwarded by the caller to the downsampling query. */
  rtIds?: InputMaybe<Array<Scalars['OctoObjectId']['input']>>;
  /** Logical CK attribute path of the measured column (e.g. Amount.Value) — used to match a rollup's aggregation spec. */
  sourcePath: Scalars['String']['input'];
  /** Desired number of output points (pixel-driven, ~600 typical). Must be positive. */
  targetPoints: Scalars['Int']['input'];
  /** Optional IANA time zone (e.g. Europe/Vienna) the query is resolved in (AB#4190). Aligns calendar (day/week/month/year) rungs to that zone's DST-correct civil boundaries; null ⇒ UTC. Sub-day rungs are unaffected. */
  timeZone?: InputMaybe<Scalars['String']['input']>;
  /** Exclusive end of the query window (UTC). */
  to: Scalars['DateTime']['input'];
};

export type ResultAggregationInput = {
  avgAttributePaths?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  countAttributePaths?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupBy?: InputMaybe<FieldGroupByAggregationInput>;
  maxValueAttributePaths?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  minValueAttributePaths?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sumAttributePaths?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** One aggregation: source-path on the source archive plus the aggregation function and optional explicit column name. */
export type RollupAggregationInput = {
  /** State literal a STATE_DURATION aggregation matches the source column against — a number ('2', '100'), a boolean ('true'/'false') or a string state name. Required for STATE_DURATION; ignored for every other function. */
  comparisonValue?: InputMaybe<Scalars['String']['input']>;
  /** Aggregation function (AVG materialises as two columns: {base}_sum and {base}_count). */
  function: CkRollupFunction;
  /** Attribute path on the source archive (must resolve against its captured Columns at activation time). */
  sourcePath: Scalars['String']['input'];
  /** Optional explicit storage column name. Null falls back to '{sourcePath}_{function}' lower-cased. */
  targetColumnName?: InputMaybe<Scalars['String']['input']>;
};

/** Input field for associations */
export type RtAssociationInput = {
  /** Type of modification. */
  modOption?: InputMaybe<AssociationModOptions>;
  /** Runtime ID of the target entity */
  target: RtEntityId;
};

/** Input for modifying associations on a runtime entity */
export type RtEntityAssociationInput = {
  /** Name of the association role or navigation property */
  roleName: Scalars['String']['input'];
  /** List of target entities to associate */
  targets: Array<InputMaybe<RtAssociationInput>>;
};

/** Attribute of a runtime entity */
export type RtEntityAttributeInput = {
  /** Attribute name within the entity. */
  attributeName?: InputMaybe<Scalars['String']['input']>;
  /** Accepted and ignored, so a client can send back what it read. Clearing a secret is only possible with 'clearSecretAttributes'. */
  secretIsSet?: InputMaybe<Scalars['Boolean']['input']>;
  /** Accepted and ignored, so a client can send back what it read. */
  secretKeyMissing?: InputMaybe<Scalars['Boolean']['input']>;
  /** Accepted and ignored, so a client can send back what it read. */
  secretSetAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Value of a scalar attribute. For a Secret attribute a non-empty string sets the secret; null, an empty string or an omitted value keep it unchanged. */
  value?: InputMaybe<Scalars['SimpleScalar']['input']>;
};

/** Id information consists of CkTypeId and RtId */
export type RtEntityId = {
  /** Construction kit type id of the object. */
  ckTypeId: Scalars['RtCkTypeId']['input'];
  /** Unique id of the object. */
  rtId: Scalars['OctoObjectId']['input'];
};

export type RtEntityInput = {
  /** Associations to create or modify on this entity */
  associations?: InputMaybe<Array<InputMaybe<RtEntityAssociationInput>>>;
  attributes: Array<InputMaybe<RtEntityAttributeInput>>;
  ckTypeId: Scalars['RtCkTypeId']['input'];
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type RtEntityUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item?: InputMaybe<RtEntityInput>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Represents the input for a cell a row within a runtime query. */
export type RtQueryCellInput = {
  /** Path of the attribute within an entity. */
  attributePath?: InputMaybe<Scalars['String']['input']>;
  /** Value of the cell. */
  value?: InputMaybe<Scalars['SimpleScalar']['input']>;
};

export type RtQueryColumnInput = {
  aggregationType: AggregationInputTypes;
  attributePath: Scalars['String']['input'];
};

export type RtQueryRowInput = {
  cells: Array<InputMaybe<RtQueryCellInput>>;
  ckTypeId: Scalars['RtCkTypeId']['input'];
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
};

export type RtQueryRowUpdate = {
  /** Row as input to be updated within the query. */
  item?: InputMaybe<RtQueryRowInput>;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SearchFilter = {
  attributePaths?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  searchTerm: Scalars['String']['input'];
  type?: InputMaybe<SearchFilterTypes>;
};

/** The type of search that is used (a text based search using text analysis (high performance, scoring, maybe more false positives) or filtering of attributes (lower performance, more exact results) */
export type SearchFilterTypes =
  | 'ATTRIBUTE_FILTER'
  | 'TEXT_SEARCH';

/** Storage form of a secret value. Never the value. */
export type SecretStorageForm =
  /** Stored value cannot be parsed (reads as not set, warning logged). */
  | 'CORRUPT'
  /** Legacy enc:v1 (instance key). */
  | 'ENC_V1'
  /** Protected, key id known. */
  | 'ENC_V2'
  /** Protected, key id not in this environment's key ring. */
  | 'KEY_MISSING'
  /** Null or missing. */
  | 'NOT_SET'
  /** Legacy clear text still stored (before the Encrypt sweep). */
  | 'PLAINTEXT';

/** How a RevealSecret@1 node refers to a secret. */
export type SecretUsageMatch =
  /** The node resolves the entity at run time (rtIdPath) on the same CK type and attribute. */
  | 'BY_TYPE'
  /** The node names the CK type, rtId and attribute of the secret. */
  | 'EXACT';

/** Civil-boundary policy for a series query that spans multiple reference time zones (AB#4190). */
export type SeriesComparisonPolicy =
  | 'PER_QUERY'
  | 'PER_SERIES';

/** Outcome of resolution-aware series routing. Non-Ok values are truthful signals the caller can surface — the resolver never silently produces a wrong or degraded result. CoverageLimited (AB#5157): a finer rung was skipped for lacking measured coverage over the requested window. */
export type SeriesResolutionSignal =
  | 'COVERAGE_LIMITED'
  | 'EMPTY_LADDER'
  | 'NO_SUITABLE_ROLLUP'
  | 'OK'
  | 'RESOLUTION_LIMITED'
  | 'UNKNOWN_BASE_GRAIN';

export type Sort = {
  attributePath: Scalars['String']['input'];
  sortOrder?: InputMaybe<SortOrders>;
};

/** Defines the sort order */
export type SortOrders =
  | 'ASCENDING'
  | 'DEFAULT'
  | 'DESCENDING';

export type StreamDataArguments = {
  from?: InputMaybe<Scalars['DateTime']['input']>;
  interval?: InputMaybe<Scalars['Seconds']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  queryMode: QueryMode;
  /** Override the source runtime ids the query is scoped to. When supplied, replaces the persisted RtIds (used to scope a widget to the entities resolved from a selected asset). */
  rtIds?: InputMaybe<Array<InputMaybe<Scalars['OctoObjectId']['input']>>>;
  to?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StreamDataQueryColumnInput = {
  aggregationType: AggregationType;
  attributePath: Scalars['String']['input'];
  /** State literal a STATE_DURATION column matches the attribute against (number / true / false / string). Required for STATE_DURATION; ignored otherwise. */
  comparisonValue?: InputMaybe<Scalars['String']['input']>;
};

export type SystemAggregationQueryColumnInput = {
  aggregationType?: InputMaybe<SystemAggregationTypes>;
  attributePath?: InputMaybe<Scalars['String']['input']>;
  comparisonValue?: InputMaybe<Scalars['String']['input']>;
};

export type SystemAggregationRtQueryInput = {
  attributeSearchFilter?: InputMaybe<SystemAttributeSearchFilterInput>;
  columns?: InputMaybe<Array<InputMaybe<SystemAggregationQueryColumnInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<SystemFieldFilterInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  navigationFilterMode?: InputMaybe<SystemNavigationFilterModes>;
  notificationSubscriptions?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  queryCkTypeId?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  textSearchFilter?: InputMaybe<SystemTextSearchFilterInput>;
};

export type SystemAggregationRtQueryInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemAggregationRtQueryInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemAggregationSdQueryInput = {
  archiveRtId?: InputMaybe<Scalars['String']['input']>;
  columns?: InputMaybe<Array<InputMaybe<SystemAggregationQueryColumnInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<SystemFieldFilterInput>>>;
  from?: InputMaybe<Scalars['DateTime']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  navigationFilterMode?: InputMaybe<SystemNavigationFilterModes>;
  notificationSubscriptions?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  queryCkTypeId?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtIds?: InputMaybe<Array<Scalars['String']['input']>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  to?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SystemAggregationSdQueryInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemAggregationSdQueryInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System/AggregationTypes' */
export type SystemAggregationTypes =
  /** Calculates the average value */
  | 'AVERAGE'
  /** Counts the number of items */
  | 'COUNT'
  /** Step integral of a numeric event-based signal over the half-open query window [from, to), in value unit x hours (kW gives kWh, W gives Wh). Last observation carried forward - each value holds until the next row of the same entity or the window end, and the last row before the window opens it (looked up at most 35 days back; an older row is not carried, so a window without rows then yields null). Several entities in scope are summed; an empty window, or one whose rows all carry no value, yields null; from and to are required. Served over raw event archives at query time (rollup archives with a TimeWeightedAvg aggregation follow in AB#7920). AB#7918. */
  | 'INTEGRAL'
  /** Finds the maximum value */
  | 'MAXIMUM'
  /** Finds the minimum value */
  | 'MINIMUM'
  /** Absolute time (milliseconds) an event-based signal held the column's ComparisonValue within the query window, with last-observation-carried-forward semantics. Requires AggregationQueryColumn.ComparisonValue. Supported over raw event archives and rollup archives that materialise a StateDuration aggregation. AB#4336/AB#4341. */
  | 'STATE_DURATION'
  /** Calculates the sum of values */
  | 'SUM'
  /** Time-weighted average with last-observation-carried-forward interval weighting, for event-based archives. Yields the duty cycle on 0/100 or boolean-like signals. Resolvable against rollup archives that materialise a TimeWeightedAvg aggregation. AB#4336. */
  | 'TIME_WEIGHTED_AVERAGE';

export type SystemAiAiAgentConfigInput = {
  authMode?: InputMaybe<SystemAiAuthMode>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  defaultModel?: InputMaybe<SystemAiModelTier>;
  devBridgeEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  hibernationIdleMinutes?: InputMaybe<Scalars['Int']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  subscriptionScope?: InputMaybe<SystemAiSubscriptionScope>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  workerImageTag?: InputMaybe<Scalars['String']['input']>;
  workspaceMode?: InputMaybe<SystemAiWorkspaceMode>;
};

export type SystemAiAiAgentConfigInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemAiAiAgentConfigInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemAiAiAgentJobInput = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  goal?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  ownedByAiResource?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<SystemAiJobStatus>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemAiAiAgentJobInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemAiAiAgentJobInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemAiAiAgentSessionInput = {
  aiResources?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  baseBranch?: InputMaybe<Scalars['String']['input']>;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  goalSummary?: InputMaybe<Scalars['String']['input']>;
  jobKind?: InputMaybe<SystemAiJobKind>;
  lastEventSequence?: InputMaybe<Scalars['Int']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  ownerUserId?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  sourceRepo?: InputMaybe<Scalars['String']['input']>;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<SystemAiSessionStatus>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  tokensConsumed?: InputMaybe<Scalars['Int']['input']>;
  workspaceBranchRef?: InputMaybe<Scalars['String']['input']>;
  workspaceWorktreePath?: InputMaybe<Scalars['String']['input']>;
};

export type SystemAiAiAgentSessionInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemAiAiAgentSessionInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemAiAiApprovalRequestInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  decidedAt?: InputMaybe<Scalars['DateTime']['input']>;
  decidedBy?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  payload?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<SystemAiApprovalReason>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SystemAiApprovalStatus>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  toolName?: InputMaybe<Scalars['String']['input']>;
};

export type SystemAiAiApprovalRequestInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemAiAiApprovalRequestInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemAiAiAuditEventInput = {
  actorRef?: InputMaybe<Scalars['String']['input']>;
  at?: InputMaybe<Scalars['DateTime']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  detail?: InputMaybe<Scalars['String']['input']>;
  eventType?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  targetRef?: InputMaybe<Scalars['String']['input']>;
};

export type SystemAiAiAuditEventInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemAiAiAuditEventInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemAiAiCredentialBindingInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  encryptedValue?: InputMaybe<Scalars['String']['input']>;
  kind?: InputMaybe<SystemAiCredentialKind>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemAiAiCredentialBindingInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemAiAiCredentialBindingInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemAiAiCredentialTicketInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  issuedByUserId?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<SystemAiTicketScope>;
  status?: InputMaybe<SystemAiTicketStatus>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemAiAiCredentialTicketInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemAiAiCredentialTicketInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemAiAiKnowledgeSourceInput = {
  appliesToScopes?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  kind?: InputMaybe<SystemAiKnowledgeKind>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  path?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemAiAiKnowledgeSourceInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemAiAiKnowledgeSourceInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemAiAiPromptTemplateInput = {
  appliesTo?: InputMaybe<SystemAiJobKind>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  exampleGoals?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  systemPromptFragment?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemAiAiPromptTemplateInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemAiAiPromptTemplateInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemAiAiQuotaLimitInput = {
  concurrentJobs?: InputMaybe<Scalars['Int']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  costCapMonthlyEUR?: InputMaybe<Scalars['Decimal']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  maxSessionDurationMinutes?: InputMaybe<Scalars['Int']['input']>;
  maxSessionsQueued?: InputMaybe<Scalars['Int']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  tokensPerDay?: InputMaybe<Scalars['Int']['input']>;
  tokensPerJob?: InputMaybe<Scalars['Int']['input']>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemAiAiQuotaLimitInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemAiAiQuotaLimitInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemAiAiSessionEventInput = {
  actorRef?: InputMaybe<Scalars['String']['input']>;
  at?: InputMaybe<Scalars['DateTime']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  kind?: InputMaybe<SystemAiSessionEventKind>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  payload?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  sequence?: InputMaybe<Scalars['Int']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemAiAiSessionEventInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemAiAiSessionEventInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemAiAiTokenLeaseInput = {
  accessExpiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  accessToken?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  generation?: InputMaybe<Scalars['Int']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rateLimitTier?: InputMaybe<Scalars['String']['input']>;
  refreshExpiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  scopes?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SystemAiLeaseStatus>;
  subscriptionType?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  trustedDeviceToken?: InputMaybe<Scalars['String']['input']>;
};

export type SystemAiAiTokenLeaseInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemAiAiTokenLeaseInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemAiAiToolPolicyInput = {
  approvalMode?: InputMaybe<SystemAiApprovalMode>;
  approvalTimeoutMinutes?: InputMaybe<Scalars['Int']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  conflictMode?: InputMaybe<SystemAiConflictMode>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  risk?: InputMaybe<SystemAiRiskLevel>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  toolName?: InputMaybe<Scalars['String']['input']>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemAiAiToolPolicyInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemAiAiToolPolicyInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemAiAiUsageRecordInput = {
  at?: InputMaybe<Scalars['DateTime']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  costCents?: InputMaybe<Scalars['Decimal']['input']>;
  inputTokens?: InputMaybe<Scalars['Int']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  model?: InputMaybe<Scalars['String']['input']>;
  outputTokens?: InputMaybe<Scalars['Int']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  sessionRef?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemAiAiUsageRecordInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemAiAiUsageRecordInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System.Ai/ApprovalMode' */
export type SystemAiApprovalMode =
  | 'AUTO'
  | 'DISABLED'
  | 'REQUIRED';

/** Runtime entities of construction kit enum 'System.Ai/ApprovalReason' */
export type SystemAiApprovalReason =
  | 'CONFLICT'
  | 'MANUAL'
  | 'QUOTA_OVERRIDE'
  | 'RISK';

/** Runtime entities of construction kit enum 'System.Ai/ApprovalStatus' */
export type SystemAiApprovalStatus =
  | 'APPROVED'
  | 'PENDING'
  | 'REJECTED'
  | 'TIMED_OUT';

/** Runtime entities of construction kit enum 'System.Ai/AuthMode' */
export type SystemAiAuthMode =
  | 'BYO_KEY'
  | 'CENTRAL_KEY'
  | 'SUBSCRIPTION';

/** Runtime entities of construction kit enum 'System.Ai/ConflictMode' */
export type SystemAiConflictMode =
  | 'ALWAYS_APPROVE'
  | 'AUTO_RETRY'
  | 'RETRY_THEN_APPROVE';

/** Runtime entities of construction kit enum 'System.Ai/CredentialKind' */
export type SystemAiCredentialKind =
  | 'DEV_SSH_AUTHORIZED_KEY'
  | 'ENV_SECRET'
  | 'GIT_HUB_PAT'
  | 'SSH_KEY';

/** Runtime entities of construction kit enum 'System.Ai/JobKind' */
export type SystemAiJobKind =
  | 'ADMIN'
  | 'APPLICATION'
  | 'BLUEPRINT_AUTHORING'
  | 'DATA_MODEL'
  | 'FREE_FORM'
  | 'PIPELINE'
  | 'RUNTIME_DATA';

/** Runtime entities of construction kit enum 'System.Ai/JobStatus' */
export type SystemAiJobStatus =
  | 'ACTIVE'
  | 'CANCELLED'
  | 'COMPLETED'
  | 'FAILED';

/** Runtime entities of construction kit enum 'System.Ai/KnowledgeKind' */
export type SystemAiKnowledgeKind =
  | 'CLAUDE_MD'
  | 'MCP_RESOURCE'
  | 'RAG_DOC'
  | 'URL';

/** Runtime entities of construction kit enum 'System.Ai/LeaseStatus' */
export type SystemAiLeaseStatus =
  | 'ACTIVE'
  | 'EXPIRED'
  | 'REFRESH_FAILED'
  | 'REVOKED';

/** Runtime entities of construction kit enum 'System.Ai/ModelTier' */
export type SystemAiModelTier =
  | 'HAIKU'
  | 'OPUS'
  | 'SONNET';

/** Runtime entities of construction kit enum 'System.Ai/RiskLevel' */
export type SystemAiRiskLevel =
  | 'HIGH'
  | 'LOW'
  | 'MEDIUM';

/** Runtime entities of construction kit enum 'System.Ai/SessionEventKind' */
export type SystemAiSessionEventKind =
  | 'ERROR'
  | 'HOOK'
  | 'MESSAGE'
  | 'STATUS_CHANGE'
  | 'TOOL_CALL'
  | 'TOOL_RESULT';

/** Runtime entities of construction kit enum 'System.Ai/SessionStatus' */
export type SystemAiSessionStatus =
  | 'CANCELLED'
  | 'COMPLETED'
  | 'FAILED'
  | 'PAUSED'
  | 'QUEUED'
  | 'QUOTA_BLOCKED'
  | 'RATE_LIMITED'
  | 'RUNNING';

/** Runtime entities of construction kit enum 'System.Ai/SubscriptionScope' */
export type SystemAiSubscriptionScope =
  | 'MESHMAKERS_POOL'
  | 'PER_USER'
  | 'SERVICE_ACCOUNT';

/** Runtime entities of construction kit enum 'System.Ai/TicketScope' */
export type SystemAiTicketScope =
  | 'CREDENTIAL_REGISTER'
  | 'DEV_SSH_KEY_REGISTER';

/** Runtime entities of construction kit enum 'System.Ai/TicketStatus' */
export type SystemAiTicketStatus =
  | 'EXPIRED'
  | 'OPEN'
  | 'REDEEMED';

/** Runtime entities of construction kit enum 'System.Ai/WorkspaceMode' */
export type SystemAiWorkspaceMode =
  | 'PERSISTENT_HIBERNATING'
  | 'PER_SESSION'
  | 'POOL';

export type SystemAttributeSearchFilterInput = {
  attributePaths?: InputMaybe<Array<Scalars['String']['input']>>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
};

export type SystemAutoIncrementInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  currentValue?: InputMaybe<Scalars['Int']['input']>;
  end?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemAutoIncrementInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemAutoIncrementInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemBlueprintBackupInput = {
  blueprintName?: InputMaybe<Scalars['String']['input']>;
  blueprintVersion?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  snapshotJson?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemBlueprintBackupInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemBlueprintBackupInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemBlueprintHistoryInput = {
  applicationMode?: InputMaybe<Scalars['String']['input']>;
  appliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  blueprintName?: InputMaybe<Scalars['String']['input']>;
  blueprintVersion?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  entitiesCreated?: InputMaybe<Scalars['Int']['input']>;
  entitiesDeleted?: InputMaybe<Scalars['Int']['input']>;
  entitiesUpdated?: InputMaybe<Scalars['Int']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  previousBlueprintName?: InputMaybe<Scalars['String']['input']>;
  previousVersion?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  seedDataChecksum?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemBlueprintHistoryInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemBlueprintHistoryInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemBlueprintInstallationInput = {
  blueprintName?: InputMaybe<Scalars['String']['input']>;
  blueprintVersion?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  installedAt?: InputMaybe<Scalars['DateTime']['input']>;
  isDependency?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  resolvedDependencies?: InputMaybe<Array<Scalars['String']['input']>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  seedDataChecksum?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemBlueprintInstallationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemBlueprintInstallationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemBotAttributeAggregateConfigurationInput = {
  autoCompleteFilter?: InputMaybe<Scalars['String']['input']>;
  autoCompleteLimit?: InputMaybe<Scalars['Int']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configures?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  isAutoCompleteEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemBotAttributeAggregateConfigurationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemBotAttributeAggregateConfigurationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemBotFixupInput = {
  appliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  error?: InputMaybe<Scalars['String']['input']>;
  isApplied?: InputMaybe<Scalars['Boolean']['input']>;
  isSuccess?: InputMaybe<Scalars['Boolean']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  output?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  script?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemBotFixupInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemBotFixupInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationAdapterInput = {
  chartName?: InputMaybe<Scalars['String']['input']>;
  chartVersion?: InputMaybe<Scalars['String']['input']>;
  communicationState?: InputMaybe<SystemCommunicationCommunicationState>;
  communicationStateTimestamp?: InputMaybe<Scalars['DateTime']['input']>;
  configuration?: InputMaybe<Scalars['String']['input']>;
  configurationState?: InputMaybe<SystemCommunicationConfigurationState>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  consecutiveStatusFailures?: InputMaybe<Scalars['Int']['input']>;
  deploymentState?: InputMaybe<SystemCommunicationDeploymentState>;
  description?: InputMaybe<Scalars['String']['input']>;
  executes?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  executingAdapter?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  helmRepository?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  hostedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  hostname?: InputMaybe<Scalars['String']['input']>;
  idleTimeoutMinutes?: InputMaybe<Scalars['Int']['input']>;
  ingressEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  lastActivityAt?: InputMaybe<Scalars['DateTime']['input']>;
  lastConfigurationError?: InputMaybe<Scalars['String']['input']>;
  lastConfigurationErrorTimestamp?: InputMaybe<Scalars['DateTime']['input']>;
  lastDeploymentError?: InputMaybe<Scalars['String']['input']>;
  lastDeploymentErrorTimestamp?: InputMaybe<Scalars['DateTime']['input']>;
  lastSuccessfulStatusAt?: InputMaybe<Scalars['DateTime']['input']>;
  lastSyncedSequenceNumber?: InputMaybe<Scalars['Int']['input']>;
  lentFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  lifecycleMode?: InputMaybe<SystemCommunicationLifecycleMode>;
  lifecycleState?: InputMaybe<SystemCommunicationLifecycleState>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  onDemandBlockingReasons?: InputMaybe<Scalars['String']['input']>;
  onDemandCapable?: InputMaybe<Scalars['Boolean']['input']>;
  pipelineServiceAccount?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  receivesClusterSecrets?: InputMaybe<Scalars['Boolean']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  statusMessage?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  values?: InputMaybe<Array<InputMaybe<SystemCommunicationValueOverrideInput>>>;
  valuesYaml?: InputMaybe<Scalars['String']['input']>;
};

export type SystemCommunicationAdapterInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationAdapterInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationAdapterPoolInput = {
  chartName?: InputMaybe<Scalars['String']['input']>;
  chartVersion?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  consecutiveStatusFailures?: InputMaybe<Scalars['Int']['input']>;
  deploymentState?: InputMaybe<SystemCommunicationDeploymentState>;
  description?: InputMaybe<Scalars['String']['input']>;
  helmRepository?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  hostedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  hostname?: InputMaybe<Scalars['String']['input']>;
  idleTimeoutMinutes?: InputMaybe<Scalars['Int']['input']>;
  ingressEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  lastActivityAt?: InputMaybe<Scalars['DateTime']['input']>;
  lastDeploymentError?: InputMaybe<Scalars['String']['input']>;
  lastDeploymentErrorTimestamp?: InputMaybe<Scalars['DateTime']['input']>;
  lastSuccessfulStatusAt?: InputMaybe<Scalars['DateTime']['input']>;
  lendingAllowedTenantIds?: InputMaybe<Array<Scalars['String']['input']>>;
  lendingMaxConcurrentLeasesPerTenant?: InputMaybe<Scalars['Int']['input']>;
  lifecycleMode?: InputMaybe<SystemCommunicationLifecycleMode>;
  lifecycleState?: InputMaybe<SystemCommunicationLifecycleState>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  maxReplicas?: InputMaybe<Scalars['Int']['input']>;
  minReplicas?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  onDemandBlockingReasons?: InputMaybe<Scalars['String']['input']>;
  onDemandCapable?: InputMaybe<Scalars['Boolean']['input']>;
  poolMemberCpuLimit?: InputMaybe<Scalars['String']['input']>;
  poolMemberCpuRequest?: InputMaybe<Scalars['String']['input']>;
  poolMemberMemoryLimit?: InputMaybe<Scalars['String']['input']>;
  poolMemberMemoryRequest?: InputMaybe<Scalars['String']['input']>;
  poolServiceAccount?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  receivesClusterSecrets?: InputMaybe<Scalars['Boolean']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  scaleUpPolicy?: InputMaybe<SystemCommunicationPoolScaleUpPolicy>;
  scaleUpQueueDepthThreshold?: InputMaybe<Scalars['Int']['input']>;
  scaleUpQueueWaitSeconds?: InputMaybe<Scalars['Int']['input']>;
  sharingMode?: InputMaybe<SystemCommunicationAdapterSharingMode>;
  statusMessage?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  values?: InputMaybe<Array<InputMaybe<SystemCommunicationValueOverrideInput>>>;
  valuesYaml?: InputMaybe<Scalars['String']['input']>;
};

export type SystemCommunicationAdapterPoolInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationAdapterPoolInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System.Communication/AdapterSharingMode' */
export type SystemCommunicationAdapterSharingMode =
  | 'DESCENDANTS'
  | 'DESCENDANTS_AND_SIBLINGS'
  | 'NOT_SHARED';

export type SystemCommunicationAiConfigurationInput = {
  aiModel?: InputMaybe<Scalars['String']['input']>;
  apiKey?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  maxTokens?: InputMaybe<Scalars['Int']['input']>;
  mcpServerUrl?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  temperature?: InputMaybe<Scalars['Decimal']['input']>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemCommunicationAiConfigurationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationAiConfigurationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationApplicationInput = {
  chartName?: InputMaybe<Scalars['String']['input']>;
  chartVersion?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  consecutiveStatusFailures?: InputMaybe<Scalars['Int']['input']>;
  deploymentState?: InputMaybe<SystemCommunicationDeploymentState>;
  description?: InputMaybe<Scalars['String']['input']>;
  helmRepository?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  hostedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  hostname?: InputMaybe<Scalars['String']['input']>;
  idleTimeoutMinutes?: InputMaybe<Scalars['Int']['input']>;
  ingressEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  lastActivityAt?: InputMaybe<Scalars['DateTime']['input']>;
  lastDeploymentError?: InputMaybe<Scalars['String']['input']>;
  lastDeploymentErrorTimestamp?: InputMaybe<Scalars['DateTime']['input']>;
  lastSuccessfulStatusAt?: InputMaybe<Scalars['DateTime']['input']>;
  lifecycleMode?: InputMaybe<SystemCommunicationLifecycleMode>;
  lifecycleState?: InputMaybe<SystemCommunicationLifecycleState>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  onDemandBlockingReasons?: InputMaybe<Scalars['String']['input']>;
  onDemandCapable?: InputMaybe<Scalars['Boolean']['input']>;
  receivesClusterSecrets?: InputMaybe<Scalars['Boolean']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  statusMessage?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  values?: InputMaybe<Array<InputMaybe<SystemCommunicationValueOverrideInput>>>;
  valuesYaml?: InputMaybe<Scalars['String']['input']>;
};

export type SystemCommunicationApplicationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationApplicationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System.Communication/CommunicationState' */
export type SystemCommunicationCommunicationState =
  | 'OFFLINE'
  | 'ONLINE'
  | 'UNREGISTERED';

/** Runtime entities of construction kit enum 'System.Communication/ConfigurationState' */
export type SystemCommunicationConfigurationState =
  | 'CONFIGURED'
  | 'ERROR'
  | 'PENDING'
  | 'UNCONFIGURED';

export type SystemCommunicationDataFlowInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemCommunicationDataFlowInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationDataFlowInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationDataPointInput = {
  currentValue?: InputMaybe<Scalars['String']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  lastUpdate?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SystemCommunicationDataPointMappingInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  mappedAsSource?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mappedAsTarget?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mappingExpression?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  sourceAttributePath?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  targetAttributePath?: InputMaybe<Scalars['String']['input']>;
};

export type SystemCommunicationDataPointMappingInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationDataPointMappingInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationDeploymentSiteInput = {
  communicationState?: InputMaybe<SystemCommunicationCommunicationState>;
  communicationStateTimestamp?: InputMaybe<Scalars['DateTime']['input']>;
  configurationState?: InputMaybe<SystemCommunicationConfigurationState>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  consecutiveStatusFailures?: InputMaybe<Scalars['Int']['input']>;
  deploymentState?: InputMaybe<SystemCommunicationDeploymentState>;
  description?: InputMaybe<Scalars['String']['input']>;
  environment?: InputMaybe<SystemCommunicationEnvironment>;
  hosts?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  lastConfigurationError?: InputMaybe<Scalars['String']['input']>;
  lastConfigurationErrorTimestamp?: InputMaybe<Scalars['DateTime']['input']>;
  lastDeploymentError?: InputMaybe<Scalars['String']['input']>;
  lastDeploymentErrorTimestamp?: InputMaybe<Scalars['DateTime']['input']>;
  lastSuccessfulStatusAt?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  statusMessage?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemCommunicationDeploymentSiteInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationDeploymentSiteInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System.Communication/DeploymentState' */
export type SystemCommunicationDeploymentState =
  | 'DEPLOYED'
  | 'DISABLED'
  | 'ERROR'
  | 'PENDING'
  | 'UNDEPLOYED';

export type SystemCommunicationDiscordConfigurationInput = {
  botToken?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  guildId?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemCommunicationDiscordConfigurationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationDiscordConfigurationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationEMailReceiverConfigurationInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  folder?: InputMaybe<Scalars['String']['input']>;
  host?: InputMaybe<Scalars['String']['input']>;
  isSslEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  port?: InputMaybe<Scalars['Int']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type SystemCommunicationEMailReceiverConfigurationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationEMailReceiverConfigurationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationEMailSenderConfigurationInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  host?: InputMaybe<Scalars['String']['input']>;
  isSslEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  port?: InputMaybe<Scalars['Int']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  senderEmail?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type SystemCommunicationEMailSenderConfigurationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationEMailSenderConfigurationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationEdaConfigurationInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  notificationEmailContact?: InputMaybe<Scalars['String']['input']>;
  partnerId?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemCommunicationEdaConfigurationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationEdaConfigurationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationEnergyCommunityConfigurationInput = {
  appHeading?: InputMaybe<Scalars['String']['input']>;
  appTitle?: InputMaybe<Scalars['String']['input']>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  bankAccountHolder?: InputMaybe<Scalars['String']['input']>;
  bankAccountIban?: InputMaybe<Scalars['String']['input']>;
  billingMailServerConfiguration?: InputMaybe<Scalars['String']['input']>;
  billingReportFilePrefix?: InputMaybe<Scalars['String']['input']>;
  billingReportName?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<SystemCommunicationUiThemeColorsInput>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  consumerPrice?: InputMaybe<Scalars['Decimal']['input']>;
  consumptionRecordRequestDelay?: InputMaybe<Scalars['Int']['input']>;
  emailFooterImage?: InputMaybe<Scalars['LargeBinary']['input']>;
  energyCommunityId?: InputMaybe<Scalars['String']['input']>;
  farmerTaxRate?: InputMaybe<Scalars['Decimal']['input']>;
  favicon?: InputMaybe<Scalars['LargeBinary']['input']>;
  footerGradientEnd?: InputMaybe<Scalars['String']['input']>;
  footerGradientStart?: InputMaybe<Scalars['String']['input']>;
  footerLogo?: InputMaybe<Scalars['LargeBinary']['input']>;
  headerGradientEnd?: InputMaybe<Scalars['String']['input']>;
  headerGradientStart?: InputMaybe<Scalars['String']['input']>;
  headerLogo?: InputMaybe<Scalars['LargeBinary']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  notificationEmailContact?: InputMaybe<Scalars['String']['input']>;
  partnerId?: InputMaybe<Scalars['String']['input']>;
  producerPrice?: InputMaybe<Scalars['Decimal']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  taxRate?: InputMaybe<Scalars['Decimal']['input']>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemCommunicationEnergyCommunityConfigurationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationEnergyCommunityConfigurationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System.Communication/Environment' */
export type SystemCommunicationEnvironment =
  | 'CLOUD'
  | 'EDGE';

export type SystemCommunicationFinApiConfigurationInput = {
  baseUrl?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  clientSecret?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  isSandbox?: InputMaybe<Scalars['Boolean']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type SystemCommunicationFinApiConfigurationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationFinApiConfigurationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationGrafanaConfigurationInput = {
  adminPassword?: InputMaybe<Scalars['String']['input']>;
  adminUser?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  grafanaUrl?: InputMaybe<Scalars['String']['input']>;
  identityServerUrl?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  oAuthClientId?: InputMaybe<Scalars['String']['input']>;
  octoMeshUrl?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemCommunicationGrafanaConfigurationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationGrafanaConfigurationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System.Communication/HelmChannel' */
export type SystemCommunicationHelmChannel =
  | 'DEV'
  | 'RELEASE';

export type SystemCommunicationHelmRepositoryConfigurationInput = {
  channel?: InputMaybe<SystemCommunicationHelmChannel>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  helmRepositoryUsedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  purpose?: InputMaybe<SystemCommunicationHelmRepositoryPurpose>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  repositoryUrl?: InputMaybe<Scalars['String']['input']>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type SystemCommunicationHelmRepositoryConfigurationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationHelmRepositoryConfigurationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System.Communication/HelmRepositoryPurpose' */
export type SystemCommunicationHelmRepositoryPurpose =
  | 'ADAPTERS'
  | 'APPLICATIONS';

export type SystemCommunicationLenderReferenceInput = {
  lenderAdapterPoolRtId?: InputMaybe<Scalars['String']['input']>;
  lenderTenantId?: InputMaybe<Scalars['String']['input']>;
};

export type SystemCommunicationLentAdapterPoolInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  deploymentState?: InputMaybe<SystemCommunicationDeploymentState>;
  description?: InputMaybe<Scalars['String']['input']>;
  lender?: InputMaybe<SystemCommunicationLenderReferenceInput>;
  lentTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  maxReplicas?: InputMaybe<Scalars['Int']['input']>;
  minReplicas?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  sharingMode?: InputMaybe<SystemCommunicationAdapterSharingMode>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemCommunicationLentAdapterPoolInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationLentAdapterPoolInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System.Communication/LifecycleMode' */
export type SystemCommunicationLifecycleMode =
  | 'ALWAYS_ON'
  | 'AUTO'
  | 'LEASED'
  | 'ON_DEMAND';

/** Runtime entities of construction kit enum 'System.Communication/LifecycleState' */
export type SystemCommunicationLifecycleState =
  | 'DRAINING'
  | 'HIBERNATED'
  | 'RUNNING'
  | 'WAKING';

export type SystemCommunicationLoxoneConfigurationInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  host?: InputMaybe<Scalars['String']['input']>;
  isSslEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  mappingTargets?: InputMaybe<Array<InputMaybe<SystemCommunicationMappingTargetInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  pollIntervalSeconds?: InputMaybe<Scalars['Int']['input']>;
  port?: InputMaybe<Scalars['Int']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type SystemCommunicationLoxoneConfigurationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationLoxoneConfigurationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationMappingTargetInput = {
  externalId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sourceIdentifier?: InputMaybe<Scalars['String']['input']>;
};

export type SystemCommunicationMicrosoftGraphConfigurationInput = {
  azureTenantId?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  clientSecret?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemCommunicationMicrosoftGraphConfigurationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationMicrosoftGraphConfigurationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System.Communication/PipelineExecutionClass' */
export type SystemCommunicationPipelineExecutionClass =
  | 'BATCH'
  | 'INTERACTIVE';

export type SystemCommunicationPipelineExecutionInput = {
  adapterExecutions?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  callerAccessToken?: InputMaybe<Scalars['String']['input']>;
  callerEmail?: InputMaybe<Scalars['String']['input']>;
  callerName?: InputMaybe<Scalars['String']['input']>;
  callerRoles?: InputMaybe<Array<Scalars['String']['input']>>;
  callerSubjectId?: InputMaybe<Scalars['String']['input']>;
  callerTenantId?: InputMaybe<Scalars['String']['input']>;
  callerTrustLevel?: InputMaybe<Scalars['Int']['input']>;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  durationMs?: InputMaybe<Scalars['Int']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  executionId?: InputMaybe<Scalars['String']['input']>;
  inputData?: InputMaybe<Scalars['String']['input']>;
  leaseGrantedAt?: InputMaybe<Scalars['DateTime']['input']>;
  leaseReleasedAt?: InputMaybe<Scalars['DateTime']['input']>;
  leaseWaitMs?: InputMaybe<Scalars['Int']['input']>;
  leasedFromAdapterPoolRtId?: InputMaybe<Scalars['String']['input']>;
  leasedFromTenantId?: InputMaybe<Scalars['String']['input']>;
  leasedOnMemberId?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  outputData?: InputMaybe<Scalars['String']['input']>;
  pipelineExecutions?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  queuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<SystemCommunicationPipelineExecutionStatus>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  triggerType?: InputMaybe<SystemCommunicationPipelineTriggerType>;
};

export type SystemCommunicationPipelineExecutionInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationPipelineExecutionInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System.Communication/PipelineExecutionStatus' */
export type SystemCommunicationPipelineExecutionStatus =
  | 'CANCELLED'
  | 'COMPLETED'
  | 'FAILED'
  | 'INTERRUPTED'
  | 'QUEUED'
  | 'RUNNING';

export type SystemCommunicationPipelineInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  consecutiveStatusFailures?: InputMaybe<Scalars['Int']['input']>;
  deploymentState?: InputMaybe<SystemCommunicationDeploymentState>;
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  executedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  executedPipeline?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  executionClass?: InputMaybe<SystemCommunicationPipelineExecutionClass>;
  isDebuggingEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  isUsing?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  lastDeploymentError?: InputMaybe<Scalars['String']['input']>;
  lastDeploymentErrorTimestamp?: InputMaybe<Scalars['DateTime']['input']>;
  lastSuccessfulStatusAt?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  pipelineDefinition?: InputMaybe<Scalars['String']['input']>;
  receivesDataFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  sendsDataTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  statisticsForPipeline?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  statusMessage?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  triggers?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemCommunicationPipelineInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationPipelineInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationPipelineStatisticsHourBucketInput = {
  durationCount?: InputMaybe<Scalars['Int']['input']>;
  failureCount?: InputMaybe<Scalars['Int']['input']>;
  hourStartAt?: InputMaybe<Scalars['DateTime']['input']>;
  successCount?: InputMaybe<Scalars['Int']['input']>;
  totalDurationMs?: InputMaybe<Scalars['Long']['input']>;
};

export type SystemCommunicationPipelineStatisticsInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  foldedBefore?: InputMaybe<Scalars['DateTime']['input']>;
  hourlyBuckets?: InputMaybe<Array<InputMaybe<SystemCommunicationPipelineStatisticsHourBucketInput>>>;
  last12HoursAvgDurationMs?: InputMaybe<Scalars['Int']['input']>;
  last12HoursFailureCount?: InputMaybe<Scalars['Int']['input']>;
  last12HoursSuccessCount?: InputMaybe<Scalars['Int']['input']>;
  last24HoursAvgDurationMs?: InputMaybe<Scalars['Int']['input']>;
  last24HoursFailureCount?: InputMaybe<Scalars['Int']['input']>;
  last24HoursSuccessCount?: InputMaybe<Scalars['Int']['input']>;
  last30DaysAvgDurationMs?: InputMaybe<Scalars['Int']['input']>;
  last30DaysFailureCount?: InputMaybe<Scalars['Int']['input']>;
  last30DaysSuccessCount?: InputMaybe<Scalars['Int']['input']>;
  lastExecutionAt?: InputMaybe<Scalars['DateTime']['input']>;
  lastHourAvgDurationMs?: InputMaybe<Scalars['Int']['input']>;
  lastHourFailureCount?: InputMaybe<Scalars['Int']['input']>;
  lastHourSuccessCount?: InputMaybe<Scalars['Int']['input']>;
  lastUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  pipelineStatistics?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemCommunicationPipelineStatisticsInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationPipelineStatisticsInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationPipelineTriggerInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  consecutiveStatusFailures?: InputMaybe<Scalars['Int']['input']>;
  cronExpression?: InputMaybe<Scalars['String']['input']>;
  deploymentState?: InputMaybe<SystemCommunicationDeploymentState>;
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  lastDeploymentError?: InputMaybe<Scalars['String']['input']>;
  lastDeploymentErrorTimestamp?: InputMaybe<Scalars['DateTime']['input']>;
  lastSuccessfulStatusAt?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  statusMessage?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  triggeredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemCommunicationPipelineTriggerInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationPipelineTriggerInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System.Communication/PipelineTriggerType' */
export type SystemCommunicationPipelineTriggerType =
  | 'EVENT'
  | 'MANUAL'
  | 'SCHEDULED'
  | 'STARTUP';

/** Runtime entities of construction kit enum 'System.Communication/PoolScaleUpPolicy' */
export type SystemCommunicationPoolScaleUpPolicy =
  | 'QUEUE_DEPTH'
  | 'QUEUE_DEPTH_OR_WAIT_SECONDS'
  | 'QUEUE_WAIT_SECONDS';

export type SystemCommunicationSapConfigurationInput = {
  appServerHost?: InputMaybe<Scalars['String']['input']>;
  client?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  gatewayHost?: InputMaybe<Scalars['String']['input']>;
  gatewayService?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  programId?: InputMaybe<Scalars['String']['input']>;
  registrationCount?: InputMaybe<Scalars['Int']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  systemId?: InputMaybe<Scalars['String']['input']>;
  systemNumber?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  trace?: InputMaybe<Scalars['String']['input']>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type SystemCommunicationSapConfigurationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationSapConfigurationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationServiceAccountConfigurationInput = {
  allowDelegation?: InputMaybe<Scalars['Boolean']['input']>;
  assignedRoleNames?: InputMaybe<Array<Scalars['String']['input']>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  clientSecret?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  issuerUri?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  pipelineServiceAccountOf?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  poolServiceAccountOf?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemCommunicationServiceAccountConfigurationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationServiceAccountConfigurationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationSftpConfigurationInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  host?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  maxConcurrentConnections?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  port?: InputMaybe<Scalars['Int']['input']>;
  privateKey?: InputMaybe<Scalars['String']['input']>;
  privateKeyPassphrase?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type SystemCommunicationSftpConfigurationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationSftpConfigurationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationSignalChannelInput = {
  apiUrl?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  lastError?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  number?: InputMaybe<Scalars['String']['input']>;
  registeredAt?: InputMaybe<Scalars['DateTime']['input']>;
  registrationHistory?: InputMaybe<Array<InputMaybe<SystemCommunicationSignalRegistrationEventInput>>>;
  registrationState?: InputMaybe<SystemCommunicationSignalRegistrationState>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemCommunicationSignalChannelInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationSignalChannelInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System.Communication/SignalRegistrationAction' */
export type SystemCommunicationSignalRegistrationAction =
  | 'ADOPTED'
  | 'CODE_VERIFIED'
  | 'DELETED'
  | 'DELETE_FAILED'
  | 'PROFILE_UPDATED'
  | 'REGISTER_FAILED'
  | 'REGISTER_REQUESTED'
  | 'VERIFY_FAILED';

export type SystemCommunicationSignalRegistrationEventInput = {
  action?: InputMaybe<SystemCommunicationSignalRegistrationAction>;
  at?: InputMaybe<Scalars['DateTime']['input']>;
  detail?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

/** Runtime entities of construction kit enum 'System.Communication/SignalRegistrationState' */
export type SystemCommunicationSignalRegistrationState =
  | 'CODE_PENDING'
  | 'FAILED'
  | 'REGISTERED'
  | 'UNREGISTERED';

export type SystemCommunicationTagInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  isTagging?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemCommunicationTagInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationTagInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemCommunicationUiThemeColorsInput = {
  neutralColor?: InputMaybe<Scalars['String']['input']>;
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  secondaryColor?: InputMaybe<Scalars['String']['input']>;
  tertiaryColor?: InputMaybe<Scalars['String']['input']>;
};

export type SystemCommunicationValueOverrideInput = {
  isSecret?: InputMaybe<Scalars['Boolean']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SystemCommunicationWeClappConfigurationInput = {
  apiKey?: InputMaybe<Scalars['String']['input']>;
  baseUrl?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemCommunicationWeClappConfigurationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemCommunicationWeClappConfigurationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemDownsamplingSdQueryInput = {
  archiveRtId?: InputMaybe<Scalars['String']['input']>;
  columns?: InputMaybe<Array<InputMaybe<SystemAggregationQueryColumnInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<SystemFieldFilterInput>>>;
  from?: InputMaybe<Scalars['DateTime']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  navigationFilterMode?: InputMaybe<SystemNavigationFilterModes>;
  notificationSubscriptions?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  queryCkTypeId?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtIds?: InputMaybe<Array<Scalars['String']['input']>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  to?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SystemDownsamplingSdQueryInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemDownsamplingSdQueryInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System/EnvironmentModes' */
export type SystemEnvironmentModes =
  /** The tenant is in development mode, used for development and testing */
  | 'DEVELOPMENT'
  /** The tenant is in production mode, used for live operations */
  | 'PRODUCTION'
  /** The tenant is in staging mode, used for pre-production testing */
  | 'STAGING'
  /** The tenant is in testing mode, used for quality assurance */
  | 'TESTING';

export type SystemFieldFilterInput = {
  attributePath?: InputMaybe<Scalars['String']['input']>;
  comparisonValue?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<SystemFieldFilterOperator>;
};

/** Runtime entities of construction kit enum 'System/FieldFilterOperator' */
export type SystemFieldFilterOperator =
  /** Compares an array field with at least one element that matches the specified value. */
  | 'ANY_EQ'
  /** Compares an array field with at least one element that matches the specified value using a pattern matching comparison. Use * as a wildcard character. */
  | 'ANY_LIKE'
  /** Compares the specified field to the specified value. */
  | 'EQUALS'
  /** Compares the specified field to the specified value and returns true if the field value is greater than or equal to the specified value. */
  | 'GREATER_EQUAL_THAN'
  /** Compares the specified field to the specified value and returns true if the field value is greater than the specified value. */
  | 'GREATER_THAN'
  /** Compares a field to be equal any value in the specified array. */
  | 'IN'
  /** Compares the specified field to the specified value and returns true if the field value is less than or equal to the specified value. */
  | 'LESS_EQUAL_THAN'
  /** Compares the specified field to the specified value and returns true if the field value is less than the specified value. */
  | 'LESS_THAN'
  /** Compares a field to the specified value using a pattern matching comparison. Use * as a wildcard character. */
  | 'LIKE'
  /** Matches an array field with at least one element that matches all the specified query criteria. */
  | 'MATCH'
  /** Matches a field containing a value that matches the specified regular expression. */
  | 'MATCH_REG_EX'
  /** Compares the specified field to the specified value and returns true if the values are not equal. */
  | 'NOT_EQUALS'
  /** Compares a field to be not equal any value in the specified array. */
  | 'NOT_IN';

export type SystemGroupingAggregationRtQueryInput = {
  attributeSearchFilter?: InputMaybe<SystemAttributeSearchFilterInput>;
  columns?: InputMaybe<Array<InputMaybe<SystemAggregationQueryColumnInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<SystemFieldFilterInput>>>;
  groupingColumns?: InputMaybe<Array<Scalars['String']['input']>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  navigationFilterMode?: InputMaybe<SystemNavigationFilterModes>;
  notificationSubscriptions?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  queryCkTypeId?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  textSearchFilter?: InputMaybe<SystemTextSearchFilterInput>;
};

export type SystemGroupingAggregationRtQueryInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemGroupingAggregationRtQueryInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemGroupingAggregationSdQueryInput = {
  archiveRtId?: InputMaybe<Scalars['String']['input']>;
  columns?: InputMaybe<Array<InputMaybe<SystemAggregationQueryColumnInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<SystemFieldFilterInput>>>;
  from?: InputMaybe<Scalars['DateTime']['input']>;
  groupingColumns?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  navigationFilterMode?: InputMaybe<SystemNavigationFilterModes>;
  notificationSubscriptions?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  queryCkTypeId?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtIds?: InputMaybe<Array<Scalars['String']['input']>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  to?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SystemGroupingAggregationSdQueryInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemGroupingAggregationSdQueryInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentityApiResourceInput = {
  allowedAccessTokenSigningAlgorithms?: InputMaybe<Array<Scalars['String']['input']>>;
  apiSecrets?: InputMaybe<Array<InputMaybe<SystemIdentitySecretInput>>>;
  claims?: InputMaybe<Array<Scalars['String']['input']>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  requireResourceIndicator?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  scopes?: InputMaybe<Array<Scalars['String']['input']>>;
  showInDiscoveryDocument?: InputMaybe<Scalars['Boolean']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemIdentityApiResourceInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityApiResourceInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentityApiScopeInput = {
  claims?: InputMaybe<Array<Scalars['String']['input']>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  isEmphasized?: InputMaybe<Scalars['Boolean']['input']>;
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  showInDiscoveryDocument?: InputMaybe<Scalars['Boolean']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemIdentityApiScopeInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityApiScopeInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentityAzureEntraIdIdentityProviderInput = {
  allowSelfRegistration?: InputMaybe<Scalars['Boolean']['input']>;
  authority?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  clientSecret?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  defaultGroupRtId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
};

export type SystemIdentityAzureEntraIdIdentityProviderInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityAzureEntraIdIdentityProviderInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentityClientClaimInput = {
  claimType?: InputMaybe<Scalars['String']['input']>;
  claimValue?: InputMaybe<Scalars['String']['input']>;
  claimValueType?: InputMaybe<Scalars['String']['input']>;
};

export type SystemIdentityClientInput = {
  absoluteRefreshTokenLifetime?: InputMaybe<Scalars['Int']['input']>;
  accessTokenLifetime?: InputMaybe<Scalars['Int']['input']>;
  accessTokenType?: InputMaybe<SystemIdentityTokenType>;
  allowAccessTokensViaBrowser?: InputMaybe<Scalars['Boolean']['input']>;
  allowOfflineAccess?: InputMaybe<Scalars['Boolean']['input']>;
  allowPlainTextPkce?: InputMaybe<Scalars['Boolean']['input']>;
  allowRememberConsent?: InputMaybe<Scalars['Boolean']['input']>;
  allowedCorsOrigins?: InputMaybe<Array<InputMaybe<SystemIdentityClientUriEntryInput>>>;
  allowedGrantTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  allowedIdentityTokenSigningAlgorithms?: InputMaybe<Array<Scalars['String']['input']>>;
  allowedScopes?: InputMaybe<Array<Scalars['String']['input']>>;
  alwaysIncludeUserClaimsInIdToken?: InputMaybe<Scalars['Boolean']['input']>;
  alwaysSendClientClaims?: InputMaybe<Scalars['Boolean']['input']>;
  assignedRoles?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  authorizationCodeLifetime?: InputMaybe<Scalars['Int']['input']>;
  autoProvisionInChildTenants?: InputMaybe<Scalars['Boolean']['input']>;
  backChannelLogoutSessionRequired?: InputMaybe<Scalars['Boolean']['input']>;
  backChannelLogoutUri?: InputMaybe<Scalars['String']['input']>;
  cibaLifetime?: InputMaybe<Scalars['Int']['input']>;
  clientClaims?: InputMaybe<Array<InputMaybe<SystemIdentityClientClaimInput>>>;
  clientClaimsPrefix?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  clientName?: InputMaybe<Scalars['String']['input']>;
  clientSecrets?: InputMaybe<Array<InputMaybe<SystemIdentitySecretInput>>>;
  clientUri?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  consentLifetime?: InputMaybe<Scalars['Int']['input']>;
  coordinateLifetimeWithUserSession?: InputMaybe<Scalars['Boolean']['input']>;
  dPoPClockSkew?: InputMaybe<Scalars['Seconds']['input']>;
  dPoPValidationMode?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  deviceCodeLifetime?: InputMaybe<Scalars['Int']['input']>;
  dynamicRegistration?: InputMaybe<Scalars['Boolean']['input']>;
  dynamicRegistrationExpiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  enableLocalLogin?: InputMaybe<Scalars['Boolean']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  frontChannelLogoutSessionRequired?: InputMaybe<Scalars['Boolean']['input']>;
  frontChannelLogoutUri?: InputMaybe<Scalars['String']['input']>;
  identityProviderRestrictions?: InputMaybe<Array<Scalars['String']['input']>>;
  identityTokenLifetime?: InputMaybe<Scalars['Int']['input']>;
  impersonators?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  includeJwtId?: InputMaybe<Scalars['Boolean']['input']>;
  initiateLoginUri?: InputMaybe<Scalars['String']['input']>;
  logoUri?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mayActAs?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  memberOfGroups?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  pairWiseSubjectSalt?: InputMaybe<Scalars['String']['input']>;
  pollingInterval?: InputMaybe<Scalars['Int']['input']>;
  postLogoutRedirectUris?: InputMaybe<Array<InputMaybe<SystemIdentityClientUriEntryInput>>>;
  protocolType?: InputMaybe<Scalars['String']['input']>;
  provisionedByParentTenantId?: InputMaybe<Scalars['String']['input']>;
  redirectUris?: InputMaybe<Array<InputMaybe<SystemIdentityClientUriEntryInput>>>;
  refreshTokenExpiration?: InputMaybe<SystemIdentityTokenExpiration>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  requireClientSecret?: InputMaybe<Scalars['Boolean']['input']>;
  requireConsent?: InputMaybe<Scalars['Boolean']['input']>;
  requireDPoP?: InputMaybe<Scalars['Boolean']['input']>;
  requirePkce?: InputMaybe<Scalars['Boolean']['input']>;
  requireRequestObject?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  slidingRefreshTokenLifetime?: InputMaybe<Scalars['Int']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  updateAccessTokenClaimsOnRefresh?: InputMaybe<Scalars['Boolean']['input']>;
  userCodeType?: InputMaybe<Scalars['String']['input']>;
  userSsoLifetime?: InputMaybe<Scalars['Int']['input']>;
};

export type SystemIdentityClientInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityClientInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentityClientMirrorInput = {
  childTenantId?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parentClientId?: InputMaybe<Scalars['String']['input']>;
  parentTenantId?: InputMaybe<Scalars['String']['input']>;
  provisionedAt?: InputMaybe<Scalars['DateTime']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  secretHashVersion?: InputMaybe<Scalars['Int']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemIdentityClientMirrorInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityClientMirrorInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentityClientUriEntryInput = {
  source?: InputMaybe<Scalars['String']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
};

export type SystemIdentityDataPermissionInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  grantedToRoles?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  permissionId?: InputMaybe<Scalars['String']['input']>;
  policies?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemIdentityDataPermissionInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityDataPermissionInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System.Identity/DataPolicyEnforcementMode' */
export type SystemIdentityDataPolicyEnforcementMode =
  | 'AUDIT_ONLY'
  | 'ENFORCE';

export type SystemIdentityDataPolicyInput = {
  actions?: InputMaybe<Array<Scalars['String']['input']>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  enforcementMode?: InputMaybe<SystemIdentityDataPolicyEnforcementMode>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  permission?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<SystemIdentityDataPolicyScope>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  targetCkTypeIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type SystemIdentityDataPolicyInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityDataPolicyInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System.Identity/DataPolicyScope' */
export type SystemIdentityDataPolicyScope =
  | 'ALL'
  | 'OWNED_ONLY';

export type SystemIdentityDataProtectionKeyInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  creationDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  friendlyName?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  xmlData?: InputMaybe<Scalars['String']['input']>;
};

export type SystemIdentityDataProtectionKeyInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityDataProtectionKeyInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentityEmailDomainGroupRuleInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  emailDomainPattern?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  targetGroupRtId?: InputMaybe<Scalars['String']['input']>;
};

export type SystemIdentityEmailDomainGroupRuleInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityEmailDomainGroupRuleInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentityExternalTenantUserMappingInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mappedRoleIds?: InputMaybe<Array<Scalars['String']['input']>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  memberOfGroups?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  sourceTenantId?: InputMaybe<Scalars['String']['input']>;
  sourceUserId?: InputMaybe<Scalars['String']['input']>;
  sourceUserName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemIdentityExternalTenantUserMappingInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityExternalTenantUserMappingInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentityFacebookIdentityProviderInput = {
  allowSelfRegistration?: InputMaybe<Scalars['Boolean']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  clientSecret?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  defaultGroupRtId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemIdentityFacebookIdentityProviderInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityFacebookIdentityProviderInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentityGoogleIdentityProviderInput = {
  allowSelfRegistration?: InputMaybe<Scalars['Boolean']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  clientSecret?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  defaultGroupRtId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemIdentityGoogleIdentityProviderInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityGoogleIdentityProviderInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentityGroupInput = {
  assignedRoles?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  childGroups?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  groupDescription?: InputMaybe<Scalars['String']['input']>;
  groupName?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  members?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  normalizedGroupName?: InputMaybe<Scalars['String']['input']>;
  parentGroups?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemIdentityGroupInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityGroupInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System.Identity/IdentifierKind' */
export type SystemIdentityIdentifierKind =
  | 'CLIENT_CERTIFICATE_FINGERPRINT'
  | 'EMAIL_ADDRESS'
  | 'ENTRA_ID_OBJECT_ID'
  | 'PHONE_NUMBER';

/** Runtime entities of construction kit enum 'System.Identity/IdentifierSource' */
export type SystemIdentityIdentifierSource =
  | 'ADMIN'
  | 'IDENTITY_PROVIDER'
  | 'SELF_SERVICE';

export type SystemIdentityIdentityResourceInput = {
  claims?: InputMaybe<Array<Scalars['String']['input']>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  isEmphasized?: InputMaybe<Scalars['Boolean']['input']>;
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  showInDiscoveryDocument?: InputMaybe<Scalars['Boolean']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemIdentityIdentityResourceInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityIdentityResourceInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentityMicrosoftAdIdentityProviderInput = {
  allowSelfRegistration?: InputMaybe<Scalars['Boolean']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  defaultGroupRtId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  host?: InputMaybe<Scalars['String']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  port?: InputMaybe<Scalars['Int']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  useTls?: InputMaybe<Scalars['Boolean']['input']>;
  userBaseDn?: InputMaybe<Scalars['String']['input']>;
  userNameAttribute?: InputMaybe<Scalars['String']['input']>;
};

export type SystemIdentityMicrosoftAdIdentityProviderInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityMicrosoftAdIdentityProviderInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentityMicrosoftIdentityProviderInput = {
  allowSelfRegistration?: InputMaybe<Scalars['Boolean']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  clientSecret?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  defaultGroupRtId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemIdentityMicrosoftIdentityProviderInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityMicrosoftIdentityProviderInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentityOAuthAuthorizationInput = {
  authorizationType?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  creationDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  properties?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  scopes?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Scalars['String']['input']>;
  subjectId?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemIdentityOAuthAuthorizationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityOAuthAuthorizationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentityOAuthTokenInput = {
  authorizationRtId?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  creationDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  expirationDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  payload?: InputMaybe<Scalars['String']['input']>;
  properties?: InputMaybe<Scalars['String']['input']>;
  redemptionDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  referenceId?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subjectId?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  tokenType?: InputMaybe<Scalars['String']['input']>;
};

export type SystemIdentityOAuthTokenInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityOAuthTokenInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentityOctoTenantIdentityProviderInput = {
  allowSelfRegistration?: InputMaybe<Scalars['Boolean']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  defaultGroupRtId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentTenantId?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemIdentityOctoTenantIdentityProviderInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityOctoTenantIdentityProviderInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentityOpenLdapIdentityProviderInput = {
  allowSelfRegistration?: InputMaybe<Scalars['Boolean']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  defaultGroupRtId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  host?: InputMaybe<Scalars['String']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  port?: InputMaybe<Scalars['Int']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  useTls?: InputMaybe<Scalars['Boolean']['input']>;
  userBaseDn?: InputMaybe<Scalars['String']['input']>;
  userNameAttribute?: InputMaybe<Scalars['String']['input']>;
};

export type SystemIdentityOpenLdapIdentityProviderInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityOpenLdapIdentityProviderInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentityPermissionInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  identityRoleIds?: InputMaybe<Array<Scalars['String']['input']>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  permissionId?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemIdentityPermissionInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityPermissionInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentityPermissionRoleInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  identityRoleIds?: InputMaybe<Array<Scalars['String']['input']>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  roleId?: InputMaybe<Scalars['String']['input']>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  subjectIds?: InputMaybe<Array<Scalars['String']['input']>>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemIdentityPermissionRoleInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityPermissionRoleInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentityPersistedGrantInput = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  consumedDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  creationDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expirationDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  grantKey?: InputMaybe<Scalars['String']['input']>;
  grantType?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  sessionId?: InputMaybe<Scalars['String']['input']>;
  subjectId?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemIdentityPersistedGrantInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityPersistedGrantInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentityRoleClaimInput = {
  claimType?: InputMaybe<Scalars['String']['input']>;
  claimValue?: InputMaybe<Scalars['String']['input']>;
};

export type SystemIdentityRoleInput = {
  assignedEntities?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  claims?: InputMaybe<Array<InputMaybe<SystemIdentityRoleClaimInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  grantedPermissions?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  identityRoleIds?: InputMaybe<Array<Scalars['String']['input']>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  normalizedName?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  subjectIds?: InputMaybe<Array<Scalars['String']['input']>>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemIdentityRoleInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityRoleInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentitySecretInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  expirationDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SystemIdentityServerSideSessionInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  creationDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  expirationDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  renewalDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  scheme?: InputMaybe<Scalars['String']['input']>;
  sessionId?: InputMaybe<Scalars['String']['input']>;
  sessionKey?: InputMaybe<Scalars['String']['input']>;
  subjectId?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  ticket?: InputMaybe<Scalars['String']['input']>;
};

export type SystemIdentityServerSideSessionInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityServerSideSessionInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System.Identity/TokenExpiration' */
export type SystemIdentityTokenExpiration =
  | 'ABSOLUTE'
  | 'SLIDING';

/** Runtime entities of construction kit enum 'System.Identity/TokenType' */
export type SystemIdentityTokenType =
  | 'JWT'
  | 'REFERENCE';

/** Runtime entities of construction kit enum 'System.Identity/TokenUsage' */
export type SystemIdentityTokenUsage =
  | 'ONE_TIME_ONLY'
  | 'RE_USE';

/** Runtime entities of construction kit enum 'System.Identity/TrustLevel' */
export type SystemIdentityTrustLevel =
  | 'NONE'
  | 'STRONG'
  | 'WEAK';

/** Parameters of the CK method 'System.Identity/User.AddRole-1'. */
export type SystemIdentityUserAddRoleMethodInput = {
  roleName: Scalars['String']['input'];
};

export type SystemIdentityUserClaimInput = {
  claimType?: InputMaybe<Scalars['String']['input']>;
  claimValue?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Parameters of the CK method 'System.Identity/User.CreateUser-1'. */
export type SystemIdentityUserCreateUserMethodInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Initial password; without it the user gets the welcome notification without a password. */
  password?: InputMaybe<Scalars['String']['input']>;
  userName: Scalars['String']['input'];
};

export type SystemIdentityUserInput = {
  accessFailedCount?: InputMaybe<Scalars['Int']['input']>;
  assignedRoles?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  claims?: InputMaybe<Array<InputMaybe<SystemIdentityUserClaimInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lockoutEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  lockoutEnd?: InputMaybe<Scalars['DateTimeOffset']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  memberOfGroups?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  normalizedEmail?: InputMaybe<Scalars['String']['input']>;
  normalizedUserName?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  preferredChannelBindingId?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  resetPasswordOnLogin?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  securityStamp?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  twoFactorEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  userLogins?: InputMaybe<Array<InputMaybe<SystemIdentityUserLoginInput>>>;
  userName?: InputMaybe<Scalars['String']['input']>;
  userTokens?: InputMaybe<Array<InputMaybe<SystemIdentityUserTokenInput>>>;
  verifiedExternalIdentifiers?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemIdentityUserInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityUserInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemIdentityUserLoginInput = {
  loginProvider?: InputMaybe<Scalars['String']['input']>;
  providerDisplayName?: InputMaybe<Scalars['String']['input']>;
  providerKey?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Parameters of the CK method 'System.Identity/User.Merge-1'. */
export type SystemIdentityUserMergeMethodInput = {
  /** User name of the user that is merged into this one and deleted. */
  sourceUserName: Scalars['String']['input'];
};

/** Parameters of the CK method 'System.Identity/User.RemoveRole-1'. */
export type SystemIdentityUserRemoveRoleMethodInput = {
  roleName: Scalars['String']['input'];
};

/** Parameters of the CK method 'System.Identity/User.ResetPassword-1'. */
export type SystemIdentityUserResetPasswordMethodInput = {
  /** The new password; must satisfy the password policy of the tenant. */
  newPassword: Scalars['String']['input'];
};

/** Parameters of the CK method 'System.Identity/User.SetRoles-1'. */
export type SystemIdentityUserSetRolesMethodInput = {
  /** The complete list of direct role names. */
  roleNames: Array<Scalars['String']['input']>;
};

export type SystemIdentityUserTokenInput = {
  loginProvider?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SystemIdentityVerifiedExternalIdentifierInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  enrolledAt?: InputMaybe<Scalars['DateTime']['input']>;
  enrollmentTrust?: InputMaybe<SystemIdentityTrustLevel>;
  identifierKind?: InputMaybe<SystemIdentityIdentifierKind>;
  identifierValue?: InputMaybe<Scalars['String']['input']>;
  lastVerifiedAt?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  requiredMessageAuthentication?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<SystemIdentityIdentifierSource>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  user?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SystemIdentityVerifiedExternalIdentifierInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemIdentityVerifiedExternalIdentifierInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System/MaintenanceLevels' */
export type SystemMaintenanceLevels =
  /** The full system is in maintenance mode, the tenant is not operational */
  | 'FULL_SYSTEM'
  /** The maintenance mode is off, the tenant is fully operational */
  | 'OFF'
  /** The user apps are in maintenance mode, the tenant is operational but user apps are not available */
  | 'USER_APPS';

export type SystemMigrationHistoryInput = {
  backupId?: InputMaybe<Scalars['String']['input']>;
  ckModelName?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  durationMs?: InputMaybe<Scalars['Int']['input']>;
  entitiesAdded?: InputMaybe<Scalars['Int']['input']>;
  entitiesAffected?: InputMaybe<Scalars['Int']['input']>;
  entitiesDeleted?: InputMaybe<Scalars['Int']['input']>;
  entitiesUpdated?: InputMaybe<Scalars['Int']['input']>;
  errors?: InputMaybe<Array<Scalars['String']['input']>>;
  executedAt?: InputMaybe<Scalars['DateTime']['input']>;
  fromVersion?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  success?: InputMaybe<Scalars['Boolean']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  toVersion?: InputMaybe<Scalars['String']['input']>;
  warnings?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type SystemMigrationHistoryInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemMigrationHistoryInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System/NavigationFilterModes' */
export type SystemNavigationFilterModes =
  /** Entities without matching associations are filtered out (pre-pagination). */
  | 'FILTER'
  /** Entities without matching associations are kept with null values (post-pagination). */
  | 'INCLUDE';

export type SystemNotificationCssTemplateConfigurationInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  cssStyle?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemNotificationCssTemplateConfigurationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemNotificationCssTemplateConfigurationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemNotificationEventInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  level?: InputMaybe<SystemNotificationEventLevels>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  message?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<SystemNotificationEventSources>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemNotificationEventInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemNotificationEventInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System.Notification/EventLevels' */
export type SystemNotificationEventLevels =
  /** Critical */
  | 'CRITICAL'
  /** Debug */
  | 'DEBUG'
  /** Error */
  | 'ERROR'
  /** Information */
  | 'INFORMATION'
  /** Warning */
  | 'WARNING';

/** Runtime entities of construction kit enum 'System.Notification/EventSources' */
export type SystemNotificationEventSources =
  /** The event was generated by the Admin Panel. */
  | 'ADMIN_PANEL'
  /** The event was generated by the Asset Repository Service. */
  | 'ASSET_REPOSITORY_SERVICE'
  /** The event was generated by the Bot Service. */
  | 'BOT_SERVICE'
  /** The event was generated by the Communication Service. */
  | 'COMMUNICATION_SERVICE'
  /** The event was generated by the Identity Service. */
  | 'IDENTITY_SERVICE'
  /** The event was generated by the Mesh Adapter. */
  | 'MESH_ADAPTER'
  /** No source has been assigned to the event. */
  | 'UNDEFINED';

/** Runtime entities of construction kit enum 'System.Notification/EventStates' */
export type SystemNotificationEventStates =
  | 'ACTIVE'
  | 'ERROR'
  | 'INACTIVE';

export type SystemNotificationMailNotificationConfigurationInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  enableEmailNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  redirectAfterEmailInteractionUrl?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemNotificationMailNotificationConfigurationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemNotificationMailNotificationConfigurationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemNotificationNotificationDeliveryStateInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  lastError?: InputMaybe<Scalars['String']['input']>;
  lastRunAt?: InputMaybe<Scalars['DateTime']['input']>;
  lastSentAt?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  preference?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  processedUntil?: InputMaybe<Scalars['DateTime']['input']>;
  queryRtId?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  runningSince?: InputMaybe<Scalars['DateTime']['input']>;
  skipExistingRows?: InputMaybe<Scalars['Boolean']['input']>;
  subjectId?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemNotificationNotificationDeliveryStateInputUpdate = {
  /** Item to update */
  item: SystemNotificationNotificationDeliveryStateInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemNotificationNotificationPreferenceInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  cronExpression?: InputMaybe<Scalars['String']['input']>;
  deliveryState?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  skipExistingRows?: InputMaybe<Scalars['Boolean']['input']>;
  subjectId?: InputMaybe<Scalars['String']['input']>;
  subscription?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  timeZone?: InputMaybe<Scalars['String']['input']>;
};

export type SystemNotificationNotificationPreferenceInputUpdate = {
  /** Item to update */
  item: SystemNotificationNotificationPreferenceInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemNotificationNotificationSubscriptionInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  deployedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  query?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  template?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemNotificationNotificationSubscriptionInputUpdate = {
  /** Item to update */
  item: SystemNotificationNotificationSubscriptionInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemNotificationNotificationTemplateInput = {
  bodyTemplate?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  renderingType?: InputMaybe<SystemNotificationRenderingTypes>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  subjectTemplate?: InputMaybe<Scalars['String']['input']>;
  subscriptions?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  type?: InputMaybe<SystemNotificationNotificationTypes>;
};

export type SystemNotificationNotificationTemplateInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemNotificationNotificationTemplateInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System.Notification/NotificationTypes' */
export type SystemNotificationNotificationTypes =
  | 'E_MAIL'
  | 'PUSH'
  | 'SMS';

/** Runtime entities of construction kit enum 'System.Notification/RenderingTypes' */
export type SystemNotificationRenderingTypes =
  | 'HTML'
  | 'PLAIN';

export type SystemNotificationStatefulEventInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  level?: InputMaybe<SystemNotificationEventLevels>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  message?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<SystemNotificationEventSources>;
  state?: InputMaybe<SystemNotificationEventStates>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemNotificationStatefulEventInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemNotificationStatefulEventInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

/** Runtime entities of construction kit enum 'System/QueryTypes' */
export type SystemQueryTypes =
  /** A flat query */
  | 'FLAT'
  /** A tree query that returns results from a tree */
  | 'TREE';

export type SystemReportingConnectionInfoInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  connectionString?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  provider?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemReportingConnectionInfoInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemReportingConnectionInfoInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemReportingFileSystemItemInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  content?: InputMaybe<Scalars['LargeBinary']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemReportingFileSystemItemInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemReportingFileSystemItemInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemReportingFolderInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemReportingFolderInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemReportingFolderInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemReportingFolderRootInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemReportingFolderRootInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemReportingFolderRootInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemSimpleRtQueryInput = {
  attributeSearchFilter?: InputMaybe<SystemAttributeSearchFilterInput>;
  columns?: InputMaybe<Array<Scalars['String']['input']>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<SystemFieldFilterInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  navigationFilterMode?: InputMaybe<SystemNavigationFilterModes>;
  notificationSubscriptions?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  queryCkTypeId?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  sorting?: InputMaybe<Array<InputMaybe<SystemSortOrderItemInput>>>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  textSearchFilter?: InputMaybe<SystemTextSearchFilterInput>;
};

export type SystemSimpleRtQueryInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemSimpleRtQueryInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemSimpleSdQueryInput = {
  archiveRtId?: InputMaybe<Scalars['String']['input']>;
  columns?: InputMaybe<Array<Scalars['String']['input']>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  fieldFilter?: InputMaybe<Array<InputMaybe<SystemFieldFilterInput>>>;
  from?: InputMaybe<Scalars['DateTime']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  navigationFilterMode?: InputMaybe<SystemNavigationFilterModes>;
  notificationSubscriptions?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  queryCkTypeId?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtIds?: InputMaybe<Array<Scalars['String']['input']>>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  sorting?: InputMaybe<Array<InputMaybe<SystemSortOrderItemInput>>>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  to?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SystemSimpleSdQueryInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemSimpleSdQueryInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemSortOrderItemInput = {
  attributePath?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<SystemSortOrders>;
};

/** Runtime entities of construction kit enum 'System/SortOrders' */
export type SystemSortOrders =
  /** Ascending order */
  | 'ASCENDING'
  /** Default sorting based on data source type */
  | 'DEFAULT'
  /** Descending order */
  | 'DESCENDING';

/** Runtime entities of construction kit enum 'System.StreamData/BucketAlignment' */
export type SystemStreamDataBucketAlignment =
  /** Bucket boundaries align to UTC calendar days (00:00:00 UTC). BucketSizeMs is informational only. */
  | 'CALENDAR_DAY'
  /** Bucket boundaries align to UTC calendar months (first day of month 00:00:00 UTC). BucketSizeMs is informational only; month lengths vary 28-31 days. */
  | 'CALENDAR_MONTH'
  /** Bucket boundaries align to calendar quarters starting 1 January / 1 April / 1 July / 1 October (00:00:00 UTC, or local wall-clock time when ReferenceTimeZone is set). BucketSizeMs is informational only; quarter lengths vary 90-92 days. AB#5157. */
  | 'CALENDAR_QUARTER'
  /** Bucket boundaries align to UTC calendar years (Jan 1 00:00:00 UTC). BucketSizeMs is informational only. */
  | 'CALENDAR_YEAR'
  /** Default. Each bucket spans exactly BucketSizeMs; boundaries are LastAggregatedBucketEnd, LastAggregatedBucketEnd + BucketSizeMs, ... */
  | 'FIXED_SIZE'
  /** Bucket boundaries align to ISO-8601 weeks (Monday 00:00:00 UTC to next Monday 00:00:00 UTC). BucketSizeMs is informational only. */
  | 'ISO_8601_WEEK';

export type SystemStreamDataCkArchiveColumnInput = {
  computedState?: InputMaybe<SystemStreamDataCkComputedColumnState>;
  computedVersion?: InputMaybe<Scalars['Int']['input']>;
  formula?: InputMaybe<Scalars['String']['input']>;
  indexed?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pendingFormula?: InputMaybe<Scalars['String']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  resultType?: InputMaybe<SystemStreamDataCkComputedColumnResultType>;
};

export type SystemStreamDataCkArchiveConflictKeyInput = {
  column?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<SystemStreamDataCkConflictKeyOrder>;
};

export type SystemStreamDataCkArchiveDirtyWindowInput = {
  changeKind?: InputMaybe<SystemStreamDataCkRecomputeChangeKind>;
  detectedAt?: InputMaybe<Scalars['DateTime']['input']>;
  source?: InputMaybe<SystemStreamDataCkRecomputeChangeSource>;
  windowEnd?: InputMaybe<Scalars['DateTime']['input']>;
  windowStart?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SystemStreamDataCkArchiveRecomputeRangeInput = {
  attempts?: InputMaybe<Scalars['Int']['input']>;
  dependentArchiveRtId?: InputMaybe<Scalars['String']['input']>;
  enqueuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  lastError?: InputMaybe<Scalars['String']['input']>;
  nextAttemptAt?: InputMaybe<Scalars['DateTime']['input']>;
  rangeEnd?: InputMaybe<Scalars['DateTime']['input']>;
  rangeStart?: InputMaybe<Scalars['DateTime']['input']>;
  rtIdScope?: InputMaybe<Scalars['String']['input']>;
};

/** Runtime entities of construction kit enum 'System.StreamData/CkArchiveStatus' */
export type SystemStreamDataCkArchiveStatus =
  /** Crate table exists, schema is frozen, inserts and queries are accepted. */
  | 'ACTIVATED'
  /** Archive definition exists, but no Crate table has been provisioned. Inserts and queries are rejected. */
  | 'CREATED'
  /** Crate table exists, but inserts and queries are rejected. Data is preserved. */
  | 'DISABLED'
  /** Activation failed; manual retry required. Inserts and queries are rejected. */
  | 'FAILED';

/** Runtime entities of construction kit enum 'System.StreamData/CkComputedColumnResultType' */
export type SystemStreamDataCkComputedColumnResultType =
  /** Non-zero result is true. Stored as BOOLEAN. */
  | 'BOOLEAN'
  /** Result interpreted as ticks. Stored as TIMESTAMP WITH TIME ZONE. */
  | 'DATE_TIME'
  /** Stored as DOUBLE PRECISION. */
  | 'DOUBLE'
  /** Result truncated to a 32-bit integer. Stored as INTEGER. */
  | 'INT'
  /** Result truncated to a 64-bit integer. Stored as BIGINT. */
  | 'INT_64';

/** Runtime entities of construction kit enum 'System.StreamData/CkComputedColumnState' */
export type SystemStreamDataCkComputedColumnState =
  /** The computed column is live: new rows include the value on ingest and readers see it. */
  | 'ACTIVE'
  /** The backfill is running. Consumers still see the previous archive state until it completes and is committed atomically. */
  | 'BACKFILLING'
  /** The backfill failed mid-run. The previous archive state is intact; consumers never see partial computed data. */
  | 'FAILED'
  /** A backfill has been scheduled for this computed column but has not started yet. Consumers still see the previous archive state. */
  | 'PENDING';

/** Runtime entities of construction kit enum 'System.StreamData/CkConflictKeyOrder' */
export type SystemStreamDataCkConflictKeyOrder =
  /** The greater value is the better one. Use for timestamps, sequence numbers and versions, where later or higher supersedes earlier. */
  | 'HIGHER_WINS'
  /** The smaller value is the better one. Use for rank-like codes numbered best-first, where a lower code must never be displaced by a higher one. */
  | 'LOWER_WINS';

/** Runtime entities of construction kit enum 'System.StreamData/CkRecomputeChangeKind' */
export type SystemStreamDataCkRecomputeChangeKind =
  /** A forward write at or after the high-water mark already consumed by dependents. Does not, by itself, make a dependent stale. */
  | 'APPEND'
  /** A write into a window at or before the consumed high-water mark (correction, late value, re-ingest). Marks the covering window dirty so dependents are recomputed. */
  | 'RETROACTIVE_MODIFY';

/** Runtime entities of construction kit enum 'System.StreamData/CkRecomputeChangeSource' */
export type SystemStreamDataCkRecomputeChangeSource =
  /** A bulk archive-data import wrote the change. */
  | 'IMPORT'
  /** An operator changed the data directly (manual correction). */
  | 'MANUAL'
  /** A mesh-adapter pipeline re-ingested or corrected the data (e.g. a corrected DATEN_CRMSG from EDA). */
  | 'PIPELINE';

/** Runtime entities of construction kit enum 'System.StreamData/CkRecomputeJobState' */
export type SystemStreamDataCkRecomputeJobState =
  /** The triggering request was merged into an already-active job for the same archive (its range was folded into that job). */
  | 'COALESCED'
  /** The recompute committed atomically; readers now see the new values. */
  | 'COMPLETED'
  /** The job failed before committing. Staging is discarded; the previous archive state is intact and consumers never saw a partial result. */
  | 'FAILED'
  /** The job is scheduled but compute has not started yet. */
  | 'PENDING'
  /** Recomputed buckets are being written into the per-job staging table. Readers still see the previous state. */
  | 'RUNNING'
  /** Staging is complete and the atomic commit (full-archive SWAP TABLE or per-window generation-pointer flip) is in progress. */
  | 'SWAPPING';

/** Runtime entities of construction kit enum 'System.StreamData/CkRecomputeTrigger' */
export type SystemStreamDataCkRecomputeTrigger =
  /** A successful recompute of an upstream archive marked this archive dirty and propagated downstream. */
  | 'CHAIN_PROPAGATION'
  /** An operator forced the recompute via API / admin UI / octo-cli. */
  | 'MANUAL'
  /** The recompute orchestrator picked up dirty windows on its scheduled tick. */
  | 'PERIODIC';

export type SystemStreamDataCkRollupAggregationInput = {
  comparisonValue?: InputMaybe<Scalars['String']['input']>;
  function?: InputMaybe<SystemStreamDataCkRollupFunction>;
  sourcePath?: InputMaybe<Scalars['String']['input']>;
  targetColumnName?: InputMaybe<Scalars['String']['input']>;
};

/** Runtime entities of construction kit enum 'System.StreamData/CkRollupFunction' */
export type SystemStreamDataCkRollupFunction =
  /** Arithmetic mean. Stored as sum and count columns; the average is computed on read. */
  | 'AVG'
  /** Number of non-null values in the bucket. */
  | 'COUNT'
  /** Value of the source column at the earliest timestamp in the bucket (arg_min over time). Stored as a single DOUBLE PRECISION column; chained rollups pick the child bucket with the smallest window boundary. Numeric source columns only. AB#4188. */
  | 'FIRST'
  /** Value of the source column at the latest timestamp in the bucket (arg_max over time). Stored as a single DOUBLE PRECISION column; chained rollups pick the child bucket with the largest window boundary. Numeric source columns only. AB#4188. */
  | 'LAST'
  /** Maximum value in the bucket. */
  | 'MAX'
  /** Minimum value in the bucket. */
  | 'MIN'
  /** Absolute time (milliseconds) the signal held the ComparisonValue within the bucket, with the same LOCF carry as TimeWeightedAvg. Stored as a single BIGINT column; chained rollups re-aggregate it with SUM. Requires CkRollupAggregation.ComparisonValue. AB#4336. */
  | 'STATE_DURATION'
  /** Sum of values in the bucket. */
  | 'SUM'
  /** Time-weighted average with LOCF interval weighting for event-based sources. Stored as integral (value*ms) and covered-duration (ms) columns; the average is computed on read. Yields the duty cycle on 0/100 or boolean-like signals. AB#4336. */
  | 'TIME_WEIGHTED_AVG';

export type SystemStreamDataCkRollupSourceReferenceInput = {
  sourceArchiveRtId?: InputMaybe<Scalars['String']['input']>;
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validTo?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SystemStreamDataRawArchiveInput = {
  columns?: InputMaybe<Array<InputMaybe<SystemStreamDataCkArchiveColumnInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  conflictPrecedence?: InputMaybe<Array<InputMaybe<SystemStreamDataCkArchiveConflictKeyInput>>>;
  dirtyWindows?: InputMaybe<Array<InputMaybe<SystemStreamDataCkArchiveDirtyWindowInput>>>;
  lastRecomputeFailureAt?: InputMaybe<Scalars['DateTime']['input']>;
  lastRecomputeFailureReason?: InputMaybe<Scalars['String']['input']>;
  lastRecomputeStartedAt?: InputMaybe<Scalars['DateTime']['input']>;
  lastRecomputeSuccessAt?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  maxRetroactiveReachMs?: InputMaybe<Scalars['Int']['input']>;
  pendingRecomputeRanges?: InputMaybe<Array<InputMaybe<SystemStreamDataCkArchiveRecomputeRangeInput>>>;
  rawRetentionMs?: InputMaybe<Scalars['Int']['input']>;
  recomputeInProgress?: InputMaybe<Scalars['Boolean']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SystemStreamDataCkArchiveStatus>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  targetCkTypeId?: InputMaybe<Scalars['String']['input']>;
};

export type SystemStreamDataRawArchiveInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemStreamDataRawArchiveInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemStreamDataRecomputeJobInput = {
  archiveRtId?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  durationMs?: InputMaybe<Scalars['Int']['input']>;
  errorReason?: InputMaybe<Scalars['String']['input']>;
  finishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  lastProgressAt?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rangeEnd?: InputMaybe<Scalars['DateTime']['input']>;
  rangeStart?: InputMaybe<Scalars['DateTime']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rowsProcessed?: InputMaybe<Scalars['Int']['input']>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtIdScope?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  stagingTableName?: InputMaybe<Scalars['String']['input']>;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  state?: InputMaybe<SystemStreamDataCkRecomputeJobState>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  trigger?: InputMaybe<SystemStreamDataCkRecomputeTrigger>;
  windowsProcessed?: InputMaybe<Scalars['Int']['input']>;
};

export type SystemStreamDataRecomputeJobInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemStreamDataRecomputeJobInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemStreamDataRollupArchiveInput = {
  aggregations?: InputMaybe<Array<InputMaybe<SystemStreamDataCkRollupAggregationInput>>>;
  bucketAlignment?: InputMaybe<SystemStreamDataBucketAlignment>;
  bucketSizeMs?: InputMaybe<Scalars['Long']['input']>;
  carryLookbackMs?: InputMaybe<Scalars['Long']['input']>;
  columns?: InputMaybe<Array<InputMaybe<SystemStreamDataCkArchiveColumnInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  conflictPrecedence?: InputMaybe<Array<InputMaybe<SystemStreamDataCkArchiveConflictKeyInput>>>;
  dirtyWindows?: InputMaybe<Array<InputMaybe<SystemStreamDataCkArchiveDirtyWindowInput>>>;
  frozenUntil?: InputMaybe<Scalars['DateTime']['input']>;
  lastAggregatedBucketEnd?: InputMaybe<Scalars['DateTime']['input']>;
  lastRecomputeFailureAt?: InputMaybe<Scalars['DateTime']['input']>;
  lastRecomputeFailureReason?: InputMaybe<Scalars['String']['input']>;
  lastRecomputeStartedAt?: InputMaybe<Scalars['DateTime']['input']>;
  lastRecomputeSuccessAt?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  maxRetroactiveReachMs?: InputMaybe<Scalars['Int']['input']>;
  pendingRecomputeRanges?: InputMaybe<Array<InputMaybe<SystemStreamDataCkArchiveRecomputeRangeInput>>>;
  rawRetentionMs?: InputMaybe<Scalars['Int']['input']>;
  recomputeInProgress?: InputMaybe<Scalars['Boolean']['input']>;
  referenceTimeZone?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  sourceArchiveRtId?: InputMaybe<Scalars['String']['input']>;
  sources?: InputMaybe<Array<InputMaybe<SystemStreamDataCkRollupSourceReferenceInput>>>;
  status?: InputMaybe<SystemStreamDataCkArchiveStatus>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  targetCkTypeId?: InputMaybe<Scalars['String']['input']>;
  watermarkLagMs?: InputMaybe<Scalars['Long']['input']>;
};

export type SystemStreamDataRollupArchiveInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemStreamDataRollupArchiveInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemStreamDataTimeRangeArchiveInput = {
  columns?: InputMaybe<Array<InputMaybe<SystemStreamDataCkArchiveColumnInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  conflictPrecedence?: InputMaybe<Array<InputMaybe<SystemStreamDataCkArchiveConflictKeyInput>>>;
  dirtyWindows?: InputMaybe<Array<InputMaybe<SystemStreamDataCkArchiveDirtyWindowInput>>>;
  lastRecomputeFailureAt?: InputMaybe<Scalars['DateTime']['input']>;
  lastRecomputeFailureReason?: InputMaybe<Scalars['String']['input']>;
  lastRecomputeStartedAt?: InputMaybe<Scalars['DateTime']['input']>;
  lastRecomputeSuccessAt?: InputMaybe<Scalars['DateTime']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  maxRetroactiveReachMs?: InputMaybe<Scalars['Int']['input']>;
  pendingRecomputeRanges?: InputMaybe<Array<InputMaybe<SystemStreamDataCkArchiveRecomputeRangeInput>>>;
  period?: InputMaybe<Scalars['Seconds']['input']>;
  rawRetentionMs?: InputMaybe<Scalars['Int']['input']>;
  recomputeInProgress?: InputMaybe<Scalars['Boolean']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SystemStreamDataCkArchiveStatus>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  targetCkTypeId?: InputMaybe<Scalars['String']['input']>;
};

export type SystemStreamDataTimeRangeArchiveInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemStreamDataTimeRangeArchiveInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemTenantConfigurationInput = {
  configurationValue?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemTenantConfigurationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemTenantConfigurationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemTenantInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  databaseName?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  parentTenantId?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
};

export type SystemTenantInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemTenantInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemTenantModeConfigurationInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  environmentMode?: InputMaybe<SystemEnvironmentModes>;
  maintenanceLevel?: InputMaybe<SystemMaintenanceLevels>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  publishCkModelObservability?: InputMaybe<Scalars['Boolean']['input']>;
  publishWorkloadObservability?: InputMaybe<Scalars['Boolean']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  usedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemTenantModeConfigurationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemTenantModeConfigurationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemTextSearchFilterInput = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
};

export type SystemTimeRangeInput = {
  from?: InputMaybe<Scalars['DateTime']['input']>;
  to?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SystemUiBrandingInput = {
  appName?: InputMaybe<Scalars['String']['input']>;
  appTitle?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  darkTheme?: InputMaybe<SystemUiThemePaletteInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  favicon?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  footerLogo?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  headerLogo?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  lightTheme?: InputMaybe<SystemUiThemePaletteInput>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemUiBrandingInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemUiBrandingInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemUiDashboardInput = {
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  columns?: InputMaybe<Scalars['Int']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  gap?: InputMaybe<Scalars['Int']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rowHeight?: InputMaybe<Scalars['Int']['input']>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemUiDashboardInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemUiDashboardInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemUiDashboardWidgetInput = {
  col?: InputMaybe<Scalars['Int']['input']>;
  colSpan?: InputMaybe<Scalars['Int']['input']>;
  config?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  dataSourceCkTypeId?: InputMaybe<Scalars['String']['input']>;
  dataSourceRtId?: InputMaybe<Scalars['String']['input']>;
  dataSourceType?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  row?: InputMaybe<Scalars['Int']['input']>;
  rowSpan?: InputMaybe<Scalars['Int']['input']>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type SystemUiDashboardWidgetInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemUiDashboardWidgetInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemUiEntityFormColumnInput = {
  attributePath?: InputMaybe<Scalars['String']['input']>;
  display?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type SystemUiEntityFormFieldInput = {
  associationRoleId?: InputMaybe<Scalars['String']['input']>;
  attributePath?: InputMaybe<Scalars['String']['input']>;
  default?: InputMaybe<Scalars['String']['input']>;
  editor?: InputMaybe<Scalars['String']['input']>;
  help?: InputMaybe<Scalars['String']['input']>;
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  max?: InputMaybe<Scalars['Decimal']['input']>;
  min?: InputMaybe<Scalars['Decimal']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  pattern?: InputMaybe<Scalars['String']['input']>;
  placeholder?: InputMaybe<Scalars['String']['input']>;
  readOnly?: InputMaybe<Scalars['String']['input']>;
  recordColumns?: InputMaybe<Array<Scalars['String']['input']>>;
  referenceCkTypeId?: InputMaybe<Scalars['String']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  secret?: InputMaybe<Scalars['Boolean']['input']>;
  sectionKey?: InputMaybe<Scalars['String']['input']>;
  visibleWhen?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type SystemUiEntityFormInput = {
  canCreate?: InputMaybe<Scalars['Boolean']['input']>;
  canDelete?: InputMaybe<Scalars['Boolean']['input']>;
  canDuplicate?: InputMaybe<Scalars['Boolean']['input']>;
  canEdit?: InputMaybe<Scalars['Boolean']['input']>;
  canExport?: InputMaybe<Scalars['Boolean']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  customComponent?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<InputMaybe<SystemUiEntityFormFieldInput>>>;
  generateRemainingFields?: InputMaybe<Scalars['Boolean']['input']>;
  generatedSectionTitle?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  includeDerivedTypes?: InputMaybe<Scalars['Boolean']['input']>;
  listColumns?: InputMaybe<Array<InputMaybe<SystemUiEntityFormColumnInput>>>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  sections?: InputMaybe<Array<InputMaybe<SystemUiEntityFormSectionInput>>>;
  singleton?: InputMaybe<Scalars['Boolean']['input']>;
  singletonWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  targetCkTypeId?: InputMaybe<Scalars['String']['input']>;
};

export type SystemUiEntityFormInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemUiEntityFormInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemUiEntityFormSectionInput = {
  collapsed?: InputMaybe<Scalars['Boolean']['input']>;
  columns?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SystemUiMappingCoverageConfigurationInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  sourceCandidateCkTypeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemUiMappingCoverageConfigurationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemUiMappingCoverageConfigurationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemUiProcessDiagramInput = {
  animations?: InputMaybe<Scalars['String']['input']>;
  canvasBackgroundColor?: InputMaybe<Scalars['String']['input']>;
  canvasHeight?: InputMaybe<Scalars['Int']['input']>;
  canvasWidth?: InputMaybe<Scalars['Int']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  connections?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  elements?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  primitives?: InputMaybe<Scalars['String']['input']>;
  propertyBindings?: InputMaybe<Scalars['String']['input']>;
  refreshInterval?: InputMaybe<Scalars['Int']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  symbolInstances?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  transformProperties?: InputMaybe<Scalars['String']['input']>;
  variables?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type SystemUiProcessDiagramInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemUiProcessDiagramInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemUiSymbolDefinitionInput = {
  boundsHeight?: InputMaybe<Scalars['Int']['input']>;
  boundsWidth?: InputMaybe<Scalars['Int']['input']>;
  canvasSizeHeight?: InputMaybe<Scalars['Int']['input']>;
  canvasSizeWidth?: InputMaybe<Scalars['Int']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  connectionPoints?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  gridSize?: InputMaybe<Scalars['Int']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parameters?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  previewImage?: InputMaybe<Scalars['String']['input']>;
  primitives?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  symbolInstances?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  tags?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type SystemUiSymbolDefinitionInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemUiSymbolDefinitionInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemUiSymbolLibraryInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  children?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  isBuiltIn?: InputMaybe<Scalars['Boolean']['input']>;
  isReadOnly?: InputMaybe<Scalars['Boolean']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type SystemUiSymbolLibraryInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemUiSymbolLibraryInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemUiThemeGradientInput = {
  endColor?: InputMaybe<Scalars['String']['input']>;
  startColor?: InputMaybe<Scalars['String']['input']>;
};

export type SystemUiThemePaletteInput = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  footerGradient?: InputMaybe<SystemUiThemeGradientInput>;
  headerGradient?: InputMaybe<SystemUiThemeGradientInput>;
  neutralColor?: InputMaybe<Scalars['String']['input']>;
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  secondaryColor?: InputMaybe<Scalars['String']['input']>;
  tertiaryColor?: InputMaybe<Scalars['String']['input']>;
};

export type SystemUiTreeNavigationConfigurationInput = {
  configuredBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  mapsFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  mapsTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  perspectives?: InputMaybe<Array<InputMaybe<SystemUiTreePerspectiveConfigInput>>>;
  relatesFrom?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  relatesTo?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
  roles?: InputMaybe<Array<InputMaybe<SystemUiTreeNavigationRoleConfigInput>>>;
  rtBlueprintAppliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rtBlueprintLocked?: InputMaybe<Scalars['Boolean']['input']>;
  rtBlueprintSource?: InputMaybe<Scalars['String']['input']>;
  rtWellKnownName?: InputMaybe<Scalars['String']['input']>;
  taggedBy?: InputMaybe<Array<InputMaybe<RtAssociationInput>>>;
};

export type SystemUiTreeNavigationConfigurationInputUpdate = {
  /** Names of Secret attributes to clear (camelCase, like the item's attribute fields). Clearing is always explicit: a secret that is omitted, null or "" in the item stays unchanged. Clearing a required secret is an error. */
  clearSecretAttributes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Item to update */
  item: SystemUiTreeNavigationConfigurationInput;
  rtId?: InputMaybe<Scalars['OctoObjectId']['input']>;
};

export type SystemUiTreeNavigationRoleConfigInput = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  grouped?: InputMaybe<Scalars['Boolean']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<Scalars['String']['input']>;
  sortIndex?: InputMaybe<Scalars['Int']['input']>;
  sourceCkTypeId?: InputMaybe<Scalars['String']['input']>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SystemUiTreePerspectiveConfigInput = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  primaryDirection?: InputMaybe<Scalars['String']['input']>;
  primaryRoleId?: InputMaybe<Scalars['String']['input']>;
  rootCkTypeId?: InputMaybe<Scalars['String']['input']>;
  rootMode?: InputMaybe<Scalars['String']['input']>;
  secondaryRoleIds?: InputMaybe<Array<Scalars['String']['input']>>;
  sortIndex?: InputMaybe<Scalars['Int']['input']>;
};

/** Enum of valid update types */
export type UpdateType =
  | 'DELETE'
  | 'INSERT'
  | 'REPLACE'
  | 'UNDEFINED'
  | 'UPDATE';
