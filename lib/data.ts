export async function getCallsData() {
  // Simulated data for demonstration
  return {
    totalCalls: 156,
    appointmentsBooked: 42,
    averageCallDuration: 8.5,
    averageRating: 4.2,
    weeklyCallVolume: [
      { date: "Mon 1", calls: 23 },
      { date: "Tue 2", calls: 28 },
      { date: "Wed 3", calls: 32 },
      { date: "Thu 4", calls: 25 },
      { date: "Fri 5", calls: 29 },
      { date: "Sat 6", calls: 18 },
      { date: "Sun 7", calls: 15 }
    ],
    recentCalls: [
      {
        id: 1,
        from_number: "+1 (555) 123-4567",
        duration: 485,
        call_type: "Appointment",
        appointment_booked: true,
        rating: 5,
        start_time: "2024-03-20T10:30:00Z"
      },
      {
        id: 2,
        from_number: "+1 (555) 234-5678",
        duration: 362,
        call_type: "Inquiry",
        appointment_booked: false,
        rating: 4,
        start_time: "2024-03-20T11:15:00Z"
      },
      {
        id: 3,
        from_number: "+1 (555) 345-6789",
        duration: 724,
        call_type: "Appointment",
        appointment_booked: true,
        rating: 5,
        start_time: "2024-03-20T13:45:00Z"
      }
    ]
  };
}