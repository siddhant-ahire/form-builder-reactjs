import $ from "jquery"; //Load jquery
import React, { createRef, useContext, useEffect, useState } from "react"; //For react component
import { MyContext } from "./context";
import ReactJson from 'react-json-view'

window.jQuery = $; //JQuery alias
window.$ = $; //JQuery alias

require("jquery-ui-sortable"); //For FormBuilder Element Drag and Drop
require("formBuilder/dist/form-render.min.js")

const FormRender = () => {
    const { form, setForm } = useContext(MyContext);
    const [ output, setOutput] = useState({});
    const fb = createRef();
    let formRender;

    useEffect(() => {
          console.log(form)
          let formData = form;
          formRender = $(fb.current).formRender({ formData });
    }, [form])

    useEffect(() => {
      console.log(fb)
    }, [])
    function saveData() {
      if(Object.keys($(fb.current)?.formRender("userData")).length > 0) {
        setOutput($(fb.current).formRender("userData"))
      }
    }
    return (
        <div>
            <h1>Display Form</h1>
            <form ref={fb}></form>
            {Object.keys(form).length > 0 && 
            <>
              <button
              onClick={saveData}
              type="button"
              >
                Submit Data
              </button>
              {Object.keys(output).length > 0 &&
                <ReactJson src={JSON.parse(JSON.stringify(output))} />
              }            
            </>
            }

        </div>
    )
}

export default FormRender