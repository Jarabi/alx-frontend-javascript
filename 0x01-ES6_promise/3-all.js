import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((values) => {
    const [uploadResponse, userResponse] = values;

    console.log(
      uploadResponse.body,
      userResponse.firstName,
      userResponse.lastName,
    );
  });
}
