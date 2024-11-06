import moment from 'moment';

export function getDate(date) {
  return moment(date).format('Do MMM YYYY');
}

export function getDateWithTime(date) {
  return `${moment(date).format('Do MMM YYYY')} at ${moment(date).format('HH:mm')}`;
}

export function getDateForInput(date) {
  return moment(date).format('YYYY-MM-DD');
}
