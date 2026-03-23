//Write your code here

let attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP", 
  ticketPrice: 150,
  checkedIn: true
};


function logAttendeeName(attendeeObj) {
  console.log(attendeeObj.name);
}


function logTicketPrice(attendeeObj) {
  console.log(attendeeObj.ticketPrice);
}


function updateTicketType(attendeeObj, newType) {
  attendeeObj.ticketType = newType;
}


function updateTicketPrice(attendeeObj, newPrice) {
  attendeeObj.ticketPrice = newPrice;}

function removeEventProperty(attendeeObj) {
  delete attendeeObj.event;
} 

function addCheckedInProperty(attendeeObj) {
  attendeeObj.checkedIn = true;
} 








//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};