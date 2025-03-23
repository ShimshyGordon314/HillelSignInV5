rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /logs/{logId} {
    	//Allow anonymously authenticated pages to write to the log
      allow create: if request.auth != null;
      //As of now, this allows any authenticated page to read and delete from the log. In the future, this should only allow pages with authenticated with a valid email/password to do these things.
      allow read, delete: if request.auth != null;
    }
  }
}