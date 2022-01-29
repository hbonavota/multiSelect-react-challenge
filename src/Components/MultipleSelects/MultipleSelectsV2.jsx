import React, { useState } from "react";
import "./MultipleSelectsV2.css";

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

const MultipleSelectsV2 = () => {
    const [toggleValue, settoggleValue] = useState(false);
    const [selectedValues, setSelectedValues] = useState([]);

    let chooseValue = selectedValues.slice(0, 3);
    let chooseWithSpread = [...chooseValue, "...", selectedValues.length - chooseValue.length];

    const toggle = () => {
        toggleValue ? settoggleValue(false) : settoggleValue(true)
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
        <div className="faq-container">
            <h3 className="title-v2">Multi Select</h3>
            <div className="faq">
                {
                    toggleValue ?
                        null
                        :
                        <span className={toggleValue || selectedValues.length > 0 ? "inputChoose" : "active"}>Choose a tag</span>
                }

                <div className="lista">
                    {
                        selectedValues.length > 3 ?
                        chooseWithSpread?.map((e) => <li>{e}</li>)
                        :
                        selectedValues?.map((e) => <li>{e}</li>)
                    }
                </div>
                <div className="allCheckboxDiv">
                    <form id="formCheckbox" onChange={handleChange} className={toggleValue ? "active" : "faq-toggle"}>
                        <div className="fa-times">
                            {
                                optionData.map((e) => <label className="label_tag" >{e.label}<input type="checkbox" value={e.value}></input> </label>)
                            }
                        </div>
                    </form>
                </div>
                <button onClick={toggle} className={toggleValue ? "active2" : "faq-toggle"}>
                   {/*  <i className="fa-times"></i> */}
                    {/* <i className="faq-toggle"> ↓</i> */}↓
                </button>
            </div>
        </div>
    );

}

export default MultipleSelectsV2;