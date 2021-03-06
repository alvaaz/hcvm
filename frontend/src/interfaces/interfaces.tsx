import React from 'react';

export interface Doctor {
  _id: string | undefined;
  firstName: string | null;
  lastName: string | null;
  specialties: Specialty[];
}

export interface Professionals {
  Professionals: Doctor[];
}

export interface Specialties {
  Specialties: Specialty[];
}

export interface DeleteProfessionalData {
  _id: string | undefined;
  firstName: string | null;
  lastName: string | null;
}

export interface DeleteProfessionalVariables {
  id: string | null;
}

export interface AddProfessionalData {
  _id: string | undefined;
  firstName: string | null;
  lastName: string | null;
}

export interface AddProfessionalVariables {
  firstName: string | null;
  lastName: string | null;
}

export interface Hour {
  _id: string | undefined;
  professional: Doctor;
  specialty: Specialty;
  dates: {
    date: string;
    hours: string[];
  }[];
}

export interface Specialty {
  _id: string | undefined;
  name: string | null;
}

export interface DoctorsCalendar {
  date: string | number | Date;
  hours: string[] | null;
  professional: { _id: string | null };
  specialty: { _id: string | null };
}

export interface AvailableDays {
  dates: DoctorsCalendar[];
  professional: { _id: string | null };
  specialty: { _id: string | null };
}

export interface State {
  specialties: [];
  specialty: Specialty;
  doctors: [];
  doctor: Doctor;
  placeholder: string;
  availableDays: AvailableDays[];
  disabledDays: string[];
  doctorsCalendar: DoctorsCalendar[];
}

export interface CalendarProps {
  availableDays: string[] | null;
  parentCallback: Function;
  month: Function;
  year: Function;
}

export interface CalendarState {
  today: Date;
  selectedDay: number;
  date: number | Date;
  month: number;
  year: number;
  startDay: number;
}

export interface CalendarActions {
  NEXT_MONTH: string;
  PREV_MONTH: string;
  SET_MONTH: string;
  SET_YEAR: string;
  SET_DAY: string;
  SET_DATE: string;
}

export interface ActionInput {
  type: string;
  field: string;
  payload: number;
}

export interface DialogProps {
  visible: boolean;
  onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel: () => void;
  children: React.ReactNode;
}
