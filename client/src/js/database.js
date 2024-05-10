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

  
// accepts some content and puts it to the database
export const putDb = async (content) => {
  console.log('Put to the database');

  // connect to db
  const jateDb = await openDB('jate', 1);

  // create new transaction ('[database]', '[data privileges]')
  const tx = jateDb.transaction('jate', 'readwrite');

  // open the object store
  const store = tx.objectStore('jate');

  // put method passes content into the store
  const request = store.put({ id: 1, value: content });

  // req confirmation
  const result = await request;
  console.log('Data saved to the database', result);
}



// gets all the content from the database
export const getDb = async () => {
  console.log('Get all from the database');

  const jateDb = await openDB('jate', 1);

  // readonly because we're only getting info, not adding or editing
  const tx = jateDb.transaction('jate', 'readonly');

  const store = tx.objectStore('jate');

  // getAll does what it says on the tin
  const request = store.get(1);

  const result = await request;
  console.log('result.value', result);
  return result?.value;
};



initdb();
