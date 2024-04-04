import React from 'react';

function checkData(person) {
  if (person.isMarried === false) {
    return 'I am not married';
  }

  if (person.isMarried === true && person.partnerName && person.sex === 'm') {
    return `${person.partnerName} is my wife`;
  }

  if (person.isMarried === true && person.partnerName && person.sex === 'f') {
    return `${person.partnerName} is my husband`;
  }

  return true;
}

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`${person.name}`}</h2>
    <p className="Person__age">{`${person.age ? person.age : ''}`}</p>
    <p className="Person__partner">{checkData(person)}</p>
  </section>
);
