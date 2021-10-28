import React from 'react';

const Categories = ({ filterData }) => {
  return (
    <>
      <ul>
        <li onClick={() => filterData('Surveys and Forms')}>
          Surveys and Forms
        </li>
        <li onClick={() => filterData('Digital Marketing')}>
          Digital Marketing
        </li>
        <li onClick={() => filterData('Platform News and Updates')}>
          Platform News and Updates
        </li>
        <li onClick={() => filterData('Tips and Best Practise')}>
          Tips and Best Practise
        </li>
        <li onClick={() => filterData('Marketing Analytics')}>
          Marketing Analytics
        </li>

        <li onClick={() => filterData('Ecommerce')}>Ecommerce</li>
        <li onClick={() => filterData('Email Marketing')}>Email Marketing</li>
        <li onClick={() => filterData('Marketing Automation')}>
          Marketing Automation
        </li>
        <li onClick={() => filterData('Platform News and Updates')}>
          Platform News and Updates
        </li>
      </ul>
    </>
  );
};

export default Categories;
