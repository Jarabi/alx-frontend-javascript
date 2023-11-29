/* eslint-disable no-unused-vars */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((response) => {
      const [uploadResponse, newUserResponse] = response;
      console.log(
        uploadResponse.body,
        newUserResponse.firstName,
        newUserResponse.lastName,
      );
    })
    .catch((error) => {
      console.log('Signup system offline');
    });
}
