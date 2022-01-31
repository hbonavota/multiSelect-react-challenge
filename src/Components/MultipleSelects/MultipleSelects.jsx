import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./MultipleSelects.module.css";

const optionData = [
    { id: "1a", label: "Family", value: "Family" },
    { id: "1b", label: "Family in law", value: "Family in law" },
    { id: "1c", label: "Co-workers", value: "Co-workers" },
    { id: "1d", label: "Friends", value: "Friends" },
    { id: "1e", label: "Hockey Club", value: "Hockey Club" },
    { id: "1f", label: "Startup Investor", value: "Startup Investor" },
    { id: "1g", label: "Swiss Embassy", value: "Swiss Embassy" },
    { id: "1h", label: "Zurich meetup Group", value: "Zurich meetup Group" }
];

const MultipleSelectsV1 = () => {
    const [toggleValue, settoggleValue] = useState(false);
    const [selectedValues, setSelectedValues] = useState([]);
    const [inputValue, setInputValue] = useState("");

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
    const handleInputChange = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
        autocomplete();
    }
    const autocomplete = () => {
        const optionsValues = optionData.map(e => e.value.toLowerCase());
        return optionsValues.filter(e => {
            let regex = new RegExp(inputValue, "gi");
            return e.toLowerCase().match(regex)
        });
    }

    const showAutoComplete = (found) => {
        return found?.map((e) => <label className={styles.label_tag} >{e}<input type="checkbox" value={e}></input> </label>)
    }

    return (
        <div className={styles.container}>

            <header className={styles.title_v2} >
                <Link to="/"><button className={styles.btnBack}>Go Back</button></Link>
                <h3 className={styles.title_v2}>Multi Select</h3>
            </header>

            <div className={styles.component}>
                {
                    <span className={toggleValue || selectedValues.length > 0 ? styles.inputChoose : styles.active}>Choose a tag.</span>
                }

                <div className={styles.lista}>
                    {
                        selectedValues.length > 3 ?
                            chooseWithSpread?.map((e) => <li key={e}>{e}</li>)
                            :
                            selectedValues?.map((e) => <li key={e}>{e}</li>)
                    }
                </div>

                <div>
                    <form id="formCheckbox" onChange={handleChange} className={toggleValue ? styles.active : styles.component_toggle}>
                        <div className={toggleValue ? styles.fa_times : styles.timesNone}>

                            <input value={inputValue} onChange={handleInputChange} className={styles.inputSearch} type="search" placeholder="Search..." ></input>
                            <div className={styles.inputSearch}>
                            </div>
                            {
                                showAutoComplete(autocomplete())
                            }
                        </div>
                    </form>
                </div>
                <button onClick={toggle} className={toggleValue ? styles.active2 : styles.component_toggle}><p><i class={toggleValue ? styles.arrowUp : styles.arrowDown  }></i></p></button>
            </div>
        </div>
    );

}

export default MultipleSelectsV1;