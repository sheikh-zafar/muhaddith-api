import { google } from 'googleapis';

export async function getDriveFiles() {
  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  auth.setCredentials({
    access_token: process.env.GOOGLE_ACCESS_TOKEN,
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  const drive = google.drive({ version: 'v3', auth });

  const response = await drive.files.list({
    q: '1nGDq9xCGtpqInixA4VOrZJ1msvm0n84B', // Replace 'FOLDER_ID' with the actual folder ID
    fields: 'files(name, mimeType)', // Specify the fields you want to retrieve
  });

  const files = response.data.files;
  return files;
  
}


