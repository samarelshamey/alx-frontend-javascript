import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => (
      result.map((arr) => ({
        status: arr.status,
        value: arr.status === 'fulfilled' ? arr.value : String(arr.reason),
      }))
    ));
}
