const fs = require('fs');
const path = require('path');

// this path needs to be relative to work with fs
const contactsLocation = path.join(__dirname, 'contacts.json');

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  const data = fs.readFileSync(contactsLocation);
  return JSON.parse(data);
};

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  const toAppend = JSON.stringify(contacts, null, 2);

  fs.writeFileSync(contactsLocation, toAppend, function (err) {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
};

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts,
};
