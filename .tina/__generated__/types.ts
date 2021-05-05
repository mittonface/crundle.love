// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
  JSONObject: any;
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  sys?: Maybe<SystemInfo>;
  id: Scalars['ID'];
};

export type FormField = {
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
};




export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename?: Maybe<Scalars['String']>;
  basename?: Maybe<Scalars['String']>;
  breadcrumbs?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  collection?: Maybe<Section>;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: Maybe<Scalars['Boolean']>;
};

export type Section = {
  __typename?: 'Section';
  type?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  create?: Maybe<Scalars['String']>;
  match?: Maybe<Scalars['String']>;
  new_doc_ext?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<Document>>>;
};

export type SectionDocumentUnion = Hero_Document | Date_Document | Timeline_Document | WeddingEvents_Document;

export type SectionParams = {
  hero?: Maybe<Hero_Input>;
  date?: Maybe<Date_Input>;
  timeline?: Maybe<Timeline_Input>;
  weddingEvents?: Maybe<WeddingEvents_Input>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument?: Maybe<Document>;
  updateDocument?: Maybe<SectionDocumentUnion>;
  updateHeroDocument?: Maybe<Hero_Document>;
  updateDateDocument?: Maybe<Date_Document>;
  updateTimelineDocument?: Maybe<Timeline_Document>;
  updateWeddingEventsDocument?: Maybe<WeddingEvents_Document>;
};


export type MutationAddPendingDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  collection?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  params?: Maybe<SectionParams>;
};


export type MutationUpdateHeroDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  params?: Maybe<Hero_Input>;
};


export type MutationUpdateDateDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  params?: Maybe<Date_Input>;
};


export type MutationUpdateTimelineDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  params?: Maybe<Timeline_Input>;
};


export type MutationUpdateWeddingEventsDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  params?: Maybe<WeddingEvents_Input>;
};

export type Query = {
  __typename?: 'Query';
  node?: Maybe<Node>;
  getDocument?: Maybe<SectionDocumentUnion>;
  getCollections?: Maybe<Array<Maybe<Section>>>;
  getCollection?: Maybe<Section>;
  getHeroDocument?: Maybe<Hero_Document>;
  getHeroList?: Maybe<Array<Maybe<Hero_Document>>>;
  getDateDocument?: Maybe<Date_Document>;
  getDateList?: Maybe<Array<Maybe<Date_Document>>>;
  getTimelineDocument?: Maybe<Timeline_Document>;
  getTimelineList?: Maybe<Array<Maybe<Timeline_Document>>>;
  getWeddingEventsDocument?: Maybe<WeddingEvents_Document>;
  getWeddingEventsList?: Maybe<Array<Maybe<WeddingEvents_Document>>>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryGetDocumentArgs = {
  collection?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetCollectionArgs = {
  collection?: Maybe<Scalars['String']>;
};


export type QueryGetHeroDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetDateDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetTimelineDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetWeddingEventsDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};

export type Hero_Data = Hero_Doc_Data;

export type Hero_Input = {
  hero?: Maybe<Hero_Doc_Input>;
};

export type Hero_Values = Hero_Doc_Values;

export type Hero_Form = Hero_Doc_Form;

export type Hero_Document = Node & Document & {
  __typename?: 'Hero_Document';
  id: Scalars['ID'];
  sys?: Maybe<SystemInfo>;
  data?: Maybe<Hero_Data>;
  values?: Maybe<Hero_Values>;
  form?: Maybe<Hero_Form>;
};

export type Hero_Doc_Data = {
  __typename?: 'Hero_Doc_Data';
  hero?: Maybe<Scalars['String']>;
  sub_hero?: Maybe<Scalars['String']>;
  _body?: Maybe<Scalars['String']>;
};

export type Hero_Doc_Values = {
  __typename?: 'Hero_Doc_Values';
  hero?: Maybe<Scalars['String']>;
  sub_hero?: Maybe<Scalars['String']>;
  _body?: Maybe<Scalars['String']>;
  _template?: Maybe<Scalars['String']>;
};

export type TextField = FormField & {
  __typename?: 'TextField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
};

export type TextareaField = FormField & {
  __typename?: 'TextareaField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
};

export type Hero_Doc_FormFieldsUnion = TextField | TextareaField;

export type Hero_Doc_Form = {
  __typename?: 'Hero_Doc_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Hero_Doc_FormFieldsUnion>>>;
};

export type Hero_Doc_Input = {
  hero?: Maybe<Scalars['String']>;
  sub_hero?: Maybe<Scalars['String']>;
  _body?: Maybe<Scalars['String']>;
};

export type Date_Data = Date_Doc_Data;

export type Date_Input = {
  date?: Maybe<Date_Doc_Input>;
};

export type Date_Values = Date_Doc_Values;

export type Date_Form = Date_Doc_Form;

export type Date_Document = Node & Document & {
  __typename?: 'Date_Document';
  id: Scalars['ID'];
  sys?: Maybe<SystemInfo>;
  data?: Maybe<Date_Data>;
  values?: Maybe<Date_Values>;
  form?: Maybe<Date_Form>;
};

export type Date_Doc_Data = {
  __typename?: 'Date_Doc_Data';
  heading?: Maybe<Scalars['String']>;
  date_text?: Maybe<Scalars['String']>;
  sub_heading?: Maybe<Scalars['String']>;
  _body?: Maybe<Scalars['String']>;
};

export type Date_Doc_Values = {
  __typename?: 'Date_Doc_Values';
  heading?: Maybe<Scalars['String']>;
  date_text?: Maybe<Scalars['String']>;
  sub_heading?: Maybe<Scalars['String']>;
  _body?: Maybe<Scalars['String']>;
  _template?: Maybe<Scalars['String']>;
};

export type Date_Doc_FormFieldsUnion = TextField | TextareaField;

export type Date_Doc_Form = {
  __typename?: 'Date_Doc_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Date_Doc_FormFieldsUnion>>>;
};

export type Date_Doc_Input = {
  heading?: Maybe<Scalars['String']>;
  date_text?: Maybe<Scalars['String']>;
  sub_heading?: Maybe<Scalars['String']>;
  _body?: Maybe<Scalars['String']>;
};

export type Timeline_Data = Timeline_Doc_Data;

export type Timeline_Input = {
  timeline?: Maybe<Timeline_Doc_Input>;
};

export type Timeline_Values = Timeline_Doc_Values;

export type Timeline_Form = Timeline_Doc_Form;

export type Timeline_Document = Node & Document & {
  __typename?: 'Timeline_Document';
  id: Scalars['ID'];
  sys?: Maybe<SystemInfo>;
  data?: Maybe<Timeline_Data>;
  values?: Maybe<Timeline_Values>;
  form?: Maybe<Timeline_Form>;
};

export type Timeline_Timeline_Data = {
  __typename?: 'Timeline_Timeline_Data';
  description?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};

export type Timeline_Doc_Data = {
  __typename?: 'Timeline_Doc_Data';
  timeline?: Maybe<Array<Maybe<Timeline_Timeline_Data>>>;
  _body?: Maybe<Scalars['String']>;
};

export type Timeline_Timeline_Values = {
  __typename?: 'Timeline_Timeline_Values';
  description?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};

export type Timeline_Doc_Values = {
  __typename?: 'Timeline_Doc_Values';
  timeline?: Maybe<Array<Maybe<Timeline_Timeline_Values>>>;
  _body?: Maybe<Scalars['String']>;
  _template?: Maybe<Scalars['String']>;
};

export type DatetimeField = FormField & {
  __typename?: 'DatetimeField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  dateFormat?: Maybe<Scalars['String']>;
  timeFormat?: Maybe<Scalars['String']>;
};

export type Timeline_Timeline_FormFieldsUnion = TextField | DatetimeField;

export type Timeline_Timeline_GroupListField = FormField & {
  __typename?: 'Timeline_Timeline_GroupListField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Timeline_Timeline_FormFieldsUnion>>>;
};

export type Timeline_Doc_FormFieldsUnion = Timeline_Timeline_GroupListField | TextareaField;

export type Timeline_Doc_Form = {
  __typename?: 'Timeline_Doc_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Timeline_Doc_FormFieldsUnion>>>;
};

export type Timeline_Timeline_Input = {
  description?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};

export type Timeline_Doc_Input = {
  timeline?: Maybe<Array<Maybe<Timeline_Timeline_Input>>>;
  _body?: Maybe<Scalars['String']>;
};

export type WeddingEvents_Data = WeddingEvents_Doc_Data;

export type WeddingEvents_Input = {
  weddingEvents?: Maybe<WeddingEvents_Doc_Input>;
};

export type WeddingEvents_Values = WeddingEvents_Doc_Values;

export type WeddingEvents_Form = WeddingEvents_Doc_Form;

export type WeddingEvents_Document = Node & Document & {
  __typename?: 'WeddingEvents_Document';
  id: Scalars['ID'];
  sys?: Maybe<SystemInfo>;
  data?: Maybe<WeddingEvents_Data>;
  values?: Maybe<WeddingEvents_Values>;
  form?: Maybe<WeddingEvents_Form>;
};

export type WeddingEvents_WeddingEvents_Data = {
  __typename?: 'WeddingEvents_WeddingEvents_Data';
  name?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
  colorScheme?: Maybe<Scalars['String']>;
};

export type WeddingEvents_Doc_Data = {
  __typename?: 'WeddingEvents_Doc_Data';
  weddingEvents?: Maybe<Array<Maybe<WeddingEvents_WeddingEvents_Data>>>;
  _body?: Maybe<Scalars['String']>;
};

export type WeddingEvents_WeddingEvents_Values = {
  __typename?: 'WeddingEvents_WeddingEvents_Values';
  name?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
  colorScheme?: Maybe<Scalars['Reference']>;
};

export type WeddingEvents_Doc_Values = {
  __typename?: 'WeddingEvents_Doc_Values';
  weddingEvents?: Maybe<Array<Maybe<WeddingEvents_WeddingEvents_Values>>>;
  _body?: Maybe<Scalars['String']>;
  _template?: Maybe<Scalars['String']>;
};

export type SelectField = FormField & {
  __typename?: 'SelectField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type WeddingEvents_WeddingEvents_FormFieldsUnion = TextField | SelectField;

export type WeddingEvents_WeddingEvents_GroupListField = FormField & {
  __typename?: 'WeddingEvents_WeddingEvents_GroupListField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<WeddingEvents_WeddingEvents_FormFieldsUnion>>>;
};

export type WeddingEvents_Doc_FormFieldsUnion = WeddingEvents_WeddingEvents_GroupListField | TextareaField;

export type WeddingEvents_Doc_Form = {
  __typename?: 'WeddingEvents_Doc_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<WeddingEvents_Doc_FormFieldsUnion>>>;
};

export type WeddingEvents_WeddingEvents_Input = {
  name?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
  colorScheme?: Maybe<Scalars['String']>;
};

export type WeddingEvents_Doc_Input = {
  weddingEvents?: Maybe<Array<Maybe<WeddingEvents_WeddingEvents_Input>>>;
  _body?: Maybe<Scalars['String']>;
};

