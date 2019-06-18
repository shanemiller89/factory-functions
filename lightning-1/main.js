function doctorContact(name, specialty, address) {
  return {
    doctors_name: name,
    doctors_specialty: specialty,
    doctors_address: address
  };
}

console.log(doctorContact("Shane", "Orthodonist", "123 Main St."));
