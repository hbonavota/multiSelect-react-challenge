import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./MultipleSelects.module.css";

const optionData = [
    { label: "Family", value: "Family" },
    { label: "Family in law", value: "Family in law" },
    { label: "Co-workers", value: "Co-workers" },
    { label: "Friends", value: "Friends" },
    { label: "Hockey Club", value: "Hockey Club" },
    { label: "Startup Investor", value: "Startup Investor" },
    { label: "Swiss Embassy", value: "Swiss Embassy" },
    { label: "Zurich meetup Group", value: "Zurich meetup Group" }
];

const MultipleSelectsV1 = () => {
    const [toggleValue, settoggleValue] = useState(false);
    const [selectedValues, setSelectedValues] = useState([]);

    let chooseValue = selectedValues.slice(0, 3);
    let chooseWithSpread = [...chooseValue, "...", selectedValues.length - chooseValue.length];

    const toggle = () => {
        toggleValue ? settoggleValue(false) : settoggleValue(true);
    }

    const handleChange = () => {
        let allOptionsForm = document.getElementById("formCheckbox");
        let valueChecked = [];
        for (var i = 0, l = allOptionsForm.length; i < l; i++) {
            if (allOptionsForm[i].checked) valueChecked.push(allOptionsForm[i].value);
        }
        setSelectedValues(valueChecked);
    }

    return (
        <div className={styles.container}>

            <header className={styles.title_v2} >
                <Link to="/"><button className={styles.btnBack}>Go Back Home</button></Link>
                <h3 className={styles.title_v2}>Multi Select</h3>
            </header>

            <div className={styles.component}>
                {
                    <span className={toggleValue || selectedValues.length > 0 ? styles.inputChoose : styles.active}>Choose a tag.</span>
                }

                <div className={styles.lista}>
                    {
                        selectedValues.length > 3 ?
                            chooseWithSpread?.map((e) => <li>{e}</li>)
                            :
                            selectedValues?.map((e) => <li>{e}</li>)
                    }
                </div>

                <div>
                    <form id="formCheckbox" onChange={handleChange} className={toggleValue ? styles.active : styles.component_toggle}>
                        <div className={toggleValue ? styles.fa_times : styles.timesNone}>

                                <input className={styles.inputSearch} type="search" placeholder="Search..." ></input>
                            <div claseName={styles.inputSearch}>
                            </div>
                            {
                                optionData.map((e) => <label className={styles.label_tag} >{e.label}<input type="checkbox" value={e.value}></input> </label>)
                            }
                        </div>
                    </form>
                </div>
                <button onClick={toggle} className={toggleValue ? styles.active2 : styles.component_toggle}>↓</button>
            </div>
        </div>
    );

}

export default MultipleSelectsV1;