import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => {
    const responses = [];

    results.forEach((result) => {
      if (result.status === 'fulfilled') responses.push(result);

      if (result.status === 'rejected') {
        responses.push({
          status: result.status,
          value: result.reason,
        });
      }
    });
    return responses;
  });
}
