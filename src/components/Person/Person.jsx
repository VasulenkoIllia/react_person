import React from 'react';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    {person.age ? <p className="Person__age">{`I am  ${person.age}`}</p> : ''}
    <p className="Person__partner">
      {/* eslint-disable-next-line no-nested-ternary */}
      {person.isMarried
        ? person.sex === 'm'
          ? `${person.partnerName} is my wife`
          : `${person.partnerName} is my husband`
        : 'I am not married'}
    </p>
  </section>
);
