import React, {components} from 'react';
import Header from '../../components/header/Header';
import Select from 'react-select';

//styles
import './reportMin.css'

//images
import iconReturn from '../../assets/img/return.svg'


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

function ReportMin({name}) {
    return (
      <> <Header />
        <div className="container">
            <div className="welcome-title">
                <img src={iconReturn} alt="" />
                <span>{name ? "" : "Reportes al Ministerio"}</span> 
            </div>
            <div className="boxWelcome">
                <div className="box-search">
                  <input className="input-search" type="search" name="" id="" placeholder="Búsqueda por ....."/>
                  <div>
                  <Select options={options} />
                  </div>
                </div>
            </div>
        </div>
      </>
    )
}

export default ReportMin
