declare namespace homecontrols {
  interface eventData {
    event: string,
    data: object,
    success: () => void,
    error: (data: string) => void
  }
}