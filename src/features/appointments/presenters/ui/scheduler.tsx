'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Calendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid'
import { AppointmentDialog } from '@/features/appointments/presenters/ui/appointment-dialog';

export function Scheduler() {
  const calendarRef = useRef<HTMLDivElement | null>(null);
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  useEffect(() => {
    if (calendarRef.current) {
      const calendar = new Calendar(calendarRef.current, {
        plugins: [timeGridPlugin],
        initialView: 'timeGridWeek',
        events: 'https://fullcalendar.io/api/demo-feeds/events.json',
        headerToolbar: {
          left: 'prev,next',
          center: 'title',
          right: 'timeGridWeek,timeGridDay',
        },
        eventClick: (info) => {
          setSelectedAppointment(info.event); 
          setIsDialogOpen(true); 
        },
      });

      calendar.render();

      return () => {
        calendar.destroy();
      };
    }
  }, []);

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedAppointment(null); 
  };

  return (
    <>
      <div ref={calendarRef} />
      {isDialogOpen && selectedAppointment && (
        <AppointmentDialog appoinment={selectedAppointment} />
      )}
    </>
  );
};