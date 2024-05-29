import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    const date = await fs.readFile(PATH_DB, 'utf-8');
    const parstContacts = JSON.parse(date);
    const selectedContacts = parstContacts.filter(() => Math.random() >= 0.5);
    await fs.writeFile(PATH_DB, JSON.stringify(selectedContacts, null, 2));
  } catch (error) {
    console.log(error);
  }
};

await thanos();
