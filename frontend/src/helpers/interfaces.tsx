export interface Doctor {
  _id: string | undefined;
  firstName: string | null;
  lastName: string | null;
}

export interface Professionals {
  Professionals: Doctor[];
}

export interface Specialties {
  Specialties: Specialty[];
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
  closestDay: Date | number;
  doctorsCalendar: DoctorsCalendar[];
}

export interface Props {
  availableDays?: AvailableDays[];
  closestDay: Date | number;
}

export interface State2 {
  today: Date;
  selectedDay: number;
  date: number | Date;
  month: number;
  year: number;
  startDay: number;
  closestDay: Date | number;
}

export interface IActions {
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
  payload: number | Date;
}