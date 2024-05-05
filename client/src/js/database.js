import { openDB } from 'idb';

// connect to the db w/ indexeddb
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  
// accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Put to the database');

  // connect to db
  const jateDb = await openDB('jate', 1);

  // create new transaction ('[database]', '[data privileges]')
  const tx = jateDb.transaction('jate', 'readwrite');

  // open the object store
  const store = tx.objectStore('jate');

  // add method passes content into the store
  const request = store.add({ jate: content });

  // req confirmation
  const result = await request;
  console.log('Data saved to the database', result);
}





// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

// example
// // Export a function we will use to GET all from the database.
// export const getAllDb = async () => {
//   console.log('GET all from the database');

//   // Create a connection to the database database and version we want to use.
//   const todosDb = await openDB('todos', 1);

//   // Create a new transaction and specify the database and data privileges.
//   const tx = todosDb.transaction('todos', 'readonly');

//   // Open up the desired object store.
//   const store = tx.objectStore('todos');

//   // Use the .getAll() method to get all data in the database.
//   const request = store.getAll();

//   // Get confirmation of the request.
//   const result = await request;
//   console.log('result.value', result);
//   return result;
// };





















initdb();
