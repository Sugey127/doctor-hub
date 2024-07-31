import { MedicalClinic } from "@/features/medical-clinics/domain/medical-clinic";
import { User } from "@/features/users/domain/user";

type Status = 'scheduled' | 'canceled' | 'finished';

export interface Appointment {
    id: string;
    patient: User;
    doctor: User;
    clinic: MedicalClinic;

    scheduledFor: Date;
    status: Status;
}