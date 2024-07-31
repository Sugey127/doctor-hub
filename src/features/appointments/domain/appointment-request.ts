import { User } from "@/features/users/domain/user";

type Status = 'pending' | 'rejected' | 'accepted';

export interface AppointmentRequest {
    id: string;
    user: User;
    reason: string;
    reportedSymptoms: string;
    status: Status;
}