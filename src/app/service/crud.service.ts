import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage, ref, listAll } from "firebase/storage";
import { firebaseConfig } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // Create a reference under which you want to list
  abc() {
    let storage = getStorage(initializeApp(firebaseConfig), "gs://personalblog-5b107.appspot.com");
    const listRef = ref(storage, 'image/jpeg');
    // Find all the prefixes and items.
    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
          console.log(folderRef);
        });
        res.items.forEach((itemRef) => {
          // All the items under listRef.
          console.log(listRef);
        });
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });
  }
}
